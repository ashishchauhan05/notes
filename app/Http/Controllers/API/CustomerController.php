<?php namespace App\Http\Controllers\API;

use App\Http\Controllers\GSController;
use Illuminate\Database\Eloquent;
use Illuminate\Support\Facades\DB;
use View;
use Input;
use Illuminate\Http\Request;
use Session;
use App\User;
use App\Customer;
use App\Verifications;
use Carbon\Carbon;

class CustomerController extends GSController {

	public function __construct()
	{
		parent::__construct();
	}

    public function verifyCustomer(Request $request) {
        $email = $request->email;
        $mobile = $request->mobile;

        $checkMobile = Customer::where('mobile','=',$mobile)->first();

        if($checkMobile) {
            $status = array('code' => 'error',
                'header' => 'Error',
                'field' => 'mobile',
                'messages' => 'Mobile no is already registred! '
                );
            return response()->json($status);
        }
        if($email) {
            $checkEmail = Customer::where('email','=',$email)->first();
            if($checkEmail) {
                $status = array('code' => 'error',
                    'header' => 'Error',
                    'field' => 'email',
                    'messages' => 'Email ID is already registred! '
                    );
                return response()->json($status);
            }
        }

        $verification = new Verifications();
        $verification->entity = $mobile;
        $verification->code = 1234;
        $verification->expiry = Carbon::now()->addMinutes(15);
        $verification->save();

        $status = array('code' => 'success',
            'header' => 'Success',
            'messages' => 'OTP sent to mobile no! '
        );

        return response()->json($status);

    }

    public function reset(Request $request) {
        $username = $request->mobile;
        $customer = Customer::where(function($q) use ($username) {
                            $q->where('username','=',$username)
                              ->orWhere('mobile','=',$username);
                            })->first();


        if($customer) {
            $verification = new Verifications();
            $verification->entity = $username;
            $verification->code = 1234;
            $verification->expiry = Carbon::now()->addMinutes(15);
            $verification->save();

            $status['code'] = 'success';
            $status['header'] = 'Success';
            $status['message'] = 'OTP sent to mobile no';

        }else {
            $status['code'] = 'error';
            $status['header'] = 'Error';
            $status['message'] = 'No Record found!';
            
        }
        return response()->json($status);
    }
    public function showList(Request $request) {
        $users = User::where('salon_id', $request->salon_id)->role($request->type)->get();
        return response()->json($users);
    }

    public function customerDetailsByMobile($mobile) {
        if(!preg_match('/^\d{10}$/',$mobile))
            return Response::json($json);
        $member = Customer::where('mobile', $mobile)->first();
        if ($member) {
            $json = array(
                    'id' => $member->id,
                    'mobile' => $member->mobile,
                    'name' => $member->name,
                    'email' => $member->email,
                    'address' => $member->address,
                    'date_of_birth' => substr($member->date_of_birth,5),
                    'date_of_anniversary' => substr($member->date_of_anniversary,5),
                    );
        } else {
            $json = array(
                        'id' => 0,
                        );
        }
        return Response::json($json);
    }
}
