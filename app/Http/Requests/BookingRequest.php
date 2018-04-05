<?php namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class BookingRequest extends FormRequest {

    public function rules() {
        return [
            'booking_date' => 'required',
            'services' => 'required',
            'name' => 'required',
            'mobile' => 'required|integer|between:1000000000,9999999999'
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
