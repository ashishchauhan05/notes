@extends('admin.app-blank')

@section('title') {{{ trans('site/user.login') }}} :: @parent @stop

@section('styles')
    <link rel="stylesheet" href="{{asset('/assets/admin/css/bootstrap.min.css')}}">
    <link rel="stylesheet" href="{{asset('https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css')}}">
    <link rel="stylesheet" href="{{asset('/assets/admin/css/glamstudios.min.css')}}">
    <link rel="stylesheet" href="{{asset('/assets/plugins/iCheck/square/blue.css')}}">

    <style>
        .main-footer {
            margin-left: 0px;
            bottom: 0px;
            position: fixed;
            width: 100%;
        }
    </style>
@endsection

@section('content')
    <div class="login-box">
        <div class="login-logo">
            <a href="/admin"><b>AIMS</b>Buildmart</a>
        </div><!-- /.login-logo -->
        <div class="login-box-body">
            <p class="login-box-msg">{{{ trans('site/user.login_to_account') }}}</p>
            @include('errors.list')
            <form action="{!! URL::to('/admin/auth/login') !!}" method="post">
                <input type="hidden" name="_token" value="{{ csrf_token() }}">
                <div class="form-group has-feedback">
                    <input type="email" class="form-control" placeholder="Email" name="email" value="{{ old('email') }}"/>
                    <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
                </div>
                <div class="form-group has-feedback">
                    <input type="password" name="password" class="form-control" placeholder="Password"/>
                    <span class="glyphicon glyphicon-lock form-control-feedback"></span>
                </div>
                <div class="row">
                    <div class="col-xs-8">
                        <div class="checkbox icheck">
                            <label>
                                <input type="checkbox" name="remember"> Remember Me
                            </label>
                        </div>
                    </div><!-- /.col -->
                    <div class="col-xs-4">
                        <button type="submit" class="btn btn-primary btn-block btn-flat">Sign In</button>
                    </div><!-- /.col -->
                </div>
            </form>
            
            {{--<div class="social-auth-links text-center">
                <p>- OR -</p>
                <a href="#" class="btn btn-block btn-social btn-facebook btn-flat"><i class="fa fa-facebook"></i> Sign in using Facebook</a>
                <a href="#" class="btn btn-block btn-social btn-google-plus btn-flat"><i class="fa fa-google-plus"></i> Sign in using Google+</a>
            </div>--}}<!-- /.social-auth-links -->
            
            {{--<a href="#">I forgot my password</a><br>
            <a href="register.html" class="text-center">Register a new membership</a>--}}
        </div><!-- /.login-box-body -->
    </div><!-- /.login-box -->
    @include('admin.partials.footer')
@endsection

@section('scripts')
    <script src="{{ elixir('js/all.js') }}"></script>

    {{-- TODO: Incorporate into elixir workflow. --}}
    <script src="{{asset('assets/admin/js/jquery.justifiedGallery.min.js')}}"></script>
    <script src="{{asset('assets/admin/js/lightbox.min.js')}}"></script>
    <script src="/assets/admin/js/jQuery-2.1.4.min.js"></script>
    <script src="/assets/admin/js/bootstrap.min.js" type="text/javascript"></script>
    <!-- iCheck -->
    <script src="/assets/admin/js/icheck.min.js" type="text/javascript"></script>
    <script>
        $('#flash-overlay-modal').modal();
        $('div.alert').not('.alert-danger').delay(3000).slideUp(300);
        $(function () {
            $('input').iCheck({
                checkboxClass: 'icheckbox_square-blue',
                radioClass: 'iradio_square-blue',
                increaseArea: '20%' // optional
            });
        });
        $( "body" ).addClass( "login-page" );
    </script>
@endsection
