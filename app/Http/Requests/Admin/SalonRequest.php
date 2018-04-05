<?php namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class SalonRequest extends FormRequest {

	/**
	 * Get the validation rules that apply to the request.
	 *
	 * @return array
	 */
	public function rules()
	{
		return [
            'city_id' => 'required',
            'location_id' => 'required',
            'address' => 'max:87',
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
