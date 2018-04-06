<?php namespace App\Http\Controllers;

use Auth;

class HomeController extends Controller {

    /**
     * Initializer.
     *
     * @return \HomeController
     */
    public function __construct()
    {
       
    }

    public function index() {

        return redirect('/admin/');
    }
 
}
