<?php namespace App\Http\Controllers\API;

use App\Http\Controllers\GSController;
use Illuminate\Database\Eloquent;
use Illuminate\Support\Facades\DB;
use View;
use Input;
use Illuminate\Http\Request;
use Session;
use App\User;
use App\Customer;

class UserController extends GSController {

	public function __construct()
	{
		parent::__construct();
	}

    public function showList(Request $request) {
        $users = User::where('salon_id', $request->salon_id)->role($request->type)->get();
        return response()->json($users);
    }

    public function customerDetailsByMobile($mobile) {
        if(!preg_match('/^\d{10}$/',$mobile))
            return Response::json($json);
        $member = Customer::where('mobile', $mobile)->first();
        if ($member) {
            $json = array(
                    'id' => $member->id,
                    'mobile' => $member->mobile,
                    'name' => $member->name,
                    'email' => $member->email,
                    'address' => $member->address,
                    'date_of_birth' => substr($member->date_of_birth,5),
                    'date_of_anniversary' => substr($member->date_of_anniversary,5),
                    );
        } else {
            $json = array(
                        'id' => 0,
                        );
        }
        return Response::json($json);
    }
}
