<?php namespace App\Http\Controllers\Admin;

use App\Http\Controllers\AdminController;
use Auth;
use Datatables;
use Illuminate\Http\Request;
use App\Helpers\GeneralHelper;
use DB;
use Input;
use View;
use Session;

class ContactsController extends AdminController {
    public function __construct(){
        parent::__construct();
        View::share('menu_id','menu_contacts');
        View::share('submenu_id','');
    }

    public function index() {
        return view('admin.contacts.index');
    }

}
