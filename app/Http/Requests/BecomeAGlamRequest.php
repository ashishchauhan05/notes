<?php namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class BecomeAGlamRequest extends FormRequest {

    public function rules() {
        return [
            'name' => 'required',
            'city' => 'required',
            'area' => 'required',
            'phone' => 'required|integer|between:1000000000,9999999999'
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