<?php

namespace App\Helpers;

use Mail;
use Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Razorpay\Api\Api;
use App\SMSLog;
use App\Salon;
use App\CouponTemplate;
use App\Coupon;
use App\CouponDiscount;
use App\Service;
use App\PaymentLink;
use App\Payment;
use App\NotificationLog;
use App\VoucherTemplate;
use App\GiftVoucher;
use App\VoucherAppointments;

class GeneralHelper {
    public static function search_object($obj, $field, $value){
        foreach($obj as $o) {
            if($o->$field==$value)
                return $o;
        }
        return false;
    }

    public static function shortUrl($length = 6)
    {
        $pool = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

        return substr(str_shuffle(str_repeat($pool, $length)), 0, $length);
    }

    static function sendEmail($template,$data) {

        if(\Config::get('app.app_env') != 'production') {

             return json_encode(array('status' => 'skipped'));
        }
        try{
            
        } catch(\Exception $e){
        }
    }
}
