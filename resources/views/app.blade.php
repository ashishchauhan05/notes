<!doctype html>
<html lang="en-US" class="no-js" >
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />

    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <link rel="icon" type="image/png" href="/assets/site/images/favicon.png">

    <title>@section('title') Ministry Of Environment Forest and Climat Change @show</title>

    <meta name="description" content="@section('meta_description')  Ministry Of Environment Forest and Climat Change Northern Regional Office, Chandigarh @show" />

    <link rel="publisher" href="https://plus.google.com/+GlamstudiosIndia/posts">
    <meta name="Language" content="en-US"/>

    <link href="/assets/plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet">

    <link rel="stylesheet" href="/assets/site/css/main.min.css">
    <link rel='stylesheet' id='font-awesome_pms-css'  href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' type='text/css' media='all' />

    <link rel='stylesheet' id='animated-css-css'  href='/assets/site/css/custom.css' type='text/css' media='all' />

    <script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>

    <link href="/assets/plugins/select2/select2.min.css" type="text/css" rel="stylesheet" />

    <link rel="stylesheet" href="/assets/site/css/client1.css">
    <link rel="stylesheet" href="/assets/site/css/client_menu.css">

    <link rel="stylesheet" type="text/css" href="/assets/plugins/slick/css/slick.css"/>
    <link rel="stylesheet" type="text/css" href="/assets/plugins/slick/css/slick-theme.css"/>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh"                  crossorigin="anonymous"></script>

    <script src='/assets/plugins/bootstrap/js/bootstrap.min.js'></script>

    <script src="/assets/plugins/select2/select2.full.min.js"></script>
    <script src="{{asset('assets/admin/js/jquery.colorbox.min.js')}}"></script>

    <script>
        var $ = jQuery.noConflict();
    </script>

    @yield('styles')

    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.7/angular.min.js"></script>

    <script>
        var home = angular.module("home",[]);
    
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

        ga('create', 'UA-71066094-1', 'auto');
        ga('send', 'pageview');

        $(function(){
          
        })
    </script>

</head>

<body>
    @include('partials.header')

    @yield('content')
    @include('partials.footer')
    @yield('scripts')

</body>
</html>
