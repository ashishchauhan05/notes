<?php namespace App\Http\Controllers\Admin;

use App\Http\Controllers\AdminController;
use Auth;
use Datatables;
use App\City;
use DB;
use Input;
use View;
use Session;

class SearchController extends AdminController {

    public static $seo_keynames = array('page_description', 'meta_title', 'meta_description', 'meta_keywords');

    public function __construct(){
        parent::__construct();
        View::share('menu_id','menu_salons');
        View::share('submenu_id','submenu_cities');
    }

    /*
    * Display a listing of the resource.
    *
    * @return Response
    */
    public function index()
    {
        return view('admin.search.index');
    }

    /**
     * Show a list of all the languages posts formatted for Datatables.
     *
     * @return Datatables JSON
     */
    public function data()
    {
        $raw = DB::raw("date_format(issue_category.created_at,'%b %d, %Y %l:%i %p') ");
        $cities = DB::table('city')
                        ->select('city.name', 'city.created_at',  'city.id');

        return Datatables::of($cities)
            ->edit_column('created_at', function($row) {
                    $x = "{$row->created_at}";
                    return date('M d, Y h:i A',strtotime($x));
                        })
            ->add_column('actions', '<a href="{{{ URL::to(\'admin/cities/\' . $id . \'/edit\' ) }}}" class="btn btn-success btn-sm" ><span class="glyphicon glyphicon-pencil"></span>  Edit</a>')
            ->remove_column('id')
            ->make();

    }

}
