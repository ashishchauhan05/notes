<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Notes extends Model {
    protected $table = 'notes';

    public function createdBy(){
        return $this->belongsTo('App\User','created_by');
    }

    public function comments() {
    	return $this->hasMany('App\Comments','note_id');
    }
}
