@extends('app')

@section('title') Ministry | Beauty Parlour Services in Indirapuram @stop
@section('meta_description')Facials, threading, waxing, rebounding, hair colouring, styling and more, Ministry offers the best beauty services at the most affordable rates.@stop
@section('styles')
	<link rel="stylesheet" href="/assets/site/css/animate.css">
	<link rel="stylesheet" href="/assets/site/css/icomoon.css">
    <style>
        .fh5co-services > i {
            font-size: 60px;
        }
        .fh5co-services {
            padding-bottom:20px !important;
        }
    </style>
@stop
@section('content')
<br>
<br>
<br>
	<section id="becomeaglam">
	@if(!isset($success))
	<div id="fh5co-page">
		<div id="fh5co-contact-section">
			<div class="container">
				<div class="row">
					<div class="col-md-8 col-md-offset-2 text-center heading-section animate-box">
						<h2>BECOME A FRANCHISE - ZERO COST</h2>
						<h3>Partner with us Today for a Brighter Tomorrow</h3>
						<br>
					</div>
				</div>
				<div class="row">
					<div class="col-md-8 animate-box">
							<form role="form" method="post" action="{{ URL::to('becomeaglam') }}" autocomplete="off">
							<input type="hidden" name="_token" value="{{{ csrf_token() }}}" />
								<div class="col-md-6">
									<div class="form-group {{{ $errors->has('name') ? 'has-error' : '' }}}">
										<input name="name" id="name" type="text" class="form-control" placeholder="Name">
										{!! $errors->first('name', '<label class="error-label"  for="name">:message</label>')!!}
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group {{{ $errors->has('phone') ? 'has-error' : '' }}}">
										<input name="phone" id="phone" type="text" class="form-control" placeholder="Phone">
										{!! $errors->first('phone', '<label class="error-label"  for="phone">:message</label>')!!}
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<input name="email" id="email" type="text" class="form-control" placeholder="Email">
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group {{{ $errors->has('city') ? 'has-error' : '' }}}"">
										<select name="city" id="city" class="form-control">
											<option value="" disabled selected>City</option>
	    									<option>Faridabad</option>
									    	<option>Ghaziabad</option>
									    	<option>Gurgaon</option>
									    	<option>New Delhi</option>
									    	<option>Noida</option>
									    	<option>Other</option>
										</select>
										{!! $errors->first('city', '<label class="error-label"  for="city">:message</label>')!!}
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group {{{ $errors->has('area') ? 'has-error' : '' }}}"">
										<input name="area" id="area" type="text" class="form-control" placeholder="Area">
										{!! $errors->first('area', '<label class="error-label"  for="area">:message</label>')!!}
									</div>
								</div>
								<div class="col-md-12">
									<div class="form-group">
										<textarea name="message" id="message" class="form-control"  cols="30" rows="7" placeholder="Message"></textarea>
									</div>
								</div>
								<div class="col-md-12">
									<div class="form-group">
										<input type="submit" value="Be Glam" name="be_glam" class="btn btn-primary" >
									</div>
								</div>
							</form>
					</div>
                    <div class="col-md-4 animate-box">
                        <h3>Our Address</h3>
                        <ul class="contact-info">
                            <li><i class="icon-location-pin"></i>802, 8th Floor, Pinnacle Towers, Sector 62, Noida</li>
                            <li><i class="icon-phone2"></i><a href="tel:0120-234448484">0120-234448484 </a></li>
                            <li><i class="icon-mail"></i><a href="mailto:care@glamstudios.in">care@glamstudios.in</a></li>
                        </ul>
                    </div>
				</div>
			</div>
		</div>
		<div id="fh5co-services-section">
			<div class="container">
				<div class="row">
					<div class="col-md-8 col-md-offset-2 text-center heading-section">
						<h2>Your Problems and Our Solutions</h2>
						<h3>Once you Tie up with Ministry, we ensure that your profits and revenues increase as cost stablizes</h3>
					</div>
				</div>
				<br>
				<div class="row">
					<div class="col-md-4 animate-box">
						<div class="fh5co-services text-center">
							<i class="icon-linegraph"></i>
							<div class="holder-section">
								<h3>Higher Incomes</h3>
								<p>We take up centralised and coordinated digital and hyper-local marketing efforts to increase your revenues. </p>
							</div>
						</div>
					</div>
					<div class="col-md-4 animate-box">
						<div class="fh5co-services text-center">
							<i class="icon-scissors"></i>
							<div class="holder-section">
								<h3>Free Trainings</h3>
								<p>With help of our experiences Beauty and Makeup trainers, We provide free trainings to all your staff </p>
							</div>
						</div>
					</div>
					<div class="col-md-4 animate-box">
						<div class="fh5co-services text-center">
							<i class="icon-tools-2"></i>
							<div class="holder-section">
								<h3>Infrastructure Development</h3>
								<p>We carry out transformations in your Salon and improve infrastructure for excellent customer experience.</p>
							</div>
						</div>
					</div>
					<br>
					<div class="col-md-4 animate-box">
						<div class="fh5co-services text-center">
							<i class="icon-gift"></i>
							<div class="holder-section">
								<h3>Free Salon Software</h3>
								<p>We have fully fledge Salon Management software. This is provided to every frenchise for free of cost</p>
							</div>
						</div>
					</div>
					<div class="col-md-4 animate-box">
						<div class="fh5co-services text-center">
							<i class="icon-profile-female"></i>
							<div class="holder-section">
								<h3>CRM</h3>
								<p>We have excellent team, which works round the clock on customer retention and management. </p>
							</div>
						</div>
					</div>
					<div class="col-md-4 animate-box">
						<div class="fh5co-services text-center">
							<i class="icon-lightbulb"></i>
							<div class="holder-section">
								<h3>Recruitment</h3>
								<p>We provide central support for recruitment to all our frenchise for free of cost</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

	</div>
	@else
		<h4 style="color: #EC2790"><center>Thank you for showing your interest in glam. We will get back to you soon.</center></h4>
	@endif      
	
</section>
@endsection
