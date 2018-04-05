<?php namespace App\Http\Controllers\Admin;

use App\Http\Controllers\AdminController;
use Auth;
use Datatables;
use App\MessageTemplate;
use App\Salon;
use App\BusinessDaily;
use Illuminate\Http\Request;
use App\Helpers\GeneralHelper;
use DB;
use Input;
use View;
use Session;

class MessageController extends AdminController {
    public function __construct(){
        parent::__construct();
    }

    public function sendSMS(Request $request, $message_id) {
        $template = MessageTemplate::find($message_id);

        switch ($message_id) {
            case 1:
                $salon_id = $request->salon_id;
                $salon_details = Salon::find($salon_id);
                $owner_phone = $salon_details->owner_phone1;
                $date = $request->date;
                $salon_business = BusinessDaily::where('date',$date)
                                                ->where('salon_id', $salon_id)
                                                ->first();
                $response = array();
                $message = $template->text;
                $message = str_replace('{{date}}',date('d M, Y', strtotime($request->date)), $message);
                $message = str_replace('{{RecordedBusiness}}',$salon_business->business, $message);

                $sms_response = GeneralHelper::sendSMS($owner_phone, $message, array('sms_type' => 'business_owner'));
                //$sms_response = '{"balance":4041,"batch_id":248796785,"cost":1,"num_messages":1,"message":{"num_parts":1,"sender":"GOGLAM","content":"Dear partner, your total business for 01 Jul, 2016 is recorded as Rs. 930. Call 8010440444 for any discrepancy. Best Regards: Team Glam Studios"},"receipt_url":"","custom":"","messages":[{"id":"134302133","recipient":919611014400}],"status":"success"}';
                $json_response = json_decode($sms_response);
                if ($json_response->status=='success') {
                    $salon_business->sms_sent='y';
                    $salon_business->save();
                }
                return $json_response->status;
                break;
        }
    }

}
