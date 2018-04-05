@extends('app')

@section('title') @parent :: Academy @stop
@section('page-head-text') Academy @stop
@section('breadcrumb') <a href="/">Home</a> » <span>Academy</span> @stop

@section('content')

<div class="container w100p bg-black">
    <div class="row display-table mar-0 c-white">
        <div class="col-lg-12 display-tablecell ver-align-m h40">
            <a href="/">Home</a> » 
            <span>
            Academy
            </span>
        </div>
    </div>
</div>

<div class="container max-w100p mar-t20 info_pages">

<div class="alert alert-dismissible" id="contactSuccess" style="display: none" role="alert">
    <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>
    <h4 id="status"></h4>
    <ul>
       <li id="message"></li>
    </ul>
</div>

	<div class="row">
       <div class="col-md-6" style="border-right:1px solid #DDD;" >
       		<div id="tab1" data-tabs-default="" data-tab-content="" class="service_tab" style="">
				<div class="accordion ui-accordion ui-widget ui-helper-reset" role="tablist">
					<h3 class="ui-accordion-header ui-corner-top ui-state-default ui-accordion-icons ui-accordion-header-collapsed ui-corner-all" role="tab" id="ui-id-1" aria-controls="ui-id-2" aria-selected="false" aria-expanded="false" tabindex="-1">
						<span class="ui-accordion-header-icon ui-icon iconClosed"></span>Advanced Cosmetology Course (6 Months)
					</h3>
					<div class="accordion-body ui-accordion-content ui-corner-bottom ui-helper-reset ui-widget-content" style="display: none;" id="ui-id-2" aria-labelledby="ui-id-1" role="tabpanel" aria-hidden="true">
						<div class="row">						
							<div class="col-md-12">
								<p><span style="font-weight: 450;">

								</span></p>
								<ul>
									<li>Basic & Advance Skin</li>
									<li>Basic & Advance Hair</li>
									<li>Hair Styling & Chemical Treatments</li>
									<li>Basic & Advance Makeup</li>
									<li>Air Brush</li>
									<li>Salon Management</li>
								</ul>
							</div>
						</div>
					</div>

					<h3 class="ui-accordion-header ui-corner-top ui-state-default ui-accordion-icons ui-accordion-header-collapsed ui-corner-all" role="tab" id="ui-id-3" aria-controls="ui-id-4" aria-selected="false" aria-expanded="false" tabindex="-1"><span class="ui-accordion-header-icon ui-icon iconClosed"></span>Basic Cosmetology Course (3 Months)</h3>
					<div class="accordion-body ui-accordion-content ui-corner-bottom ui-helper-reset ui-widget-content" style="display: none;" id="ui-id-4" aria-labelledby="ui-id-3" role="tabpanel" aria-hidden="true">
						<div class="row">						
							<div class="col-md-12">
								<p><span style="font-weight: 450;">

								</span></p>
								<ul>
									<li>Basic Skin</li>
									<li>Basic Hair</li>
									<li>Basic Makeup</li>
									<li>Salon Management</li>
								</ul>
							</div>
						</div>
					</div>
					<h3 class="ui-accordion-header ui-corner-top ui-state-default ui-accordion-icons ui-accordion-header-active ui-state-active" role="tab" id="ui-id-5" aria-controls="ui-id-6" aria-selected="true" aria-expanded="true" tabindex="0"><span class="ui-accordion-header-icon ui-icon iconOpen"></span>Advance Hair Course (3 Months)</h3>
					<div class="accordion-body ui-accordion-content ui-corner-bottom ui-helper-reset ui-widget-content ui-accordion-content-active" style="" id="ui-id-6" aria-labelledby="ui-id-5" role="tabpanel" aria-hidden="false">
						<div class="row">						
							<div class="col-md-12">
								<p><span style="font-weight: 450;">

								</span></p>
								<ul>
									<li>Basic Hair</li>
									<li>Advance Hair</li>
									<li>Hair Styling & Chemical Treatments</li>
									<li>Salon Management</li>
								</ul>
							</div>
							
						</div>
					</div>

					<h3 class="ui-accordion-header ui-corner-top ui-state-default ui-accordion-icons ui-accordion-header-active ui-state-active" role="tab" id="ui-id-5" aria-controls="ui-id-6" aria-selected="true" aria-expanded="true" tabindex="0"><span class="ui-accordion-header-icon ui-icon iconOpen"></span>Airbrush Makeup (10 Days)</h3>
					<div class="accordion-body ui-accordion-content ui-corner-bottom ui-helper-reset ui-widget-content ui-accordion-content-active" style="" id="ui-id-6" aria-labelledby="ui-id-5" role="tabpanel" aria-hidden="false">
						<div class="row">						
							<div class="col-md-12">
								<p><span style="font-weight: 450;">
									Professional Enhancement Courses
								</span></p>
								<ul>
								</ul>
							</div>
						</div>
					</div>

					<h3 class="ui-accordion-header ui-corner-top ui-state-default ui-accordion-icons ui-accordion-header-active ui-state-active" role="tab" id="ui-id-5" aria-controls="ui-id-6" aria-selected="true" aria-expanded="true" tabindex="0"><span class="ui-accordion-header-icon ui-icon iconOpen"></span>Hairstyling Course (10 Days)</h3>
					<div class="accordion-body ui-accordion-content ui-corner-bottom ui-helper-reset ui-widget-content ui-accordion-content-active" style="" id="ui-id-6" aria-labelledby="ui-id-5" role="tabpanel" aria-hidden="false">
						<div class="row">						
							<div  class="col-md-6">
								<p><span style="font-weight: 450;">
									Professional Enhancement Courses
								</span></p>
								<ul>
									
								</ul>
							</div>
							
						</div>
					</div>
				</div><!--End Accordion-->
			</div>
	    </div>

	    <div class="col-md-6">  
	        <div class="details-container">
	          <div class="f24">Leave your details below.</div>
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
	                        <option value="">--SELECT COURSE--</option>
	                        <option value="Advanced Cosmetology Course">Advanced Cosmetology Course</option>
	                        <option value="Basic Cosmetology Course">Basic Cosmetology Course</option>
	                        <option value="Advance Hair Course">Advance Hair Course</option>
	                        <option value="Airbrush Makeup">Airbrush Makeup</option>
	                        <option value="Hairstyling Course">Hairstyling Course</option>
	                        
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

	       <div class="card mar-t15">
	            <div class="textwidget pad-t10">
		            <h3 style="margin-left: 15px;"> Benefits</h3>
	                <ul>
	                    <li>Blended experience & learning
	                    </li>
	                    <li>Well qualified & trained faculty</li>
	                    <li>Internship & placement opportunity</li>
	                    <li>World class infrastructure and equipments</li>
	                    <li>Soft skills development</li>
	                    <li>Certification</li>
	                   
	                </ul>
	            </div>
	        </div>
	    </div>
	</div>
</div>
@endsection
@section('styles')
<style type="text/css">
   .accordion h3 {
   	cursor: pointer;
   }
</style>

@endsection


@section('scripts')

<script src="/assets/site/js/jquery-ui-1.12.1.js"></script>

<script src="/assets/site/js/tabs.js" selector=".service_tab"></script>
<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>

<script>

$(function() {
    var icons = {
        header: "iconClosed",
        activeHeader: "iconOpen"
    };
    $( ".accordion" ).accordion({
        icons: icons,
        heightStyle: "content" 
    });
    $( "#toggle" ).button().click(function() {
        if ( $( ".accordion" ).accordion( "option", "icons" ) ) {
            $( ".accordion" ).accordion( "option", "icons", null );
        } else {
            $( ".accordion" ).accordion( "option", "icons", icons );
        }
    });

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

                        document.getElementById('message').innerHTML = "Your query for course registration has been received.";
                        // $('#ContactForm').remove();
                        $('#name').val('');
            			$('#ContactEmail').val('');
            			$('#ContactNumber').val('');
            			$('#ContactDescription').val('');
            			$('#ContactPurpose').val('');
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