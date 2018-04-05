@extends('admin.app')

@section('content')
    <section class="content-header">
        <!--<h1>Users <small>Platform Users</small></h1>-->
        <ol class="breadcrumb">
            <li><a href="/admin"><i class="fa fa-dashboard"></i> Home</a></li>
            <li><a href="/admin/"> View Note </a></li>
        </ol>
        <br>
    </section>
    <section class="content">
        <div class="box box-primary">
            <div class="box-header">
                <h3>Title: {{$note->title}}</h3>
            </div>
            <div class="box-body">
                <div class="row">
                    <div class="col-md-12">
                        <div class="panel panel-default">
                            <div class="panel-body">
                            <b>Created By: </b>{{$note->createdBy->name}}
                            <br/>

                            {{$note->text}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="box box-primary">
            <div class="box-header">
               <h4 class="pull-left">Comments</h4>
               <a href="/admin/note/{{$note->id}}/comment" class="btn btn-primary btn-sm pull-right iframe"><i class="fa fa-plus"></i>Add comment</a>
            </div>
            <div class="box-body">
                <div class="box-comments">
                    @if($note->comments)
                    @foreach($note->comments as $comment)
                       
                        <div class="box-comment">
                            <!-- User image -->
                            <img class="img-circle img-sm" src="/assets/admin/img/user2-160x160.png" alt="User Image">

                            <div class="comment-text">
                                <span class="username">
                                {{$comment->user->name}}
                                    <span class="text-muted pull-right">{{$comment->created_at}}</span>
                                </span><!-- /.username -->
                                {{$comment->comment}}
                            </div>
                            <!-- /.comment-text -->
                        </div>

                    @endforeach
                    @else 
                    <div class="col-md-12">
                        No Comment..
                    </div>
                    @endif
                </div>
            </div>
    </section>
@endsection

@section('scripts')
    @parent
<script type="text/javascript">
    $(".iframe").colorbox({
        iframe: true,
        width: "80%",
        height: "80%",
        onClosed: function () {
            window.location.reload();
        }
    });

</script>
@endsection