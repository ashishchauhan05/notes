<!doctype HTML>
<html>

<head>
    <meta charset="UTF-8">
    <meta content="width=device-width,initial-scale=1" name="viewport">
    <link rel="stylesheet" href="/assets/login/node_modules/bootstrap/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.blue-deep_purple.min.css" />
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,700" rel="stylesheet">
    <link href="/assets/login/fonts/fontello/css/fontello.css" rel="stylesheet" />
    <link rel="stylesheet" href="/assets/login/css/bootstrap-offset-right.css">
    <link rel="stylesheet" href="/assets/login/css/style.css">
    <title>Material Design Login Template</title>
    <style>
        .mdl-textfield__label {
            margin-bottom: 0;
            color: #d7dbdc;
            font-weight: normal;
        }
        
        .mdl-textfield--floating-label.is-focused .mdl-textfield__label,
        .mdl-textfield--floating-label.is-dirty .mdl-textfield__label {
            text-transform: uppercase
        }
        
        .has-feedback label~.form-control-feedback {
            top: 15px;
        }
        
        .mdl-textfield {
            width: 100%;
        }
        
        .mdl-checkbox__label {
            cursor: text;
            font-size: 13px;
            float: left;
            color: #b0b3b4;
            font-weight: normal;
        }
        
        .mdl-checkbox__box-outline {
            border: 1px solid #b0b3b4;
        }
        
        .mdl-textfield__input {
            border: none;
            border-bottom: 1px solid rgba(0, 0, 0, .12);
            display: block;
            font-size: 16px;
            margin: 0;
            padding: 4px 0;
            width: 100%;
            background: 0 0;
            text-align: left;
            color: inherit;
            font-weight: bold;
        }
        
        .mdl-switch__label {
            float: left;
            font-weight: normal;
            color: #b0b3b4;
            font-size: 14px;
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="center-block">
            <div class="col-xs-4 no-padding" style="z-index:1">
                <!-- Slider -->

                <div class="mlt-carousel">
                    <div id="myCarousel" class="carousel slide carousel-fade" data-ride="carousel">
                        <div class="carousel-inner" role="listbox">
                            <div class="item active">
                                <img class="img-responsive center-block" src="/assets/login/img/step1.png" alt="step1">
                                <div class="item-content">
                                    <h3>Get 200/ on signup</h3>
                                </div>
                            </div>
                            <div class="item">
                                <img class="img-responsive center-block" src="/assets/login/img/step2.png" alt="step2">
                                <div class="item-content">
                                    <h3>20% cashback </h3>
                                </div>
                            </div>
                            <div class="item">
                                <img class="img-responsive center-block" src="/assets/login/img/step3.png" alt="step3">
                                <div class="item-content">
                                    <h3> Refer and Earn</h3>
                                </div>
                            </div>
                        </div>
                        <!-- Indicators -->
                        <ol class="carousel-indicators">
                            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                            <li data-target="#myCarousel" data-slide-to="1"></li>
                            <li data-target="#myCarousel" data-slide-to="2"></li>
                        </ol>
                    </div>
                    <!--mlt-carousel-->
                </div>
                <!-- Slider -->
            </div>
            <!-- Login -->

            <div class="col-xs-8 no-padding">
                <div class="mlt-content">
                    <ul class="nav nav-tabs">
                        <li class="active"><a href="#login" data-toggle="tab">Login</a></li>
                        <li ><a href="#register" data-toggle="tab">Register</a></li>
                    </ul>

                    <div id="myTabContent" class="tab-content" style="margin-top: 20px;">
                        <div class="tab-pane fade in active" id="login">
                            <!--login form-->
                             <input name="_token" id="login_token" value="{{{ csrf_token() }}}" type="hidden"> 
                            <div class="next" id="div_user">

                                <div class="col-xs-offset-1 col-xs-offset-right-1 col-sm-12 col-xs-10 pull-right ">
                                    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                        <input class="mdl-textfield__input" type="text" id="login_username" autocomplete="off">
                                        <label class="mdl-textfield__label" for="emailAddress">Email/Mobile</label>
                                    </div>
                                </div>

                                <div class="col-xs-offset-1 col-xs-offset-right-1 col-sm-12 col-xs-10 pull-right ">
                                    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                        <input class="mdl-textfield__input" type="password" id="login_password" autocomplete="off">
                                        <label class="mdl-textfield__label" for="emailAddress">Password</label>
                                        <span class="mdl-textfield__error login_password_error"></span>
                                    </div>
                                </div>                             

                                <div class="col-xs-offset-1 col-xs-offset-right-1 col-sm-12 col-xs-10 pull-right ">
                                    <div class="row">
                                        <div class="col-xs-12" style=" text-align:right;">
                                            <a href="#" id="reset_password">Reset Password</a>
                                        </div> 
                                    </div>
                                </div>

                                <div class="col-xs-offset-1 col-xs-offset-right-1 col-sm-12 col-xs-10 pull-right ">
                                    <button class="btn lt-register-btn" type="button" id="user_login">login <i class="icon-right "></i></button>
                                </div>
                            </div>


                            <div class="next" id="div_reset" style="display: none">

                             <div class="col-xs-offset-1 col-xs-offset-right-1 col-sm-12 col-xs-10 pull-right ">
                                    <span><h3>Reset Password</h3></span>
                                </div>

                                <div class="col-xs-offset-1 col-xs-offset-right-1 col-sm-12 col-xs-10 pull-right ">
                                    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                        <input class="mdl-textfield__input" type="text" id="reset_mobile" autocomplete="off">
                                        <label class="mdl-textfield__label" for="reset_mobile">Mobile No</label>
                                        <span class="mdl-textfield__error reset_mobile_error"></span>
                                    </div>
                                </div>

                                <div class="col-xs-offset-1 col-xs-offset-right-1 col-sm-12 col-xs-10 pull-right ">
                                    <button class="btn lt-register-btn" type="button" id="send_otp">Send OTP <i class="icon-right "></i></button>
                                </div>
                            </div>

                            <div class="next" id="div_reset_submit" style="display: none;">

                             <div class="col-xs-offset-1 col-xs-offset-right-1 col-sm-12 col-xs-10 pull-right ">
                                </div>

                                <div class="col-xs-offset-1 col-xs-offset-right-1 col-sm-12 col-xs-10 pull-right ">
                                    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                        <input class="mdl-textfield__input" type="text" id="reset_otp" autocomplete="off">
                                        <label class="mdl-textfield__label" for="reset_otp">otp</label>
                                        <span class="mdl-textfield__error reset_otp_error"></span>
                                    </div>
                                </div>

                                 <div class="col-xs-offset-1 col-xs-offset-right-1 col-sm-12 col-xs-10 pull-right ">
                                    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                        <input class="mdl-textfield__input" type="password" id="new_password" autocomplete="off">
                                        <label class="mdl-textfield__label" for="new_password">New Password</label>
                                        <span class="mdl-textfield__error new_password_error"></span>
                                    </div>
                                </div>

                                <div class="col-xs-offset-1 col-xs-offset-right-1 col-sm-12 col-xs-10 pull-right ">
                                    <button class="btn lt-register-btn" id="reset_submit">login <i class="icon-right "></i></button>
                                </div>
                            </div>

                            <!--login form-->
                        </div>

                        <div class="tab-pane fade in"  id="register">
                             <div class="next" id="div_register">

                                <div class="col-xs-offset-1 col-xs-offset-right-1 col-sm-12 col-xs-10 pull-right ">
                                    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                        <input class="mdl-textfield__input" type="text" id="register_name" autocomplete="off">
                                        <label class="mdl-textfield__label" for="emailAddress">Name*</label>
                                    </div>
                                </div>

                                <div class="col-xs-offset-1 col-xs-offset-right-1 col-sm-12 col-xs-10 pull-right ">
                                    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                        <input class="mdl-textfield__input" type="text" id="register_mobile" autocomplete="off">
                                        <label class="mdl-textfield__label" for="emailAddress">Mobile*</label>
                                        <span class="mdl-textfield__error register_mobile_error"></span>
                                    </div>
                                </div>

                                <div class="col-xs-offset-1 col-xs-offset-right-1 col-sm-12 col-xs-10 pull-right ">
                                    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                        <input class="mdl-textfield__input" type="text" id="register_email" autocomplete="off">
                                        <label class="mdl-textfield__label" for="emailAddress">Email ID</label>
                                         <span class="mdl-textfield__error register_email_error"></span>
                                    </div>
                                </div>

                                <div class="col-xs-offset-1 col-xs-offset-right-1 col-sm-12 col-xs-10 pull-right ">
                                    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                        <input class="mdl-textfield__input" type="password" id="register_password" autocomplete="off">
                                        <label class="mdl-textfield__label" for="emailAddress">Password</label>
                                    </div>
                                </div>  
                                <div class="col-xs-offset-1 col-xs-offset-right-1 col-sm-12 col-xs-10 pull-right ">
                                    <button class="btn lt-register-btn" type="button" id="validate">Register <i class="icon-right "></i></button>
                                </div>
                            </div>

                            <div class="next" id="div_register_otp" style="display: none;">

                                <div class="col-xs-offset-1 col-xs-offset-right-1 col-sm-12 col-xs-10 pull-right ">
                                    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                        <input class="mdl-textfield__input" type="text" id="register_otp" autocomplete="off">
                                        <label class="mdl-textfield__label" for="emailAddress">Enter OTP</label>
                                        <span class="mdl-textfield__error register_otp_error"></span>
                                    </div>

                                    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                       <label class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="male">
                                          <input type="radio" id="male" class="mdl-radio__button" name="gender" value="m" checked>
                                          <span class="mdl-radio__label">Male</span>
                                        </label>
                                        <label class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="female">
                                          <input type="radio" id="female" class="mdl-radio__button" name="gender" value="f">
                                          <span class="mdl-radio__label">Female</span>
                                        </label>
                                        <span class="mdl-textfield__error register_otp_error"></span>
                                    </div>

                                    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                        <input class="mdl-textfield__input" type="text" id="register_address" autocomplete="off">
                                        <label class="mdl-textfield__label" for="emailAddress">Address</label>
                                        <span class="mdl-textfield__error register_otp_error"></span>
                                    </div>
                                </div>
                                <div class="col-xs-offset-1 col-xs-offset-right-1 col-sm-12 col-xs-10 pull-right ">
                                    <button class="btn lt-register-btn" id="submit_register">Register <i class="icon-right "></i></button>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
                <!--Login-->
            </div>
            <!--center-block-->
        </div>
        <!--container-->
    </div>

    <script src="/assets/login/node_modules/jquery/dist/jquery.min.js "></script>
    <script src="/assets/login/node_modules/bootstrap/dist/js/bootstrap.min.js "></script>
    <script src="/assets/login/libs/mdl/material.min.js "></script>

  <script type="text/javascript">
    $(document).ready(function(){

     $('#validate').click(function(){
         var data = {
                _token: $('#login_token').val(),
                email : $('#register_email').val(),
                mobile : $('#register_mobile').val(),
                type : 'register'
            }

            $.ajax({
                type: "POST",
                url: "/api/v1/customer/verify",
                data:data,
                success: function(json) {
                    if(json.code == 'success') {
                        $('#div_register').css('display','none');
                        $('#div_register_otp').css('display','block')

                    }else {
                        $("#register_"+json.field).parent().addClass("is-invalid");

                        $(".register_"+json.field+'_error').text(json.messages);
                    }
                  // $('.next').css('display','none');
                   // $('#div_'+json.next).css('display','block')
                }
            })

     });

    $('#submit_register').click(function(){

        var data = {
            _token: $('#login_token').val(),
            name : $('#register_name').val(),
            email : $('#register_email').val(),
            mobile : $('#register_mobile').val(),
            password : $('#register_password').val(),
            otp : $('#register_otp').val(),
            gender : $('input[name=gender]:checked').val(),
            address : $('#register_address').val(),
            type : 'register'
        }

        $.ajax({
            type: "POST",
            url: "/signup",
            data:data,
            success: function(json) {
                if(json.code == 'success') {
                    parent.$.colorbox.close();

                }else {
                    $("#register_otp").parent().addClass("is-invalid");

                    $(".register_otp_error").text(json.messages);
                }
              // $('.next').css('display','none');
               // $('#div_'+json.next).css('display','block')
            }
        })
     });

     $('#use_validate').click(function(){
         var data = {
                _token: $('#login_token').val(),
                username : $('#use_mobile').val(),
                login_with : 'otp'
            }

            $.ajax({
                type: "POST",
                url: "/api/v1/customer/find",
                data:data,
                success: function(json) {
                  $('.next').css('display','none');
                   $('#div_use_otp').css('display','block')
                }
            })

     }); 

     $('#submit_otp').click(function(){
         var data = {
                _token: $('#login_token').val(),
                username : $('#login_username').val(),
                otp : $('#login_otp').val(),
                'type' : 'otp'

            }

            $.ajax({
                type: "POST",
                url: "/signin",
                data:data,
                success: function(json) {
                  $('.next').css('display','none');
                   $('#div_'+json.next).css('display','block')
                }
            })

     });

      $('#submit_use_otp').click(function(){
         var data = {
                _token: $('#login_token').val(),
                username : $('#use_mobile').val(),
                otp : $('#use_otp').val(),
                type : 'otp'

            }

            $.ajax({
                type: "POST",
                url: "/signin",
                data:data,
                success: function(json) {
                  if(json.code == 'success') {
                    parent.$.colorbox.close();
                     // setInterval(function (){ parent.$.colorbox.close();}, 200);
                  }else {
                    $("#use_otp").parent().addClass("is-invalid");

                    $(".use_otp_error").text(json.messages);
                  }
                }
            })

     }); 

     $('#user_login').click(function(){
        var data = {
              _token: $('#login_token').val(),
              username : $('#login_username').val(),
              password : $('#login_password').val(),
              type : 'password'

        }

        $.ajax({
            type: "POST",
            url: "/signin",
            data:data,
            success: function(json) {
             if(json.code == 'success') {
                parent.$.colorbox.close();
                // var msg = json.messages ?  json.messages : 'Login success!';
                // swal(msg,{
                //   icon: "success",
                //   buttons: false,
                //   timer: 2500,
                // });
                // setInterval(function (){ parent.$.colorbox.close();}, 3200);
                
              }else {

                $("#login_password").parent().addClass("is-invalid");

                $(".login_password_error").text(json.messages);
               
               }
            }
        })
     }); 

     $('#reset_password').click(function(){

        $('#div_user').css('display','none');
        $('#div_reset').css('display','block')
     });

     $('#send_otp').click(function(){

        var data = {
            _token: $('#login_token').val(),
            mobile : $('#reset_mobile').val(),
            type : 'otp'
        }

        $.ajax({
            type: "POST",
            url: "/api/v1/customer/reset",
            data:data,
            success: function(json) {
                if(json.code == 'success') {
                    $('#div_reset').css('display','none');
                    $('#div_reset_submit').css('display','block')

                }else {
                    $("#reset_mobile").parent().addClass("is-invalid");

                    $(".reset_mobile_error").text(json.messages);
                }
            }
        })
     });

      $('#reset_submit').click(function(){

        var data = {
            _token: $('#login_token').val(),
            username : $('#reset_mobile').val(),
            otp : $('#reset_otp').val(),
            password : $('#new_password').val(),
            type : 'reset'
        }

        $.ajax({
            type: "POST",
            url: "/signin",
            data:data,
            success: function(json) {
                if(json.code == 'success') {
                    parent.$.colorbox.close();
                    //  var msg = json.messages ?  json.messages : 'Login success!';
                    // swal(msg,{
                    //   icon: "success",
                    //   buttons: false,
                    //   timer: 2500,
                    // });
                    // setInterval(function (){ parent.$.colorbox.close();}, 3200);

                }else {
                    $("#reset_otp").parent().addClass("is-invalid");

                    $(".reset_otp_error").text(json.messages);
                }
            }
        })
     });
    
  });
</script>

</body>

</html>