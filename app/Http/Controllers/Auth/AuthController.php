<?php namespace App\Http\Controllers\Auth;

use Auth;
use App\Salon;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Contracts\Auth\Guard;
use Illuminate\Contracts\Auth\Registrar;
use Illuminate\Foundation\Auth\AuthenticatesAndRegistersUsers;

class AuthController extends Controller {

    /*
    |--------------------------------------------------------------------------
    | Registration & Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users, as well as the
    | authentication of existing users. By default, this controller uses
    | a simple trait to add these behaviors. Why don't you explore it?
    |
    */

    use AuthenticatesAndRegistersUsers;

	protected $redirectTo = '/home';

    /**
     * Create a new authentication controller instance.
     *
     * @param  \Illuminate\Contracts\Auth\Guard  $auth
     * @param  \Illuminate\Contracts\Auth\Registrar  $registrar
     * @return void
     */
    public function __construct(Guard $auth, Registrar $registrar)
    {
        Auth::uses('admin');
        $this->auth = $auth;
        $this->registrar = $registrar;

        $this->middleware('guest', ['except' => 'getLogout']);
    }

    protected function authenticated($request, $user) {

        try {
           
            if($user->hasRole(['admin','user']) ) {
            //if($this->auth->user()->admin==1) {
                return redirect()->intended('/admin');
            }
            
            return redirect()->intended('/');
        }
        catch(Exception $e){
            return redirect()->intended('/');
        }
    }
    protected function getCredentials(Request $request){
        return array_add($request->only($this->loginUsername(), 'password'), 'active', 1);
    }
}
