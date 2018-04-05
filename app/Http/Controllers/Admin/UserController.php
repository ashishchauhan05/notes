<?php namespace App\Http\Controllers\Admin;

use App\Http\Controllers\AdminController;
use App\User;
use Illuminate\Http\Request;
// use App\Role;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use App\Http\Requests\Admin\UserRequest;
use App\Http\Requests\Admin\UserEditRequest;
use App\Http\Requests\Admin\DeleteRequest;
use Datatables;
use View;
use DB;
use Session;

class UserController extends AdminController {
    public function __construct(){
        parent::__construct();
        View::share('menu_id','menu_admin');
        View::share('submenu_id','submenu_users');
    }

    /*
    * Display a listing of the resource.
    *
    * @return Response
    */
    public function getUsers() {
    }

    public function index()
    {
        return view('admin.users.index');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function getCreate() {
        View::share('tab_id','tab_create_edit');
        $status = Session::get('status');
        return View::make('admin.users.create_edit', array('status' => $status));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @return Response
     */
    public function postCreate(UserRequest $request) {
        $status = array();
        try {
            $user = new User ();
            $user -> name = $request->name;
		    $user -> username = $request->username;
            $user -> email = $request->email;
            $user -> mobile = $request->mobile;
            $user -> password = bcrypt($request->password);
            $user -> confirmation_code = str_random(32);
            $user -> active = $request->active;
            $user -> save();
            $status = array('code' => 'success',
                            'header' => 'Success',
                            'messages' => array('New user successfully created')
                            );
        }catch(\Exception $e){
            print_r($e);
            if (strpos($e->getMessage(), 'Duplicate') !== false) {
                $status['code'] = 'danger';
                $status['header'] = 'Alert';
                $status['messages'] = array('Username already exists');
            }
            return redirect('admin/users/create')->with('status', $status);
        }
        return redirect('admin/users/'.$user->id.'/edit')->with('status', $status);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param $user
     * @return Response
     */
    public function getEdit($id) {
        View::share('tab_id','tab_create_edit');
        $status = Session::get('status');
        $user = User::find($id);
        return View::make('admin.users.create_edit', array('user' => $user,  'status'=>$status));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param $user
     * @return Response
     */
    public function postEdit(UserEditRequest $request, $id) {
        $user = User::find($id);
        $user -> name = $request->name;
        $user -> email = $request->email;
        $user -> mobile = $request->mobile;
        $user -> active = $request->active;
        $user -> address = $request->address;
        $password = $request->password;
        $passwordConfirmation = $request->password_confirmation;

        if (!empty($password)) {
            if ($password === $passwordConfirmation) {
                $user -> password = bcrypt($password);
            }
        }
        $user -> save();
        $status = array('code' => 'success',
                        'header' => 'Success',
                        'messages' => array('User successfully updated')
                    );
        return redirect('admin/users/'.$id.'/edit')->with('status', $status);
    }

    public function getRoles($id) {
        View::share('tab_id','tab_roles');
        $status = Session::get('status');
        $user = User::find($id);
        $roles_model = Role::all();
        $roles = array();
        foreach ($roles_model as $key => $value) {
            $roles[$value->id] = $value->name;
        }

        return View::make('admin.users.create_edit_roles', array('user' => $user,  'status'=>$status, 'roles' => $roles));
    }

    public function postRoles(Request $request, $id) {
        View::share('tab_id','tab_roles');
        $user = User::find($id);

		$user->roles()->detach();
		foreach ($request->roles as $role) {
			$user->assignRole($role);
		}
        $user = $user->fresh();
        if ($user->hasRole('admin')) {
            $user->admin = 1;
            $user->role = 'admin';
        }
        else $user->role = 'user';
        
        $user->save();
        $status = array('code' => 'success',
                        'header' => 'Success',
                        'messages' => array('Roles successfully updated'));
        return redirect('/admin/users/add_edit_roles/'.$id)->with('status', $status);
    }

    public function getPermissions($id) {
        View::share('tab_id','tab_permissions');
        $status = Session::get('status');
        $user = User::find($id);
        $permissions_model = Permission::all();
        $permissions = array();
        foreach ($permissions_model as $key => $value) {
            $permissions[$value->id] = $value->name;
        }
        return View::make('admin.users.create_edit_permissions', array('user' => $user,  'status'=>$status, 'permissions' => $permissions));
    }

    public function postPermissions(Request $request, $id) {
        View::share('tab_id','tab_permissions');
        $user = User::find($id);
        $user->permissions()->detach();
        if(!is_null($request->permissions))$user->givePermissionTo($request->permissions);
        $status = array('code' => 'success',
                        'header' => 'Success',
                        'messages' => array('Permissions successfully updated'));
        return redirect('/admin/users/add_edit_permissions/'.$id)->with('status', $status);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param $user
     * @return Response
     */

    public function getDelete($id)
    {
        $user = User::find($id);
        // Show the page
        return view('admin.users.delete', compact('user'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param $user
     * @return Response
     */
    public function postDelete(DeleteRequest $request,$id)
    {
        $user= User::find($id);
        $user->delete();
    }

    /**
     * Show a list of all the languages posts formatted for Datatables.
     *
     * @return Datatables JSON
     */
    public function data()
    {
        $users = User::select(array('users.name', 'users.username', 'users.mobile', 'users.email', 'users.active', 'users.id', 'users.role'));

        return Datatables::of($users)
            ->edit_column('active', '@if ($active=="1") <span class="glyphicon glyphicon-ok"></span> @else <span class=\'glyphicon glyphicon-remove\'></span> @endif')
            ->add_column('actions', '@if ($id!="1")<a href="{{{ URL::to(\'admin/users/\' . $id . \'/edit\' ) }}}" class="btn btn-success btn-sm iframe" ><span class="glyphicon glyphicon-pencil"></span>  {{ trans("admin/modal.edit") }}</a>
                    <!--<a href="{{{ URL::to(\'admin/users/\' . $id . \'/delete\' ) }}}" class="btn btn-sm btn-danger iframe"><span class="glyphicon glyphicon-trash"></span> {{ trans("admin/modal.delete") }}</a>-->
                @endif')
            ->remove_column('id')

            ->make();
    }

}
