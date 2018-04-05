<?php namespace App\Http\Controllers\Admin;

use App\Http\Controllers\AdminController;
use Auth;
use Datatables;
use DB;
use Input;
use View;
use Session;

class ScrapeController extends AdminController {

    
    public function __construct(){
        parent::__construct();
        View::share('menu_id','menu_scrape');
        View::share('submenu_id','');
    }

    /*
    * Display a listing of the resource.
    *
    * @return Response
    */
    public function index()
    {
        return view('admin.scrape.index');
    }

}
