<?php namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ContactRequest extends FormRequest {
    /**
    * Get the validation rules that apply to the request.
    *
    * @return array
    */
    public function rules() {
        return [
                'name' => 'required|min:3',
                'email' => 'required|email|unique:users',
                'mobile' => 'required|integer|min:1000000000|max:9999999999',
                'address' => 'required|max:250'
                ];
    }
    
    /**
    * Determine if the user is authorized to make this request.
    *
    * @return bool
    */
    public function authorize(){
        return true;
    }

}
