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

    public static function get_data($url) {
        $ch = curl_init();
        $timeout = 5;
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, $timeout);
        $data = curl_exec($ch);
        curl_close($ch);
        return $data;
    }

    static function sendEmail($template,$data) {

        if(\Config::get('app.app_env') != 'production') {

             return json_encode(array('status' => 'skipped'));
        }
        try{
            
        } catch(\Exception $e){
        }
    }

    public static function getTextLanguage($text, $default = 'unknown') {
          $supported_languages = array(
              'english',
              'german',
          );

      // German word list
      // from http://wortschatz.uni-leipzig.de/Papers/top100de.txt
      $wordList['german'] = array ('der', 'die', 'und', 'in', 'den', 'von', 
          'zu', 'das', 'mit', 'sich', 'des', 'auf', 'für', 'ist', 'im', 
          'dem', 'nicht', 'ein', 'Die', 'eine');

      // English word list
      // from http://en.wikipedia.org/wiki/Most_common_words_in_English
      $wordList['english'] = array('the','be','to','of','and','in','that','have','I','it','for','not','on','with','he','as','you','do','at','this','but','his','by','from','they','we','say','her','she','or','an','will','my','one','all','would','there','their','what','so','up','out','if','about','who','get','which','go','me','when','make','can','like','time','no','just','him','know','take','people','into','year','your','good','some','could','them','see','other','than','then','now','look','only','come','its','over','think','also','back','after','use','two','how','our','work','first','well','way','even','new','want','because','any','these','give','day','most','us');

      $text = preg_replace("/[^A-Za-z]/", ' ', $text);
      $txtArray = explode(' ', $text);

      // count the occurrences of the most frequent words
      foreach ($supported_languages as $language) {
        $counter[$language]=0;
      }

      foreach ($txtArray as $key => $word) {
        foreach ($supported_languages as $language) {
          if(in_array($word, $wordList[$language]))
          $counter[$language] ++;
        }
      }

      // get max counter value
      $max = max($counter);


      $maxs = array_keys($counter, $max);



      if (count($maxs) == 1) {
        $winner = $maxs[0];
        $second = 0;

        foreach ($supported_languages as $language) {
          if ($language <> $winner) {
            if ($counter[$language]>$second) {
              $second = $counter[$language];
            }
          }
        }
        if (($second / $max) < 0.1) {
          return $winner;
        } 
      }
      return $default;
    }
}
