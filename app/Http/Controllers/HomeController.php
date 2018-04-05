<?php namespace App\Http\Controllers;

use View;
use Mail;
use Auth;
//use Request;
use Response;
use Session;
use Input;

use Illuminate\Database\Eloquent;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Redirect;

use App\Http\Requests\ReachoutRequest;
use App\Http\Requests\ContactRequest;

use Laracasts\Flash\Flash;
use GuzzleHttp\Client;
use GuzzleHttp\Psr7;
use GuzzleHttp\Exception\RequestException;

use App\Helpers\GeneralHelper;

use Carbon\Carbon;

class HomeController extends GSController {

	/*
	|--------------------------------------------------------------------------
	| Home Controller
	|--------------------------------------------------------------------------
	|
	| This controller renders your application's "dashboard" for users that
	| are authenticated. Of course, you are free to change or remove the
	| controller as you wish. It is just here to get your app started!
	|
	*/
	protected $blog_url = 'https://www.glamstudios.in/wordpress/wp-json/wp/v2/';
	/**
	 * Create a new controller instance.
	 *
	 * @return void
	 */
	public function __construct()
	{
		parent::__construct();
        View::share('current_page', 'home');

	}

	/**
	 * Show the application dashboard to the user.
	 *
	 * @return Response
	 */
	public function index()	{
		return redirect('/admin');
	}

	public function getSitemap() {
		$home = (isset($_SERVER['HTTPS']) ? "https" : "http") . "://$_SERVER[HTTP_HOST]/";
		//$home = 'http://www.glamstudios.in/';
		$routes = array(
			array ('uri' => 'find', 'changefreq' => 'weekly', 'priority' => '0.80', 'static' => 1),
			array ('uri' => 'contact', 'changefreq' => 'monthly', 'priority' => '0.80', 'static' => 1),
			array ('uri' => 'home', 'changefreq' => 'weekly', 'priority' => '0.80', 'static' => 1),
			// array ('uri' => 'book/home_services', 'changefreq' => 'weekly', 'priority' => '0.80', 'static' => 1),
			array ('uri' => 'blog', 'changefreq' => 'daily', 'priority' => '0.80', 'static' => 1),
			array ('uri' => 'about_us', 'changefreq' => 'monthly', 'priority' => '0.80', 'static' => 1),
			array ('uri' => 'privacy', 'changefreq' => 'monthly', 'priority' => '0.80', 'static' => 1),
			array ('uri' => 'terms', 'changefreq' => 'monthly', 'priority' => '0.80', 'static' => 1),
			array ('uri' => 'cancellation_refund_policy', 'changefreq' => 'monthly', 'priority' => '0.80', 'static' => 1),
			// array ('uri' => 'promotion/form/{p.id}', 'changefreq' => 'weekly', 'priority' => '0.50', 'static' => 0, 'selectTablesRaw' => 'promotions p', 'selectConditionRaw' => 'active = "1"'),
			array ('uri' => 'salons/{c.name}/{c.id}', 'changefreq' => 'weekly', 'priority' => '0.80', 'static' => 0, 'selectTablesRaw' => 'city c', 'selectConditionRaw' => 'active = 1'),
			//array ('uri' => 'salons/{s.display_id}/{s.slug}', 'changefreq' => 'weekly', 'priority' => '0.70', 'static' => 0, 'selectTablesRaw' => 'salons s', 'selectConditionRaw' => 'active != "0"'),
			//array ('uri' => '{c.name}/{l.name}/salons/{l.id}', 'changefreq' => 'weekly', 'priority' => '0.70', 'static' => 0, 'selectTablesRaw' => 'city c join location l on l.city_id = c.id', 'selectConditionRaw' => 'c.active = 1 and l.is_active = "y"'),
			array ('uri' => 'salon/{s.display_id}/{s.slug}', 'changefreq' => 'weekly', 'priority' => '0.80', 'static' => 0, 'selectTablesRaw' => 'salons s', 'selectConditionRaw' =>  'active != "0"'),
			array ('uri' => 'book/{s.display_id}/{s.slug}', 'changefreq' => 'weekly', 'priority' => '0.80', 'static' => 0, 'selectTablesRaw' => 'salons s', 'selectConditionRaw' => 'active != "0"')
			);

		$output = array();
		array_push($output, array('url' => $home, 'changefreq' => 'weekly', 'priority' => '1.00'));
		foreach ($routes as $key => $route) {
			if ($route['static'] == 1) {
				array_push($output, array('url' => $home.$route['uri'], 'changefreq' => $route['changefreq'], 'priority' => $route['priority']));
			}
			else {
				$select = '';
				$select_array = array();
				$uri_pieces = explode("/", $route['uri']);
				foreach ($uri_pieces as $key => $value) {
					if ($value[0] == '{') {
						$select .= substr($value, 1, -1).' as `'.substr($value, 1, -1).'`,';
						$select_array[substr($value, 1, -1)] = $key;
					}
				}
				$select = rtrim($select, ',');
				$result = DB::select("select ".$select." from ".$route['selectTablesRaw']." where ".$route['selectConditionRaw']);
				foreach ($result as $key => $value) {
					foreach ($select_array as $key => $s) {
						$uri_pieces[$s] = $value->$key;
					}
					$temp = implode($uri_pieces, "/");
					array_push($output, array('url' => $home.$temp, 'changefreq' => $route['changefreq'], 'priority' => $route['priority']));
				}
			}
		}
		$content = View::make('home.sitemap', array('output' => $output));
		return Response::make($content, 200)->header('Content-Type', 'text/xml');
	}

    public function setCity($id) {
        $c = City::find($id);
        Session::put('site_city', $c);
        echo "success";
    }

    public function promotionCollector(ReachoutRequest $request) {
        $name = Input::get('name');
        $email = Input::get('email');
        $contact = Input::get('contact');

        $ro = new Reachout();
        $ro-> name = $request-> name;
        $ro->email = $request->email;
        $ro->contact = $request->contact;
        $ro->save();

        $data=[
                 'name'=>$ro->name,
                 'email'=>$ro->email,
                 'contact'=>$ro->contact
                 ];

        Mail::send('emails.promotion_user', ['data' => $data], function ($message) use ($data) {
            $message->subject('Wow! Your Glam date is waiting for you');
            $message->from('bookings@glamstudios.in', 'GlamStudio Promotion Package Booking');
            $message->to($data['email']);
        });
       Mail::send('emails.promotion_care',['data'=> $data], function ($care_message) use ($data) {
           $care_message->subject('GlamStudio Promotion Appointment');
           $care_message->from('bookings@glamstudios.in','GlamStudio Promotion Package Booking');
           $care_message->to('bookings@glamstudios.in');
        });

        if (isset($ro->id))
            echo "Success|123";
    }

    public function contactFormCollector(ContactRequest $request) {
        $c = new Contact();
        $c->name = $request->name;
        $c->email = $request->ContactEmail;
        $c->phone = $request->ContactNumber;
        $c->purpose = $request->ContactPurpose;
        $c->contact_text = $request->ContactDescription;
        $c->save();

        $data=[
            'name'=>$c->name,
            'email'=>$c->email,
            'phone'=>$c->phone,
            'purpose'=>$c->purpose,
            'contact_text'=>$c->contact_text,
            ];

        Mail::send('emails.contact',['data'=> $data], function ($message) use ($data) {
            $message->subject('New Query Received');
            $message->from('bookings@glamstudios.in', 'GlamStudios Query');
            $message->replyTo($data['email'], $data['name']);
            $message->to('bookings@glamstudios.in');
        });

        if (isset($c->id))
            echo "Success|123";
    }


	public function showSignup() {
        return View::make('home.signup', array());
    }

	public function doSignup(ReachoutRequest $request){

		Auth::uses('customer');

		$data = Input::all();
		$validator = Validator::make(
		$data,['name' => 'required|min:5',
			  'email' => 'email|min:5',
			  'mobile' => 'required|min:10|max:10',
			  'otp' => 'required|min:4|max:8'
			 ]
		);

		if($validator->fails()){
	        $status = array('code' => 'error',
                'header' => 'Error',
                'messages' => 'Invalid Request.'
                );
	    	return response()->json($status);

		}
		else
		{
			try{

				$confirmation_code = str_random(30);
				$name = Input::get('name');
				$email = Input::get('email');
				$mobile = Input::get('mobile');
				$type = Input::get('type');
				$otp = Input::get('otp');
				$password = Input::get('password');
				$address = Input::get('address');
				$gender = Input::get('gender');

				$user = Customer::where('mobile','=',$mobile)->first();

				if($user) {
					$status = array('code' => 'error',
		                'header' => 'Error',
		                'messages' => 'User Already Registred.'
	                );
		    	return response()->json($status);
				}

				if($email) {
					$user = Customer::where('email','=',$email)->first();

					if($user) {
						$status = array('code' => 'error',
			                'header' => 'Error',
			                'messages' => 'User Already Registred.'
		                );
			    	return response()->json($status);
					}
				}


				$validate = Verifications::where('entity','=',$mobile)
									->where('code','=',$otp)
									->where('expiry','>',Carbon::now())
									->first();
				// dd($validate);
				if($validate) {

					$user = new Customer();
					$user->name = $name;
					$user->email = $email;
					$user->password = bcrypt($password);
					$user->mobile = $mobile;
					$user->address = $address;
					$user->gender = $gender;
					$user->is_verified = 1;
					// $user->confirmation_code = $confirmation_code;
					$user->save();

					Auth::loginUsingId($user->id);

					// $data = ['name'=>$user-> name,
		   //      			'email'=>$user->email,
			  //  			'confirmation_code'=>$user->confirmation_code
		   //    			];

					// $data['email_to'] = $data['email'];
		   //          $data['email_subject'] = 'Verify your email';
		   //          $data['email_from'] = 'care@glamstudios.in';
		   //          $data['email_from_name'] = 'GlamStudios';
		   //          GeneralHelper::sendEmail('emails.signup_email',$data);

		            $status = array('code' => 'success',
		                'header' => 'Success',
		                'messages' => 'Registation Success'
		                );
					return response()->json($status);


				} else {
					$status = array('code' => 'error',
		                    'header' => 'Error',
		                    'messages' => 'Invalid OTP.'
		                    );
					return response()->json($status);
				}

			 }catch(\Illuminate\Database\QueryException $e)
		        {
		            $status = array('code' => 'error',
		                'header' => 'Error',
		                'messages' => 'Database Error! '
		                );
					return response()->json($status);
		        }

    	}

	}

	public function verify($confirmation_code) {
		if(! $confirmation_code)
	        {
		       throw new InvalidConfirmationCodeException;
		   }

		$user = User::whereConfirmationCode($confirmation_code)->first();

		if (! $user)
	        {
			   throw new InvalidConfirmationCodeException;
		   }
		$user->confirmed = 1;
		$user->save();
		Flash::overlay('Your email is verified. You can login now.', 'Hi ! '.$user->name);
          return Redirect::to('/');
	}


	public function showSignin() {
        return View::make('home.signin', array());
   	 }

	public function doSignin(Request $request){

		Auth::uses('customer');
		$username = $request->username;
		$password = $request->password;
		$type = $request->type;

        if($type == 'password') {
			if(!($username && $password)) {
				 $status = array('code' => 'error',
	                    'header' => 'Error',
	                    'messages' => 'Username and password required to login.'
	                    );
	        	return response()->json($status);
			}

			$userdata = array('email' => $username, 'password' => $password);
			$userdata2 = array('mobile' => $username, 'password' => $password);
			$userdata3 = array('username' => $username, 'password' => $password);
			if(Auth::attempt($userdata) || Auth::attempt($userdata2) || Auth::attempt($userdata3) ) {
				$status = array('code' => 'success',
		                    'header' => 'Success',
		                    'messages' => 'Login Success'
		                    );
				return response()->json($status);
			}else
				{
	     	 	$status = array('code' => 'error',
	                    'header' => 'Error',
	                    'messages' => 'Invalid Username or password.'
	                    );
	        	return response()->json($status);
		    }
		}else if($type == 'reset') {

			$validate = Verifications::where('entity','=',$username)
									->where('code','=',$request->otp)
									->where('expiry','>',Carbon::now())
									->first();
			// dd($validate);
			if($validate) {

				$user = Customer::where('mobile','=',$username)->first();

				if($user && Auth::loginUsingId($user->id)) {

					$user->password = bcrypt($password);
					$user->is_verified = 1;
					$user->save();

					$status = array('code' => 'success',
			                    'header' => 'Success',
			                    'messages' => 'Login Success'
			                    );
					return response()->json($status);
				}else {

				}

			} else {
				$status = array('code' => 'error',
	                    'header' => 'Error',
	                    'messages' => 'Invalid OTP.'
	                    );
				return response()->json($status);
			}


		}
		$status = array('code' => 'error',
	                    'header' => 'Error',
	                    'messages' => 'Invalid Request.'
	                    );
	    return response()->json($status);

  	}

	public function showForget() {
		return View::make('home.forget', array());
	}

	public function doForget()
	{
		$data = Input::all();
		$validator = Validator::make(
		              $data,['email' => 'required|email|min:5',
						 'password' => 'required|min:5|confirmed',
						 'password_confirmation'=> 'required|min:5'
						]
						        );

		if($validator->fails()){
		   return Redirect::to('/forget')->withInput(Input::except('password'))->withErrors($validator);
		                       }

		else {
			 $email = Input::get('email');
			 $password = Input::get('password');

			 $user = User::whereEmail($email)->first();
	            if (! $user)
	            {
				    Flash::overlay('Your email is not registered with us.', 'Alert');
				    return Redirect::to('/forget');
                }
           $user->password = bcrypt($password);
           $user->save();
        }
	}	

}
