@extends('layouts.modal')
@section('content')
<link rel="stylesheet" href="{{asset('assets/site/css/signin.css')}}">
<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">

<div class="box-header" style='background-color: #EC2790;padding: 15px;border-bottom: 1px solid #e5e5e5;position: fixed;top: 0px;left: 0px;width: 100%;z-index: 1000000;'>
     <h3 class="box-title" style='color:#FFF;'>Forget Password</h3>
</div>

<div style="padding-top:70px;">
 @include('errors.list')
</div>
 @include('flash::message')

 <form class="form-signin" method="post" name="signupForm" id="signupForm">
  <input type="hidden" name="_token" value="{{{ csrf_token() }}}" />
     <input type="text" class="form-control" placeholder="Enter your email" name="email" value="{{ old('email') }}"/>
     <input type="password" style="margin-top: 10px;" class="form-control" placeholder="Type New Password" name="password" id="pass"/>
     <input type="password" class="form-control" placeholder="Retype New Password" name="password_confirmation" id="repass"/>
     <div class="clear"> </div>
	<button class="btn btn-lg btn-primary btn-block" type="submit">Submit</button>
   </form>
  
<script src="//code.jquery.com/jquery.js"></script>
<script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>

<!-- This is only necessary if you do Flash::overlay('...') -->
<script>
    $('#flash-overlay-modal').modal();
        </script>

@endsection
