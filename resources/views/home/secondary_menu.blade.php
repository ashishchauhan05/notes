
<header class="page-heading" ng-app="home" ng-controller="homeController">
   <div class="megadropdown  mdl-grid mdl-grid--no-spacing">
      <div class="mdl-cell mdl-cell--9-col">
         <ul class="megadropdown__list">
            @foreach($menu as $city_id => $m)
            <li class="megadropdown__linkTab mdl-typography--text-uppercase">
               <div>
                  <a href="/salons/{{str_replace(' ','-',strtolower($m['name']))}}/{{$city_id}}" class="megadropdown__mainItem ember-view">{{$m['name']}}</a>
               </div>
               <div class="megadropdown__box mdl-grid">
                 {{--*/ $count = 0 /*--}}
                 @foreach($m['salons'] as $salon)
                  @if($count == 0)
                  <div class="mdl-cell mdl-cell--12-col mdl-grid mdl-grid--no-spacing">
                  @endif

                     <div class="mdl-cell mdl-cell--4-col megadropdown__listItem" style='padding-bottom:10px;'>
                        <a href="/salon/{{$salon->display_id}}/{{$salon->slug}}">
                        <span class="js-md-location-link ember-view" url="">{{$salon->name}}</span></a>

                     </div>
                    @if($count == 2)
                    {{--*/ $count = 0; /*--}}
                     </div>
                   @else
                   {{--*/ $count++ /*--}}
                   @endif
                  @endforeach
               </div>
            </li>
            @endforeach
         </ul>
      </div>
      <!-- <div class="mdl-cell mdl-cell--3-col mdl-typography--text-right" style='text-align:right;padding-right:30px;'>
         <ul class="megadropdown__list">
            <li class="megadropdown__linkTab mdl-typography--text-uppercase">
            <a class="" href="/holiday-packages" style='font-size:16px;color:#ec268f !important;padding:0px 8px;'><i class="fa fa-handshake-o" aria-hidden="true"></i> Become a Frenchisee</a></li>
         </ul>
      </div> -->
   </div>
   <div class="container">
      <div class="display-inline-b pad-10">
         <h1 class="f25 w100p">India’s Fastest Growing Salon Chain</h1>
         <p class="f15 w100p pad-b10 c-white">50K Happy Customers | Brand in Your Budget | Genuine Products | Great Ambience</p>
         <div class="search-bar">
            <div class="searchbar_container">
               <div class="searchbar">
                  <form id='homepage_booking_form' action="/salons" method="POST">
                    <input type="hidden" name="_token" value="{{{ csrf_token() }}}" />
                    <input type="hidden" name="type" id="type" />
                    <input type="hidden" name="key" id="key" />
                     <div class="search_city pull-left w30p pad-r5">
                        {!! Form::select('home_booking_filter_city_select', $global_cities, $site_city->id, ['id'=>'home_booking_filter_city_select']) !!}
                     </div>
                     <div class="search_location pull-left w50p pad-r5">
                        


<div class="flex-shrink-1 search-box plr0i ml5 mr5">
<div id="keywords_container" class="col-s-16 pr0 active">
<div id="keywords_pretext">

<div class="k-pre-2 w100p display-inline-b">

<input id="keywords_input" class="discover-search w100p" placeholder="Start typing to search..." ng-model="keyword" autocomplete="off">
</div>
</div>
<!-- keywords dro down starts   -->
<div id="explore-keywords-dropdown" class="homepage ">
<div id="keywords-dd">
<ul id="keywords-by" role="listbox">
  <li class="label" ng-click="setValue('abcd','service',12)">Search by keyword</li>

   <li ng-repeat="data in searchData.services |filter:{'name':keyword} | limitTo:5" class="item" data-item_id="@{{data.id}}"  ng-click="setValue(data.name,'service',data.id)">
    <div class="start-step-label">
    <span><i class="fa fa-search"></i> @{{data.name}}</span>
    </div>
  </li> 
  <li ng-repeat="data in searchData.locations |filter:{'name':keyword} | limitTo:5" class="item" data-item_id="@{{data.id}}">
    <div class="start-step-label">
    <span ng-click="setValue(data.name,'location',data.id)" ><i class="fa fa-map-marker"></i> @{{data.name}}</span>
    </div>
  </li> 
  <li ng-repeat="data in searchData.salons |filter:{'name':keyword} | limitTo:5" class="item" data-item_id="@{{data.id}}">
    <div class="start-step-label"  ng-click="setValue(data.name,'salon',data.id)">
    <span><i class="fa fa-university"></i> @{{data.name}}</span>
    </div>
  </li>                                   

</ul>
</div>
<div class="keyword-search-start start-steps clearfix" style="display: block;">

<div class="popular-searches show">
<ul id="popular-results" data-entity-id="2" data-entity-type="zone">
<li class="label">Trending Searches</li>
<li class="item-row row">
 <span class="item" ng-repeat="data in topServices.female | limitTo:4"  ng-click="setValue(data.subcategory_name,'service',data.subcategory_id)">

    <div class="start-step-label">
    <span class="nowrap"> @{{data.subcategory_name}}</span>
    </div>
  </span>
</li> 

</ul>
</div>
<ul id="explore-by">
<li class="label">Suggested Searches</li>

<li ng-repeat="data in topLocations | limitTo:4" class="item" data-item_type="location" data-item_id="@{{data.id}}">
    <div class="start-step-label">
    <span ng-click="setValue(data.name,'location',data.id)" ><i class="fa fa-map-marker"></i> @{{data.name}}</span>
    </div>
  </li> 
  <li ng-repeat="data in topSalons | limitTo:4" class="item" data-item_type="salon" data-item_id="@{{data.id}}">
    <div class="start-step-label"  ng-click="setValue(data.name,'salon',data.id)">
    <span><i class="fa fa-university"></i> @{{data.name}}</span>
    </div>
  </li> 
</ul>
</div>
</div>
<!-- keywords dro down ends   -->
</div>
</div>


                     </div>
                     <div class="search_button pull-left">
                        <input type="submit" value="Search" class="confirm-submit pointer w100p h100p c-white">
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   </div>
</header>

<script type="text/javascript">
  $(document).ready(function() {
    
  
  
});//end

</script>