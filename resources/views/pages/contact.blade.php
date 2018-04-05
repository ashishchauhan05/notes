@extends('app')

@section('title') @parent :: Contact @stop
@section('page-head-text') Contact Us @stop
@section('breadcrumb') <a href="/">Home</a> » <span>Contact</span> @stop

@section('content')
    
<div class="container w100p bg-black">
    <div class="row display-table mar-0 c-white">
        <div class="col-lg-12 display-tablecell ver-align-m h40">
            <span>
            Contact Us
            </span>
        </div>
    </div>
</div>

<div class="container max-w100p mar-t20">

<div class="row">
    <div style="border-right:1px solid #DDD;" class="col-md-6">
           
         @if (isset($status))
            <div>
                <div class="alert alert-{{$status['code']}} alert-dismissible" role="alert">
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>
                    <h4>
                    @if($status['code'] == 'success') 
                    <i class="icon fa fa-check-square-o"></i> 
                    @else
                    <i class="icon fa fa-ban"></i> 
                    @endif
                    {{ $status['header'] }}</h4>
                    <ul>
                        @foreach ($status['messages'] as $m)
                            <li>{{$m}}</li>
                        @endforeach
                    </ul>
                </div>
            </div>
        @endif


        <div class="details-container">
          <div class="f24">Get In Touch</div>
       </div>

       <div class="alert alert-dismissible" id="contactSuccess" style="display: none" role="alert">
            <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>
            <h4 id="status"></h4>
            <ul>
               <li id="message"></li>
            </ul>
        </div>

       <form method="post" name="ContactForm" id="ContactForm">
          <input type="hidden" name="_token" value="{{{ csrf_token() }}}" />

           <div class='col-auto'>
              <div class="mb-2 w70p">
                 <input class="form-control" id="name" placeholder="YOUR NAME" name="name" type="text">
                  <span class="label_error error_name"></span>
              </div>
          </div>

           <div class="col-auto">
              <div class="mb-2 w70p">
                <input class="form-control" placeholder="CONTACT NUMBER" name="ContactNumber" id="ContactNumber" type="text">
                 <span class="label_error error_number"></span>
              </div>
          </div>

          <div class='col-auto'>
              <div class="mb-2 w70p">
                  <input class="form-control" placeholder="EMAIL ID" name="ContactEmail" id="ContactEmail" type="text">
                  <span class="label_error error_email"></span>
              </div>
          </div>

          <div class='col-auto'>
              <div class="mb-2 w70p">
                   <select name="ContactPurpose" id="ContactPurpose" class="form-control">
                        <option value="">--SELECT PURPOSE--</option>
                        <option value="customer">CUSTOMER</option>
                        <option value="partner">PARTNER</option>
                        <option value="careers">CAREERS</option>
                        <option value="training">TRAINING</option>
                        
                    </select>

                  <span class="label_error error_purpose"></span>
              </div>
          </div>
          
          <div class='col-auto'> 
              <div class="mb-2 w70p">
                  <textarea id="ContactDescription" placeholder="YOUR MESSAGE" class="form-control " rows="5" cols="20" name="ContactDescription" value=""></textarea>
                   <span class="label_error error_description"></span>
              </div>
          </div>

          <div class="w70p text-right pad-t5 pad-r5">
             <button type="button" id="submit" class="btn btn-active pointer">Submit</button>
          </div>
           
       </form>

    </div>

    <div class="col-md-6">
       <div class="details-container">
          <div class="f24">Contact Details</div>
       </div>

       <div class="panel panel-body">
            <div class="pw_map_canvas" id="pw_map_57e57c9934558" style="height: 279px; width: 100%"></div>
       </div>
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB1iFBA6hl1ewiI4-G-OaJ78e-il10g-vk"></script>
        <script type="text/javascript">
            var map_pw_map_57e57c9934558;
            function pw_run_map_pw_map_57e57c9934558(){
                var location = new google.maps.LatLng("28.6252529", "77.373547");
                var map_options = {
                    zoom: 12,
                    center: location,
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    scrollwheel: true,
                }
                map_pw_map_57e57c9934558 = new google.maps.Map(document.getElementById("pw_map_57e57c9934558"), map_options);
                var marker = new google.maps.Marker({
                    position: location,
                    map: map_pw_map_57e57c9934558
                });
            }
            pw_run_map_pw_map_57e57c9934558();
        </script>
        <div class="card mar-t15">
            <div class="textwidget pad-t10">
                <ul style="list-style: none">
                    <li><i class="fa fa-home">  </i>
                        <span>Ministry<br>
                        802 - Pinnacle Tower, Sector 62<br>
                        Noida, UP, 201 301<br>
                        </span>
                    </li>
                    <li><i class="fa fa-phone"></i>(+91) 8010 000 444</li>
                    <li><i class="fa fa-envelope"></i><a href='mailto:care@glamstudios.in'>care@glamstudios.in</a></li>
                    <li><i class="fa fa-globe"></i><a href='www.glamstudios.in'>www.glamstudios.in</a></li>
                </ul>
            </div>
        </div>
    </div>
</div>
</div>

@endsection

@section('styles')
    <style type="text/css">
       .textwidget ul li i {
            margin: 12px 0px 0px -20px;
            padding-right: 3px;
        }
    </style>

@endsection
@section('scripts')
    <script>
    
    $(document).ready(function () {
        $("#submit").click(function(){
            var name = $('#name').val();
            var email = $('#ContactEmail').val();
            var mobile = $('#ContactNumber').val();
            var message = $('#ContactDescription').val();
            var purpose = $('#ContactPurpose').val();
            if(!name) {
                $('#name').addClass('input_error');
                $('.error_name').html('Required field');
                return;
            } else {
                $('#name').removeClass('input_error');
                $('.error_name').html('');
            }
            if(!mobile) {
                $('#ContactNumber').addClass('input_error');
                $('.error_number').html('Required field');
                return;
            } else {
                $('#ContactNumber').removeClass('input_error');
                $('.error_number').html('');
            }
            if(!email) {
                $('#ContactEmail').addClass('input_error');
                $('.error_email').html('Required field');
                return;
            } else {
                $('#ContactEmail').removeClass('input_error');
                $('.error_email').html('');
            }
            if(!purpose) {
                $('#ContactPurpose').addClass('input_error');
                $('.error_purpose').html('Required field');
                return;
            } else {
                $('#ContactPurpose').removeClass('input_error');
                $('.error_purpose').html('');
            }
            if(!message) {
                $('#ContactDescription').addClass('input_error');
                $('.error_description').html('Required field');
                return;
            } else {
                $('#ContactDescription').removeClass('input_error');
                $('.error_description').html('');
            }

            
            var dataString = $("form#ContactForm").serialize();
            $.ajax({
                type: "POST",
                url: "/contactFormCollector",
                cache: false,
                data: dataString,
                success:function(data){
                    var result = data.split('|');
                    if(result[0] == "Success") {
                        document.getElementById('contactSuccess').style.display="block";

                         document.getElementById('status').innerHTML = "Success";
                         $('#contactSuccess').removeClass('alert-danger');
                         $('#contactSuccess').addClass('alert-success');

                        document.getElementById('message').innerHTML = "Your message has been sent to us.";
                        $('#ContactForm').remove();
                        return false;
                    } else {
                        document.getElementById('contactSuccess').style.display="block";
                         document.getElementById('status').innerHTML = "Error";
                        $('#contactSuccess').addClass('alert-danger');
                        document.getElementById('message').innerHTML = "There was an error sending your message.";
                        return false;
                    }
                },
            });
            return false;
        });
    });
    </script>
@endsection
