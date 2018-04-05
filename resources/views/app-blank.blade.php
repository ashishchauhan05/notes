<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>@section('title') Test</title>
    <meta content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' name='viewport'>
    @section('meta_keywords')
        <meta name="keywords" content="your, awesome, keywords, here"/>
    @show @section('meta_author')
        <meta name="author" content="Jon Doe"/>
    @show @section('meta_description')
        <meta name="description"
              content="Lorem ipsum dolor sit amet, nihil fabulas et sea, nam posse menandri scripserit no, mei."/>
    @show
    {{--		<link href="{{ asset('/css/all.css') }}" rel="stylesheet">--}}
    {{--<link href="{{elixir('css/all.css')}}" rel="stylesheet">--}}
    
    <link rel="stylesheet" href="{{asset('/assets/site/css/bootstrap.min.css')}}">
    <link rel="stylesheet" href="{{asset('https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css')}}">
    <link rel="stylesheet" href="{{asset('/assets/site/css/glamstudios.min.css')}}">
    <link rel="stylesheet" href="{{asset('/assets/site/plugins/iCheck/square/blue.css')}}">

    {{-- TODO: Incorporate into elixer workflow. --}}
    {{--<link rel="stylesheet"
          href="{{asset('assets/site/css/half-slider.css')}}">
    <link rel="stylesheet"
          href="{{asset('assets/site/css/justifiedGallery.min.css')}}"/>
    <link rel="stylesheet"
          href="{{asset('assets/site/css/lightbox.min.css')}}"/>
    --}}
    @yield('styles')

    <!-- Fonts -->
    {{--<link href='//fonts.googleapis.com/css?family=Roboto:400,300' rel='stylesheet' type='text/css'>--}}

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->

    <link rel="shortcut icon" href="{{{ asset('assets/site/ico/favicon.ico') }}}">
</head>
<body class="login-page">
@include('flash::message')
@yield('content')
@include('partials.footer')

<!-- Scripts -->
{{--<script src="{{ asset('/js/all.js') }}"></script>--}}
<script src="{{ elixir('js/all.js') }}"></script>

{{-- TODO: Incorporate into elixir workflow. --}}
<script src="{{asset('assets/site/js/jquery.justifiedGallery.min.js')}}"></script>
<script src="{{asset('assets/site/js/lightbox.min.js')}}"></script>
<script src="/assets/site/js/jQuery-2.1.4.min.js"></script>
<script src="/assets/site/js/bootstrap.min.js" type="text/javascript"></script>
<!-- iCheck -->
<script src="/assets/site/js/icheck.min.js" type="text/javascript"></script>
<script>
    $('#flash-overlay-modal').modal();
    $('div.alert').not('.alert-danger').delay(3000).slideUp(300);
</script>
<script>
    $(function () {
        $('input').iCheck({
            checkboxClass: 'icheckbox_square-blue',
            radioClass: 'iradio_square-blue',
            increaseArea: '20%' // optional
        });
    });
</script>
@yield('scripts')

</body>
</html>
