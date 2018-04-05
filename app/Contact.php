<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Contact extends Model {
    protected $table = 'contact';

    public function groups() {
        return $this->hasMany('App\GroupContacts');
    }
}
