<?php namespace App\Http\Controllers\API;

use App\Http\Controllers\GSController;
use Illuminate\Database\Eloquent;
use Illuminate\Support\Facades\DB;
use View;
use Validator;
use App\Salon;
use App\Service;
use App\User;
use App\SelectedServices;
use App\CityService;
use App\SMSLog;
use App\Booking;
use App\Coupon;
use App\CouponDiscount;
use Input;
use Illuminate\Http\Request;
use Mail;
use App\Helpers\GeneralHelper;

class BookingController extends GSController {

	public function __construct()
	{
		parent::__construct();
	}

	public function get(Request $request, $id){
		$booking = DB::table('appointments')
				->join('salons','appointments.salon_id','=','salons.id')
				->where('appointments.id','=',$id)
				->select('appointments.*','salons.name as salon_name')
				->first();
		return response()->json($booking);
		// return response()->json(Booking::where("id",$id)->first());
	}

    public function doBooking(Request $request) {
        $booking_date = $request->booking_date;
        $salon_id = $request->salon_id;
        $time = $request->timeHrs.':'.$request->timeMins;
        $user_id = $request->user_id;
        $services = json_decode($request->services);
        $more_info = $request->more_info;
        $total_cost = $request->total_cost;
        $coupon_code = $request->coupon_code;

        $service_category = array('0'=>'Basic', '1'=> 'Standard', '2'=>'Premium', '4'=>'Ultra Premium');
        $servicesSelected = '<ul>';
        foreach (Service::whereIn('id', $services)->get() as $s) {
            $servicesSelected .= '<li>'.$s->subcategory->name."[".$service_category[$s->service_type].']</li>';
        }
        $servicesSelected .= '</ul>';

        $user = User::find($user_id);

        $salon = DB::table('salons')
                    ->leftjoin('city', 'city.id', '=', 'salons.city_id')
                    ->leftjoin('location', 'location.id', '=', 'salons.location_id')
                    ->where('salons.id', $salon_id)
                    ->select('salons.*', 'city.name as city', 'location.name as location')
                    ->first();
        // $sms_mask = 'GOGLAM';
        // $sms_username = 'feeroz@glamstudios.in';
        // $sms_passwd = '38fd4256beb489a84e4857e573bf0a5d3ea9ce7f';
        $sms_message = $user->name.', Your appointment with Glam Studio, '.$salon->address.' is scheduled for '.$booking_date.' '.$time.'. Call 8010-000-444 for any assistance.';
        //$sms_response = $this->send_message($sms_username, $sms_passwd, $sms_mask, $user->mobile, $sms_message);
        // $sms_response = GeneralHelper::sendSMS($user->mobile, $sms_message, array('sms_type' => 'booking_confirmed_customer'));


        $booking = new Booking();
        $booking -> user_id = $user_id;
        $booking -> salon_id = $salon_id;
        $booking -> date = $booking_date;
        $booking -> time = $time;
        $booking -> name = $user->name;
        $booking -> email = $user->email;
        $booking -> mobile = $user->mobile;
        $booking -> services = $servicesSelected;
        $booking -> more_info = $more_info;
        $booking -> total_cost = $total_cost;
        $booking -> coupon_code = $coupon_code;
        $booking->save();
        $sms_response = GeneralHelper::sendSMS($user->mobile, $sms_message, array('sms_type' => 'booking_confirmed_customer', 'appointment_id' => $booking->id));

        foreach ($services as $s) {
            $new_service = new SelectedServices();
            $new_service->appointment_id = $booking->id;
            $new_service->service_id = $s;
            $new_service->save();
        }

        /*$sms_log = new SMSLog();
        $sms_log -> salon_id = $salon_id;
        $sms_log -> mobile = $user->mobile;
        $sms_log -> text = $sms_message;
        $sms_log -> response = $sms_response;
        $sms_log -> created_by = 1;
        $sms_log ->save();*/

        $data = [
                    'salon_name' => $salon-> name,
                    'address' => $salon->address,
                    'location' => $salon->location,
                    'date' => $booking_date,
                    'time' => $time,
                    'servicesSelected' => $servicesSelected,
                    'total_cost' => $total_cost,
                    'name' => $user->name,
                    'email' => $user->email,
                    'mobile' => $user->mobile,
                    'more_info' => $more_info,
                    'coupon_code' => $coupon_code
                ];
        /*try {
            Mail::send('emails.booking', ['data' => $data], function ($message) use ($data) {
                $message->subject('Wow! Your Glam appointment is waiting for you');
                $message->from('bookings@glamstudios.in', 'GlamStudio Booking');
                $message->to($data['email']);
                $message->replyTo('bookings@glamstudios.in');
                $message->returnPath('sn@glamstudios.in');
            });
        } catch(\Exception $e){
        }
        Mail::send('emails.care',['data'=> $data], function ($care_message) use ($data) {
            $care_message->subject('GlamStudio Appointment');
            $care_message->from('booking@glamstudios.in','GlamStudio Booking');
            $care_message->to('bookings@glamstudios.in');
            $care_message->replyTo('bookings@glamstudios.in');
            $care_message->returnPath('sn@glamstudios.in');
        });*/
        return response()->json($booking);
    }

    public function applyCoupon(Request $request) {
        $salon_id = $request->salon_id;
        $city_id = $request->city_id;
        $ss = json_decode($request->services);
        $coupon_code = $request->coupon_code;

        $sstring = '';
        foreach($ss as $s) {
            $sstring .= "'".$s."',";
        }
        $sstring = substr($sstring,0,-1);

        $code_details = Coupon::where('code',$coupon_code)->first();
        $result["error"] = "Coupon Code Invalid or Expired";
        if (!$code_details)
            return response()->json($result);
        $booking_date = $request->booking_date;
        if ($booking_date > $code_details->expiry_date) {
            return response()->json($result);
        }

        $discounts = CouponDiscount::where('coupon_id',$code_details->id)->get();
        $discount_array = array();
        foreach($discounts as $d) {
            if ($d->type=='service_category') {
                if ($d->item_id==0)
                    $services = Service::all();
                else
                    $services = Service::where('category_id',$d->item_id)->get();

                foreach ($services as $s) {
                    $discount_array[$s->id]['id'] = $s->id;
                    $discount_array[$s->id]['name'] = $s->name;
                    $discount_array[$s->id]['discount'] = $d->discount;
                }
            }
            if ($d->type=='service_subcategory') {
                $services = Service::where('subcategory_id',$d->item_id)->get();
                foreach ($services as $s) {
                    $discount_array[$s->id]['id'] = $s->id;
                    $discount_array[$s->id]['name'] = $s->name;
                    $discount_array[$s->id]['discount'] = $d->discount;
                }
            }
            if ($d->type=='service') {
                $s = Service::find($d->item_id);
                $discount_array[$s->id]['id'] = $s->id;
                $discount_array[$s->id]['name'] = $s->name;
                $discount_array[$s->id]['discount'] = $d->discount;
            }
        }


        $total_cost = 0;
        $selected_services = DB::select("SELECT s.id, s.subcategory_id, s.category_id, s.service_type, s.name, sr.rates
                                        FROM `services` s left join service_rates sr on service_id = s.id and sr.city_id = '".$city_id."' where s.id not in (select service_id from salon_services where salon_id='".$salon_id."') and s.id in (".$sstring.")");
        foreach ($selected_services as $ss) {
            foreach($discount_array as $d) {
                if($d["id"]==$ss->id){
                    $total_cost += $ss->rates - $ss->rates*$d["discount"]/100;
                }
            }
        }

        $arr["total_cost"] = $total_cost;
        $arr["coupon_code"] = $code_details->code;
        $arr["description"] = $code_details->description;
        return response()->json($arr);
    }

    public function listBookings($user_id) {
        $bookings = Booking::where('user_id', $user_id)->orderBy('date','desc')->orderBy('time', 'desc')->get();

        $i=0;
        foreach ($bookings as $b) {
            $services = SelectedServices::where('appointment_id',$b->id)->where('selected','y')->select('service_id', 'cost')->get();
            $bookings[$i]->services = $services;
            $i++;
        }
        return response()->json($bookings);
    }

    public function showBooking($id) {
        $booking = Booking::find($id);
        $services = SelectedServices::where('appointment_id',$booking->id)->where('selected','y')->select('service_id', 'cost')->get();
        $booking->services = $services;

        return response()->json($booking);
    }

    public function editBooking(Request $request) {
         $validator = Validator::make($request->all(), [
                            'booking_id' => 'required',
                            'booking_date' => 'required',
                            'timeHrs' => 'required',
                            'timeMins' => 'required',
                            'services' => 'required',
                        ]);
         if($validator->fails()) {
             return response()->json([
                'errors' => $validator->errors()
             ]);
        }

        $booking_id = $request->booking_id;
        $booking = Booking::find($booking_id);

        $salon_id = $booking->salon_id;
        $booking_date = $request->booking_date;
        $time = $request->timeHrs.':'.$request->timeMins;
        $user_id = $request->user_id;
        $services = json_decode($request->services);
        $more_info = $request->more_info;
        $total_cost = $request->total_cost;
        $coupon_code = $request->coupon_code;
        $service_category = array('0'=>'Basic', '1'=> 'Standard', '2'=>'Premium', '4'=>'Ultra Premium');
        $servicesSelected = '<ul>';
        foreach (Service::whereIn('id', $services)->get() as $s) {
            $servicesSelected .= '<li>'.$s->subcategory->name."[".$service_category[$s->service_type].']</li>';
        }
        $servicesSelected .= '</ul>';

        $user = User::find($user_id);
        $salon = DB::table('salons')
                    ->leftjoin('city', 'city.id', '=', 'salons.city_id')
                    ->leftjoin('location', 'location.id', '=', 'salons.location_id')
                    ->where('salons.id', $salon_id)
                    ->select('salons.*', 'city.name as city', 'location.name as location')
                    ->first();
        $sms_mask = 'GOGLAM';
        $sms_username = 'feeroz@glamstudios.in';
        $sms_passwd = '38fd4256beb489a84e4857e573bf0a5d3ea9ce7f';
        $sms_message = $user->name.', Your appointment with Glam Studio, '.$salon->address.' is scheduled for '.$booking_date.' '.$time.'. Call 8010-000-444 for any assistance.';
        //$sms_response = $this->send_message($sms_username, $sms_passwd, $sms_mask, $user->mobile, $sms_message);

        $booking -> date = $booking_date;
        $booking -> time = $time;
        $booking -> services = $servicesSelected;
        $booking -> more_info = $more_info;
        $booking -> total_cost = $total_cost;
        $booking -> coupon_code = $coupon_code;
        $booking->save();
        $sms_response = GeneralHelper::sendSMS($user->mobile, $sms_message, array('sms_type' => 'booking_rescheduled_customer', 'appointment_id' => $booking->id));

        $ss = SelectedServices::where('appointment_id', $booking->id)->get();
        foreach ($ss as $s) {
            $s->selected = 'n';
            $s->save();
        }
        foreach ($services as $s) {
            $existing_services = SelectedServices::where('appointment_id', $booking->id)->where('service_id', $s)->first();
            $service_rate = DB::select("select * from `service_rates` where `service_id` = '$s' and `city_id` = (select city_id from salons where id='$salon_id')");
            $cost = $service_rate[0]->rates;

            if($existing_services) {
                $existing_services->selected = 'y';
                $existing_services->cost = $cost;
                $existing_services->save();
            } else {
                $new_service = new SelectedServices();
                $new_service->appointment_id = $booking->id;
                $new_service->service_id = $s;
                $new_service->cost = $cost;
                $new_service->save();
            }
        }

        return response()->json($booking);
    }

    // private function send_message($sms_username, $sms_passwd, $sms_mask, $mobile, $sms_message) {
    //     $username = $sms_username;
    //     $hash = $sms_passwd;

    //     $numbers = array('91'.$mobile);
    //     $sender = urlencode($sms_mask);
    //     $message = rawurlencode($sms_message);

    //     $numbers = implode(',', $numbers);

    //     $data = array('username' => $username, 'hash' => $hash, 'numbers' => $numbers, "sender" => $sender, "message" => $message);

    //     $ch = curl_init('http://api.textlocal.in/send/');
    //     curl_setopt($ch, CURLOPT_POST, true);
    //     curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
    //     curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    //     $response = curl_exec($ch);
    //     curl_close($ch);
    //     return $response;
    // }

}
