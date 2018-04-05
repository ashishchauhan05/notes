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

class LngController extends GSController {

	public function __construct()
	{
		parent::__construct();
	}

    public function index(Request $request) {
        $lng = GeneralHelper::getTextLanguage($request->txt);
        return response()->json($lng);

    }
}
