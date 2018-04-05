<?php namespace App\Http\Controllers\Admin;

use Auth;
use App\Helpers\GeneralHelper;
use Illuminate\Http\Request;
use App\Http\Controllers\AdminController;
use DB;
use Carbon\Carbon;
use Input;
use View;
use Session;
use Datatables;
use App\User;
use App\Notes;
use App\Comments;

class NotesController extends AdminController {
    public function __construct(){
        parent::__construct();
        View::share('menu_id','menu_contacts');
        View::share('submenu_id','');
    }

    public function index()
    {
        return view('admin.notes.index');
    }

    public function getCreate()
    {
        return view('admin.notes.create_edit');
    }

    public function postCreate(Request $request) {

        $note = new Notes();
        $note->title = $request->title;
        $note->text = $request->text;
        $note->public = $request->public;
        $note->active = $request->active;
        $note->created_by = Auth::user()->id;
        $note->url = GeneralHelper::shortUrl();
        $note->save();

        $status = array('code' => 'success',
                'header' => 'Success',
                'messages' => array('New note successfully created')
                );
        
        return redirect('admin/note/'.$note->id.'/edit')->with('status', $status);
    }

    public function getEdit($id)
    {
        $note = Notes::find($id);

        return view('admin.notes.create_edit',array('note' => $note));
    }


    public function view($url) {

        $note = Notes::where('url',$url)->first();
        return view('admin.notes.view',array('note' => $note));
    } 

    public function postEdit(Request $request, $id) {

        $note = Notes::find($id);
        $note->name = $request->name;
        $note->active = $request->active;
        $note->save();

        $status = array('code' => 'success',
                'header' => 'Success',
                'messages' => array('New note successfully edited')
                );
        
        return redirect('admin/note/'.$note->id.'/edit')->with('status', $status);
    }

    public function createComment($id) {

        $status = Session::get('status');
        return view('admin.notes.create_comment',array('status' => $status));
    }

    public function postComment(Request $request, $id) {


        $comment = new Comments();

        $comment->note_id = $id;
        $comment->comment = $request->comment;
        $comment->created_by = Auth::user()->id;

        $comment->save();
        
        $status = array('code' => 'success',
                'header' => 'Success',
                'messages' => array('Comment Added')
                );
        
        return redirect('admin/note/'.$id.'/comment')->with('status', $status);
    } 

    public function data()
    {

        $notes = Notes::select('url','title','created_by','public','active', 'created_at', 'id')
            ->where(function($query){
                    $query->where('public', 1)
                          ->orWhere('created_by', Auth::user()->id);
                });

        return Datatables::of($notes)
            ->edit_column('created_by', function($row) {
                    return $row->createdBy->name;
                })
            ->edit_column('created_at', function($row) {
                    $x = "{$row->created_at}";
                    return date('M d, Y h:i A',strtotime($x));
                })

            ->edit_column('public', '@if ($public==1) <span class="glyphicon glyphicon-ok"></span> @else <span class=\'glyphicon glyphicon-remove\'></span> @endif')

            ->edit_column('active', '@if ($active==1) <span class="glyphicon glyphicon-ok"></span> @else <span class=\'glyphicon glyphicon-remove\'></span> @endif')

            ->add_column('actions', function($row) {

                $str = '';

                if($row->created_by == Auth::user()->id) {
                    $str .= '<a href="/admin/note/' .$row->id . '/edit" class="btn btn-success btn-sm pull-right iframe" ><span class="glyphicon glyphicon-pencil"></span>  Edit</a>';
                }
                $str .=  '<a href="/admin/note/view/' .$row->url.'" class="btn btn-warning btn-sm pull-right" ><span class="glyphicon glyphicon-send"></span> View</a>';

                return $str;
            })
            ->remove_column('id')
            ->make();

    }
   
}
        
