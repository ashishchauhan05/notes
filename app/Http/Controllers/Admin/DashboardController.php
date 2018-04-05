<?php namespace App\Http\Controllers\Admin;

use App\Http\Controllers\AdminController;
use Auth;
use Datatables;
use Illuminate\Http\Request;
use App\Helpers\GeneralHelper;
use DB;
use Input;
use View;
use Mail;
use Session;
use App\City;
use App\User;
use Carbon\Carbon;

class DashboardController extends AdminController {

    public function __construct()
    {
        parent::__construct();
        View::share('menu_id','menu_dashboard');
        View::share('submenu_id','NA');
    }

	public function index()
	{
        return redirect('admin/notes');
        // return view('admin.dashboard.index');
	}

    public function unauthorized() {
        return view('admin.dashboard.unauthorized',array('current_page' => ''));
    }
}