<?php namespace App\Http\Controllers\API;

use Validator;
use App\Http\Controllers\GSController;
use Illuminate\Database\Eloquent;
use Illuminate\Support\Facades\DB;
use View;
use App\User;
use App\Promotion;
use App\Reachout;
use Input;
use Illuminate\Http\Request;
use Mail;

class PromotionController extends GSController {

	public function __construct()
	{
		parent::__construct();
	}

    public function showList() {
        $promotions = Promotion::where('active','1')->get();
        return response()->json($promotions);
    }

    public function postPromotionBooking(Request $request) {
        $validator = Validator::make($request->all(), [
            'booking_date' => 'required',
            'timeHrs' => 'required',
            'timeMins' => 'required',
            'user_id' => 'required',
            'promotion_id' => 'required'
        ]);
        
        if($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors()
            ]);
        }

        $ro = new ReachOut();
        $ro -> promotion_id = $request->promotion_id;
        $ro -> date = $request->booking_date;
        $ro -> time = $request->timeHrs.':'.$request->timeMins;
        $ro -> user_id = $request->user_id;
        $ro -> additional_info = $request->additional_info;
        $ro -> save();

        $promotion = Promotion::find($request->promotion_id);
        $user = User::find($request->user_id);

        $data=[
                'promotion_name' => $promotion->name,
                'date' => $request->booking_date,
                'time' => $request->booking_time,
                'name'=>$ro->name,
                'email'=>$ro->email,
                'contact'=>$user->id,
                'additional_info'=>$ro->additional_info
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

        return response()->json($ro);
    }

    private function send_message($sms_username, $sms_passwd, $sms_mask, $mobile, $sms_message) {
        $username = $sms_username;
        $hash = $sms_passwd;
        
        $numbers = array('91'.$mobile);
        $sender = urlencode($sms_mask);
        $message = rawurlencode($sms_message);
        
        $numbers = implode(',', $numbers);
        
        $data = array('username' => $username, 'hash' => $hash, 'numbers' => $numbers, "sender" => $sender, "message" => $message);
        
        $ch = curl_init('http://api.textlocal.in/send/');
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $response = curl_exec($ch);
        curl_close($ch);
        return $response;
    }

}
