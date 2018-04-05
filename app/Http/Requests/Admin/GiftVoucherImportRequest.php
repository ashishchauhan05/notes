<?php namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class GiftVoucherImportRequest extends FormRequest {

	/**
	 * Get the validation rules that apply to the request.
	 *
	 * @return array
	 */
	public function rules()
	{
		return [
           'import_file' => 'required|mimes:text/csv,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
		];
	}
// application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet
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
