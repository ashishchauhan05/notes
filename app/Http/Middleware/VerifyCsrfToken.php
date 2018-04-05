<?php namespace App\Http\Middleware;

use Closure;
use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as BaseVerifier;

class VerifyCsrfToken extends BaseVerifier {

    protected $except = [
        //
            'api/v1/auth/signup',
            'api/v1/auth/login',
            'api/v1/booking/complete',
            'api/v1/booking/edit',
            'api/v1/booking/applyCoupon',
            'api/v1/promotion/book',
            'webhook/payment',
            ];

	/**
	 * Handle an incoming request.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @param  \Closure  $next
	 * @return mixed
	 */
	public function handle($request, Closure $next)
	{
		return parent::handle($request, $next);
	}


}
