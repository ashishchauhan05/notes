<?php namespace App\Http\Controllers;

use Auth;

class AdminController extends Controller {

    /**
     * Initializer.
     *
     * @return \AdminController
     */
    public function __construct()
    {
        Auth::uses('admin');
        //parent::__construct();
        $this->middleware('auth');
        $this->middleware('admin');
    }

}
