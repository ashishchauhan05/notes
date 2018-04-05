<?php namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class CouponRequest extends FormRequest {

    public function rules() {
        return [
            'coupon_code' => 'required',
            'min_amount' => 'integer',
            'max_discount' => 'integer',
            // 'disount' => 'required',
            'expiry_date' => 'required',
            ];
    }

	/**
	 * Determine if the user is authorized to make this request.
	 *
	 * @return bool
	 */
	public function authorize()
	{
		return true;
    }	

}
