@extends('app')

@section('title') Ministry - India’s First Brand of Affordable Salons @stop

@section('content')
    @include('home.secondary_menu')

    <div class='container mar-b40'>
        <div class="heading-line">
            <h2 class="clear-default"><span class="heading-text">Glam Deals</span></h2>
        </div>
    </div>

    <div class="container"> 
        <div class="glam-grid">

            @foreach ($promotions as $p)
            <div class="glam-cell glam-cell--3-col">
                <figure class="dealbox__figure">
                    <img class="dealbox__img lazy" data-original="/assets/site/images/promotions/{{$p->id}}@393x300.jpg" src="/assets/site/images/promotions/{{$p->id}}@393x300.jpg" alt="{{$p->name}}">
                    <figcaption class="dealbox__caption">
                        <div>
                            <h5 class="dealbox__title">
                                <span class="dealbox__subheading">{{$p->name}}</span>
                            </h5>
                            <p class="dealbox__description">@if ($p->price_category=='fixed') Only @else Starts @endif @ &#8377; {{$p->price}}/-@if($p->conditions_apply=='y')*@endif</p>
                        </div>
                        <a class="dealbox__link" title="{{$p->name}}" href="#"  data-toggle="modal" data-target="#promotionModal{{$p->id}}">View more</a>
                    </figcaption>
                </figure>
            </div>
            @endforeach
        </div>
    </div>

    <div class='container mar-b40 mar-t20'>
        <div class="heading-line">
            <h2 class="clear-default"><span class="heading-text">Glam Gyan</span></h2>
        </div>
    </div>


    <div class="container pad-l0 pad-r0"> 
        <div class="glam-grid">

            @foreach ($posts as $p)
            <div class="glam-cell glam-cell--4-col glam-blog-cell">
                <figure class="anibox__figure">
                    <img class="anibox__img lazy" data-original="/images/collections/holiday-package-dcd71cd94fe8f767317fdd0bfe9117a4.png" src="{{$p->_embedded->{'wp:featuredmedia'}[0]->media_details->sizes->port3->source_url}}" alt="{{$p->title->rendered}}" >
                    <figcaption class="anibox__caption">
                        <div>
                            <h5 class="anibox__title">
                                <span class="anibox__subheading">{{$p->title->rendered}}</span>
                            </h5>
                            <!-- <p class="anibox__description">{!! str_limit($p->excerpt->rendered, $limit = 100, $end = '...</p>') !!}</p> -->
                        </div>
                        <a title="view more" class="anibox__link" href="/blog/{{$p->id}}/{{$p->slug}}">View more</a>
                    </figcaption>
                </figure>
            </div>
            @endforeach
        </div>
    </div>
    </div>

    <div class='container mar-b40 mar-t20'>
        <div class="heading-line">
            <h2 class="clear-default"><span class="heading-text">Too Glam to Give a Damn</span></h2>
        </div>
    </div>

    <div class="container">
        <div class="row glam-review">
            <div class="col-lg-4">
                <img src='/assets/site/images/media/your_story.png' class="max-w100p h30" alt="Our Story">
                <p >Noida based <a href="/" class="clear-default">Ministry</a>, India’s first brand of
                affordable salons, announced that it has expanded
                its services in Gurgaon and has currently tied up
                with 5 salons in the city at various locations.</p>
            </div>
            <div class="col-lg-4">
                <img src='/assets/site/images/media/yo_success.png' class="max-w100p h30" alt="Our Story">
                <p >Sadiya Naseem did her Bachelor’s degree in
                Communications and post graduation in Journalism and
                mass communications from Aligarh Muslim University.
                Later, she went on to pursue Senior Management
                Program in Strategy and leadership from Indian
                Institute of Management, Calcutta.</p>
            </div>
            <div class="col-lg-4">
                <img src='/assets/site/images/media/et.png' class="max-w100p h30" alt="Out Story">
                <p >An affordable salon brand has raised Rs 2 cr in angel
                funding from Pradeep Mirani and existing investors
                Aqeel Ahmed, Anand Ladsariya, Nitin Agarwal and
                others. The funds will be deployed towards expansion,
                operation and technology.</p>
            </div>
        </div>
    </div>

    <div class='container mar-b40 mar-t20' >
        <div class="heading-line">
            <h2 class="clear-default"><span class="heading-text">Localities Around {{$site_city->name}}</span></h2>
        </div>
    </div>

    <div class="container mar-b40">
        <div class="row">
            <div class="col-lg-12" style='padding:0 10% 0 20%;'>
                <div class="row">
                @foreach($global_locations[$site_city->id]['locations'] as $location)
                    <div class="col-lg-3">
                        <p><a href="/{{str_replace(' ','-',strtolower($site_city->name))}}/{{ str_replace(' ','-',strtolower($location->name))}}/salons/{{$location->id}}"  title="{{$location->name}}">{{$location->name}}</a></p>
                    </div>
                @endforeach
                </div>
            </div>
        </div>
    </div>
     @foreach ($promotions as $promotion)
    <div id="promotionModal{{$promotion->id}}" class="modal fade promotion-model" role="dialog">
        <div class="modal-dialog pointer">
            <div class="modal-header btn-active">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title">{{$promotion->name}}</h4>
            </div>

            <div class="modal-body w100p bg-white display-inline-b" >

                <div class="alert alert-success" id="promotionBookingFormAlert{{$promotion->id}}" style="display: none" role="alert">
                    <!-- <h4 id="status"></h4> -->
                    <ul>
                       <li >We've received your request. Will get in touch with yor shortly.</li>
                       <li><a href="#" class="book_again" onclick="bookAgain({{$promotion->id}})" title="Book Again">Book Again.</a></li>
                    </ul>
                </div>

                <div class="box box-primary">
                    <form id="promotionBookingForm{{$promotion->id}}" method="post">
                    <input type="hidden" class="promotion_id" name="promotion_id" value='{{$promotion->id}}'>
                    <input type="hidden" name="promotion_name" value='{{$promotion->name}}'>

                    <div class="col-auto">
                        <div class="">
                           <div class="card pad-5">
                                {!!$promotion->description!!}
                            </div>
                        </div>
                    </div>
                    <div class="col-auto pad-t10">
                        <div class="mb-2">
                            {!! Form::text('booking_date', '', array('class' => 'form-control promotion_booking_date', 'id'=>'booking_date_'.$promotion->id, 'onkeydown'=>'return false', 'placeholder' => 'BOOKING DATE/TIME')) !!}
                            <span class="label_error error_booking_date_{{$promotion->id}}"></span>
                        </div>
                    </div>
                    <div class="col-auto">
                        <div class="mb-2 ">
                            <input class="form-control" id="mobile_{{$promotion->id}}" placeholder="MOBILE NUMBER" name="mobile" type="text">
                            <span class="label_error error_mobile_{{$promotion->id}}"></span>
                        </div>
                    </div>
                    <div class='col-auto'>
                        <div class="mb-2 ">
                            {!! Form::text('name', '', array('class' => 'form-control', 'id'=>'name_'.$promotion->id, 'placeholder' => 'NAME', 'style'=>'')) !!}
                            <span class="label_error error_name_{{$promotion->id}}"></span>
                        </div>
                    </div>
                    <div class='col-auto'>
                        <div class="mb-2 ">
                            {!! Form::text('email', '', array('class' => 'form-control', 'id'=>'email_'.$promotion->id, 'placeholder' => 'EMAIL ID', 'style'=>'')) !!}
                            <span class="label_error error_email_{{$promotion->id}}"></span>
                        </div>
                    </div>
                    <div class='col-auto'> 
                        <div class="mb-2 ">
                            {!! Form::textarea('additional_info', '', array('id' => 'additional_info_'.$promotion->id, 'class' => 'form-control', 'rows' => '2', 'cols'=>'40', 'placeholder' => 'ANY OTHER INFORMATION', 'style'=>'') ) !!}
                        </div>
                    </div>
                     <div class="text-right pad-r15 pad-t10">
                        <button type="button" promotion_id="{{$promotion->id}}" class="btn btn-active pointer action_submit">Enquire</button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </div>
    @endforeach
    
@endsection

@section('styles')
<link rel="stylesheet" type="text/css" href="/assets/site/css/jquery.datetimepicker.css">
@endsection

@section('scripts')
<script src="/assets/site/js/jquery.datetimepicker.full.min.js"></script>
<script>
    jQuery('.promotion_booking_date').datetimepicker({
        format:'Y-m-d H:i',
    });

    function bookAgain(promotion_id) {
        jQuery('#promotionBookingForm'+promotion_id).show();
        jQuery('#promotionBookingFormAlert'+promotion_id).hide();
    }

    jQuery(".action_submit").click(function(e){
        jQuery('input').removeClass('input_error');
        jQuery('.label_error').html('');
        var promotion_id = jQuery(this).attr('promotion_id');

        e.preventDefault();

        jQuery.ajax({
            type: "POST",
            url: '/promotion/form/'+promotion_id+'?_token={{ csrf_token() }}',
            data: jQuery('#promotionBookingForm'+promotion_id).serialize(),
            success: function(msg){
                jQuery('#promotionBookingForm'+promotion_id).hide();
                jQuery('#promotionBookingFormFooter'+promotion_id).hide();
                jQuery('#promotionBookingFormAlert'+promotion_id).show();
                //$("#promotionModal").modal('hide');
                //location.reload();
            },
            error: function(data){
                var error = data.responseJSON;
                jQuery.each( error, function( key, value ) {
                    jQuery('#'+key+'_'+promotion_id).addClass('input_error');
                    jQuery('.error_'+key+'_'+promotion_id).html(value);
                });
            }
        });
    });
</script>

<script>

    $(document).ready(function() {
        $("#home_booking_filter_city_select").select2({});
        $('.js-md-location-link').click(function(){

            window.location.href = $(this).attr('url');
        });
    });

</script>

<script>
        
    home.controller('homeController',function($scope,$http,$q,filterFilter){
      $scope.searchData = '';
      $scope.type = '';
      $scope.key = '';
      $scope.city = {{$site_city->id}};

      $scope.topLocations = '';
      $scope.topSalons = '';
      $scope.topServices = '';
      $scope.reloadData = function(){

            $http.get("{{\Config::get('app.api_url')}}/search_data/"+$scope.city+"/").then(function(response){
                $scope.searchData = response.data;
            });

            fetchRecommandedData();
        }
        $scope.reloadData();

        function fetchRecommandedData() {
            $http.get("{{\Config::get('app.api_url')}}/top_locations/"+$scope.city+"/").then(function(response){
                $scope.topLocations = response.data;
            });

            $http.get("{{\Config::get('app.api_url')}}/top_salons/"+$scope.city+"/").then(function(response){
                $scope.topSalons = response.data;
            });

            $http.get("{{\Config::get('app.api_url')}}/top_sold_services/"+$scope.city+"/").then(function(response){
                $scope.topServices = response.data;
            });
        }

        $('#keywords_input').keyup(function(){
          
          if(!$(this).val() ) {
              $('.keyword-search-start').css('display','block'); 
              $('#keywords-dd').css('display','none'); 
          } else {        
            
            $('.keyword-search-start').css('display','none'); 
            $('#keywords-dd').css('display','block'); 
           
          }
        });

        $( "#home_booking_filter_city_select" ).change(function() {
            $scope.city = $(this).val();   
            $scope.reloadData();    
        });

        $scope.setValue = function(name,type,key) {
            $scope.type= type;
            $scope.key = key;
            $scope.keyword = name;
            $('#type').val(type);
            $('#key').val(key);
            $('#explore-keywords-dropdown').css('display','none');
            $('#homepage_booking_form').submit();
        }

        var clickEvent = function(e){
            if(!$('#keywords_container')[0].contains(e.target)){
                 $('#explore-keywords-dropdown').css('display','none'); 
                 $(document).unbind('click',clickEvent);
            }
        };

        $("#keywords_input").focus(function() {
            $('#explore-keywords-dropdown').css('display','block');       
            //return false;
            $(document).bind('click',clickEvent);
        });

    });

    </script>

@endsection
