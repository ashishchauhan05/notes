@extends('admin.layouts.modal') 

@section('content')
@if (isset($status))
<div class="pad margin no-print">
    <div class="alert alert-{{$status['code']}} alert-dismissible fade in" role="alert">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>
        <h4><i class="icon fa fa-ban"></i> {{ $status['header'] }}</h4>
        <ul>
            @foreach ($status['messages'] as $m)
                <li>{{$m}}</li>
            @endforeach
        </ul>
    </div>
</div>
@endif
<link href="/assets/plugins/select2/select2.css" media="screen" rel="stylesheet" type="text/css">
<link href="/assets/admin/js/plugins/multi-select/css/multi-select.css" media="screen" rel="stylesheet" type="text/css">


<section class="content">
    <div class="row">
        <!-- left column -->
        <div class="col-md-12">
            <!-- general form elements -->
            <div class="box box-primary">
                <div class="box-header">
                    <ul class="nav nav-tabs">
                        <li class="@if ($tab_id == 'tab_create_edit') active @endif"><a href="/admin/users/{{$user->id}}/edit">Edit User</a></li>
                        <li class="@if ($tab_id == 'tab_roles') active @endif"><a href="/admin/users/add_edit_roles/{{$user->id}}">Roles</a></li>
                       
                    </ul>
                    
                    <div class="box-tools">
                        <button class="btn btn-primary btn-sm close_popup">
                        <span class="glyphicon glyphicon-backward"></span> {{{trans('admin/admin.back') }}}
                        </button>
                    </div>
                </div><!-- /.box-header -->
                <!-- form start -->
                <form role="form" method="post" action="/admin/users/add_edit_roles/{{$user->id}}" autocomplete="off" onsubmit="return validate();">
                    <input type="hidden" name="_token" value="{{{ csrf_token() }}}" />
                    <div class="box-body">
                        <div class="form-group">
                            <select multiple="multiple" id="roles" name="roles[]">
                            @foreach($roles as $id => $role)
                                <option value="{!! $role !!}" @if($user->hasRole($role))selected @endif>{!! $role !!} </option>
                            @endforeach
                            </select>
                            <label for="roles"></label>
                        </div>
                       
                    </div><!-- /.box-body -->
                    <div class="box-footer">
                        <button type="reset" class="btn btn-default">
                            <span class="glyphicon glyphicon-remove-circle"></span> {{trans("admin/modal.reset") }}
                        </button>
                        <button type="submit" class="btn btn-primary">
                            <span class="glyphicon glyphicon-ok-circle"></span>
                                {{ trans("admin/modal.edit") }}
                        </button>
                    </div>
                </form>
                <br><br>
            </div><!-- /.box -->
        </div><!--/.col (left) -->
    </div>   <!-- /.row -->
</section>
@stop 


@section('scripts')

<script src="/assets/plugins/select2/select2.js" type="text/javascript"></script>
<script src="/assets/admin/js/plugins/multi-select/js/jquery.multi-select.js" type="text/javascript"></script>

<script>
    $(document).ready(function() {
        $('#roles').multiSelect();
    });

    function validate() {
        flag = true;
        if (! $( "#roles option:selected" ).length) {
            $('#roles').closest('.form-group').addClass('has-error');
            $('label[for="roles"]').text('At least one role is required.');
            flag = false;
        }
        return flag;
    }
</script>
@endsection