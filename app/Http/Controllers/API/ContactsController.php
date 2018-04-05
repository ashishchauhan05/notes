<?php namespace App\Http\Controllers\API;

use App\Http\Controllers\GSController;
use Illuminate\Database\Eloquent;
use Illuminate\Support\Facades\DB;
use View;
use Input;
use Illuminate\Http\Request;
use Session;
use Carbon\Carbon;
use App\Helpers\GeneralHelper;
use App\Contact;
use App\Http\Requests\ContactRequest;

class ContactsController extends GSController {

	public function __construct()
	{
		parent::__construct();
	}

    public function postCreate(ContactRequest $request) {       
    	$contact = new Contact();
    	$contact->name = $request->name;
    	$contact->email = $request->email;
    	$contact->mobile = $request->mobile;
    	$contact->address = $request->address;
    	$contact->save();
    	
    	return response()->json('success');

    }
}
