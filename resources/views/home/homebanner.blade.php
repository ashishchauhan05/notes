<script type="text/javascript" src="/assets/plugins/select2/select2.full.js"></script>
<link href="/assets/plugins/select2/select2.min.css" type="text/css" rel="stylesheet" />

<div id="aq-block-10794-1" class="aq-block aq-block-aq_slider_block_revolutionslider aq_span12 aq-first cf">
    <div id="home_booking_filter" class="rev_slider_wrapper fullwidthbanner-container" style="background: rgba(0, 0, 0, 0) url(/assets/site/images/slider/slide-2.jpg) no-repeat scroll center center / cover;">
        <div class="container-fluid _1TeuqY4CxFPaQ4l0VCmubY" style='min-height:550px;'>
            <div class="row searchbar_wrapper">
                <div class="searchbar_container">
                    <div class="searchbar">
                        <form id='homepage_booking_form'>
                        <div class="search_city">
                            {!! Form::select('home_booking_filter_city_select', $global_cities, $site_city->id, ['id'=>'home_booking_filter_city_select']) !!}
                        </div>
                        <div class="search_location">
                            {!!Form::select('home_booking_filter_location_select', $locations[Session::get('site_city')->id], 0, ['id'=>'home_booking_filter_location_select']) !!}
                        </div>
                        <div class="search_button">
                            <input type="submit" value="Search" class="confirm-submit">
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@section('scripts')
@parent
<script>
    $(document).ready(function() {
        locations_by_city = {!! json_encode($locations) !!};
        $("#home_booking_filter_city_select").select2({});
        $("#home_booking_filter_location_select").select2({});
        $( "#home_booking_filter_city_select" ).change(function() {
            var city_id = $(this).val();
            location_options = '';
            $.each(locations_by_city[city_id], function(i, item) {
                location_options += '<option value="'+i+'">'+item+'</option>';
            });
            $("#home_booking_filter_location_select").html(location_options);
            $('#home_booking_filter_location_select').select2().trigger('change');
        });
        $( "#homepage_booking_form" ).submit(function( event ) {
            event.preventDefault();
            if ($( "#home_booking_filter_location_select" ).val() == 0) {
                $( "#home_booking_filter_location_select" ).siblings(".select2-container").find(".select2-selection").css('border', '1px solid #FF0000');
                $( "#home_booking_filter_location_select" ).siblings(".select2-container").find(".select2-selection__rendered").css('color', '#FF0000');
            }
            else location.href = '/search/'+$('#home_booking_filter_location_select').val();
        });
    });
</script>
@stop
