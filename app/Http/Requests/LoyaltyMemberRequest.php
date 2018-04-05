<?php namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class LoyaltyMemberRequest extends FormRequest {

	/**
	 * Get the validation rules that apply to the request.
	 *
	 * @return array
	 */
	public function rules()
	{
		return [
            'activation_date' => 'required',
            'mobile' => 'required|numeric|min:10',
            'name' => 'required|min:4',
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
