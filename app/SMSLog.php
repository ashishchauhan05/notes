<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class SMSLog extends Model {
    protected $table = 'sms_log';

	public function appointment(){
        return $this->belongsTo('App\Appointment');
    }

}
