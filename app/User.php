<?php namespace App;

use Illuminate\Auth\Authenticatable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Auth\Passwords\CanResetPassword;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Contracts\Auth\CanResetPassword as CanResetPasswordContract;

use Spatie\Permission\Traits\HasRoles;

class User extends Model implements AuthenticatableContract, CanResetPasswordContract {

	use Authenticatable, CanResetPassword, HasRoles;

	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array
	 */
	protected $fillable = [ 'name', 'username', 'email', 'password', 'confirmed' ,'confirmation_code' ];

	/**
	 * The attributes excluded from the model's JSON form.
	 *
	 * @var array
	 */
	protected $hidden = [ 'password', 'remember_token' ,'confirmation_code'  ];

	public function salon()
	{
		return $this->belongsTo('App\Salon');
	}

	public function device()
	{
		return $this->hasMany('App\AppDeviceInformation');
	}

	public function ownerApp()
	{
		return $this->device->where('type','OWNER')->where('active',1)->first();
	}

	public function managerApp()
	{
		return $this->device->where('type','MANAGER')->where('active',1)->first();
	}
}
