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

<section class="content">
    <div class="row">
        <!-- left column -->
        <div class="col-md-12">
            <!-- general form elements -->
            <div class="box box-primary">
                <div class="box-header">
                    <ul class="nav nav-tabs">
                        <li class="@if ($tab_id == 'tab_create_edit') active @endif"><a href=@if(isset($user))"/admin/users/{{ $user->id }}/edit" @else "/admin/coupons/create" @endif>Edit User</a></li>
                        @if (isset($user))
                            <li class="@if ($tab_id == 'tab_roles') active @endif"><a href="/admin/users/add_edit_roles/{{$user->id}}">Roles</a></li>
                           
                        @endif
                    </ul>
                    
                    <div class="box-tools">
                        <button class="btn btn-primary btn-sm close_popup">
                        <span class="glyphicon glyphicon-backward"></span> {{{trans('admin/admin.back') }}}
                        </button>
                    </div>
                </div><!-- /.box-header -->
                <!-- form start -->
                <form role="form" method="post" action="@if (isset($user)){{ URL::to('admin/users/' . $user->id . '/edit') }}@endif" autocomplete="off">
                    <input type="hidden" name="_token" value="{{{ csrf_token() }}}" />
                    <div class="box-body">
                        <div class="form-group {{{ $errors->has('name') ? 'has-error' : '' }}}">
                            <label for="name">{{ trans('admin/users.name') }}</label>
                            <input type="text" class="form-control" tabindex="1" placeholder="{{ trans('admin/users.name') }}" name="name" id="name" value="{{{ Input::old('name', isset($user) ? $user->name : null) }}}">
                            {!! $errors->first('name', '<label class="control-label" for="name">:message</label>')!!}
                        </div>
                        @if(!isset($user))
                            <div class="form-group {{{ $errors->has('username') ? 'has-error' : '' }}}">
                                <label for="username">{{trans('admin/users.username') }}</label>
                                <input class="form-control" type="username" tabindex="2" placeholder="{{ trans('admin/users.username') }}" name="username" id="username" value="{{{ Input::old('username', isset($user) ? $user->username : null) }}}">
                                {!! $errors->first('username', '<label class="control-label" for="username">:message</label>')!!}
                            </div>
                        @endif
                        <div class="form-group {{{ $errors->has('email') ? 'has-error' : '' }}}">
                            <label for="email">{{trans('admin/users.email')}}</label>
                            <input class="form-control" type="email" tabindex="3" placeholder="{{ trans('admin/users.email') }}" name="email" id="email" value="{{{ Input::old('email', isset($user) ? $user->email : null) }}}">
                            {!! $errors->first('email', '<label class="control-label"  for="email">:message</label>')!!}
                        </div>
                        <div class="form-group {{{ $errors->has('mobile') ? 'has-error' : '' }}}">
                            <label for="mobile">Mobile</label>
                            <input class="form-control" type="text" tabindex="3" placeholder="Mobile" name="mobile" id="mobile" value="{{{ Input::old('mobile', isset($user) ? $user->mobile : null) }}}">
                            {!! $errors->first('mobile', '<label class="control-label"  for="mobile">:message</label>')!!}
                        </div>
                        <div class="form-group {{{ $errors->has('password') ? 'has-error' : '' }}}">
                            <label for="password">{{trans('admin/users.password')}}</label>
                            <input class="form-control" type="password" tabindex="4" placeholder="{{ trans('admin/users.password') }}" name="password" id="password" value="">
                            {!!$errors->first('password', '<label class="control-label" for="password">:message</label>')!!}
                        </div>
                        <div class="form-group {{{ $errors->has('password_confirmation') ? 'has-error' : '' }}}">
                            <label for="password_confirmation">{{trans('admin/users.password_confirmation')}}</label>
                            <input class="form-control" type="password" tabindex="5" placeholder="{{ trans('admin/users.password_confirmation') }}" name="password_confirmation" id="password_confirmation" value="">
                            {!!$errors->first('password_confirmation', '<label class="control-label" for="password_confirmation">:message</label>')!!}
                        </div>
                        <div class="form-group {{{ $errors->has('address') ? 'has-error' : '' }}}">
                            <label for="address">Address</label>
                            <input class="form-control" type="text" tabindex="6" placeholder="Enter Address" name="address" id="address" value="{{{ Input::old('address', isset($user) ? $user->address : null) }}}">
                            {!! $errors->first('address', '<label class="control-label"  for="address">:message</label>')!!}
                        </div>
                        
                        <div class="form-group ">
                            <label for="confirm">{{trans('admin/users.activate_user')}}</label>
                            <select class="form-control" name="active" id="active" tabindex>
                                <option value="1" {{{ ((isset($user) && $user->active == 1)? ' selected="selected"' : '') }}}>{{{ trans('admin/users.yes') }}}</option>
                                <option value="0" {{{ ((isset($user) && $user->active == 0) ? ' selected="selected"' : '') }}}>{{{ trans('admin/users.no') }}}</option>
                            </select>
                        </div>
                    </div><!-- /.box-body -->
                    
                    <div class="box-footer">
                        <button type="reset" class="btn btn-default">
                            <span class="glyphicon glyphicon-remove-circle"></span> {{trans("admin/modal.reset") }}
                        </button>
                        <button type="submit" class="btn btn-primary">
                            <span class="glyphicon glyphicon-ok-circle"></span>
                            @if (isset($user))
                                {{ trans("admin/modal.edit") }}
                            @else
                                {{trans("admin/modal.create") }}
                            @endif
                        </button>
                    </div>
                </form>
                <br><br>
            </div><!-- /.box -->
        </div><!--/.col (left) -->
    </div>   <!-- /.row -->
</section>
@stop 