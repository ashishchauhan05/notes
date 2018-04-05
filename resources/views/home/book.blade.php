@extends('app')
@section('title') Book Beauty Parlour Services in {{str_replace('Glam Studio','',$salon->name)}} | Ministry @stop
@section('meta_description') Facials, threading, waxing, rebonding, hair colouring, styling and more, {{$salon->name}} offer the best beauty services at the most affordable rates. @stop
@section('meta_keywords')
salons,salon,best salon,salons in {{$salon->city->name}},beauty services,beauty parlours,beauty parlors,hair salons,branded salon,beauty salons,budget salons,{{$salon->name}}
@stop

@section('content')

<div class="container breadcrumb-bar w100p bg-black">
    <div class="row display-table mar-0 c-white">
        <div class="col-lg-12 display-tablecell ver-align-m h40">
            <h1><span>
            @if ($home_services_salon->id != $salon->id)
                {{$salon->name}}, {{$salon->city->name}}
            @else
                Home Services
            @endif
            </span></h1>
        </div>
    </div>
</div>

<div class="container w100p booking_page">
    <div class="row">
        <div class="col-md-3 offset-md-5 pad-t15">
            <form method="post" id="gender_form">
            <button type="button" onclick="changeGender('f')" class="pointer btn btn-square pull-left
            @if($gender == 'f')
            btn-active
            @else
            btn-default
            @endif
            ">Female</button>
            <button type="button" onclick="changeGender('m')" class="pointer btn btn-square pull-left
            @if($salon->type != 'Unisex') disabled @endif
            @if($gender == 'm') btn-active
            @else btn-default @endif
            ">Male</button>

            <input type="hidden" name="_token" value="{{{ csrf_token() }}}" />
            <input type="hidden" name="filter_gender" id="filter_gender" value="{{$gender}}">
            </form>
        </div>
    </div>
</div>

    <div class="container max-w100p mar-t15">
        <div class="slider lazy tabs" data-tabs>
            @foreach($category_menu as $ck => $cv)
                <div>
                    <div class="image mar-r10">
                        <a data-tab="#tab{{$ck}}" href='#' class="category_tabs">
                            <img data-lazy="/assets/site/images/service_categories/{{$gender}}/{{$ck}}.jpg" alt="{{$cv["name"]}}" />
                            <h2 class="clear-default"><div class="category_name">{{$cv["name"]}}</div></h2>
                        </a>
                    </div>
                </div>
            @endforeach
        </div>
    </div>
	<script type="text/javascript" src="/assets/site/js/slick.js"></script>

    <script type="text/javascript">
        $(document).ready(function(){
            $('.lazy').slick({
                lazyLoad: 'ondemand',
                slidesToShow: 5,
                slidesToScroll: 1
            });
        });
    </script>

    <div class="container max-w100p">
        <div class="row">
            <div class="col-lg-6" style='margin-top:-8px;'>
                @foreach($category_menu as $ck => $cv)
                    <div id="tab{{$ck}}" @if($ck==1) data-tabs-default @endif data-tab-content class="service_tab">
                        <div class="accordion">
                            @if(isset($cv['sub_category']))
                                @foreach($cv['sub_category'] as $sbk => $sub_cat)
                                    <h3>{{$sub_cat['name']}}</h3>
                                    <div class="accordion-body">
                                        <table>
                                            <tbody>
                                                @if(isset($services_array[$ck][$sbk]) )
                                                    @foreach($services_array[$ck][$sbk] as $s)
                                                        @if(!isset($s['child']))
                                                            @if(isset($s['price']))
                                                                <tr>
                                                                    <td style="width: 75%">
                                                                        <span class='service-head'>{{$s['name']}}</span><br>
                                                                        <span class='service-body'>{{$s['description']}}</span>
                                                                    </td>
                                                                    <td>&#8377; {{$s['price']}}</td>
                                                                    <td class="{!! $s['id'] !!} cart-button-container"><i class="fa fa-cart-plus add-to-cart-button"  onclick="add_to_cart({{$s["id"]}}, '{!! addslashes($s['name']) !!}', '{!! addslashes($s['description']) !!}', '{!! addslashes($s['price']) !!}');"></i></td>
                                                                </tr>
                                                            @endif
                                                        @else
                                                             <tr>
                                                                <td class="td-service-name" colspan=3 >{{isset($s['name']) ?  $s['name'] : 'Services'}}</td>
                                                            </tr>
                                                                @foreach($s['child'] as $child)
                                                                    <tr>
                                                                    <td style="width: 75%">
                                                                        <span>{{$child['description']}} - {{$child['name']}}</span>
                                                                    </td>
                                                                    <td>&#8377; {{$child['price']}}</td>
                                                                    <td class="{!! $child['id'] !!} cart-button-container" onclick="add_to_cart({{$child["id"]}}, '{!! addslashes($child['name']) !!}', '{!! addslashes($child['description']) !!}', '{!! addslashes($child['price']) !!}');"><i class="fa fa-cart-plus add-to-cart-button"></i></td>
                                                                    </tr>
                                                                @endforeach
                                                            </tr>
                                                        @endif

                                                    @endforeach
                                                @endif
                                            </tbody>
                                        </table>
                                    </div>
                                @endforeach
                            @endif
                        </div><!--End Accordion-->
                    </div><!--End Tab-->
                @endforeach
            </div>
            <div class="col-lg-6" style=''>
                @if($home_services_salon->id == $salon->id)
                    <div class="w100p bg-white display-inline-b">
                        <div class="cart-heading"><i class="fa fa-cart-plus add-to-cart-button"></i>&nbsp;&nbsp;Services Selected</div>
                        <div id="cart-body">
                @elseif ($salon->type == 'Unisex')
                    <div class="w100p bg-white display-inline-b">
                        <div class="cart-heading"><i class="fa fa-cart-plus add-to-cart-button"></i>&nbsp;&nbsp;Services Selected</div>
                            <div id="cart-body">
                @else
                    <div class="w100p bg-white display-inline-b">
                        <div class="cart-heading"><i class="fa fa-cart-plus add-to-cart-button"></i>&nbsp;&nbsp;Services Selected</div>
                        <div id="cart-body">
                @endif
                            <table id="cart-table" class="table cart-table">
                                <tbody>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


@endsection

@section('scripts')

<!-- <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script> -->
<script src="/assets/site/js/jquery-ui-1.12.1.js"></script>

<script src="/assets/site/js/tabs.js" selector=".service_tab"></script>
<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
<script>
    function checkout(){
        @if($is_home_service == 0)
        var url = '/checkout/{{$salon_display_id}}/{{$salon->slug}}';
        @else
        var url = '/checkout/home_services'
        @endif

        window.location.href = url;
    }
    $(function() {
        //var icons = {
        //    header: "iconClosed",
        //    activeHeader: "iconOpen"
        //};

        //$('.accordion').accordion({
        //     icons: icons,
        //     heightStyle: "content"
        //});
        //$('.accordion input[type="checkbox"]').click(function (e) {
        //    e.stopPropagation();
        //});

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
        });
        $('.tabs a').tabs({
        });
    });

    function changeGender(gender) {

        if($('#filter_gender').val() == gender){
            return false;
        }
         if (typeof localStorage !== 'undefined' && localStorage.getItem('cart')) {
            try {
                swal("This will reset you cart items, do you want to continue?", {
                  buttons: {
                    cancel: "Cancel!",
                    catch: {
                      text: "Confirm",
                      value: true,
                    }
                  },
                })
                .then((value) => {
                   if(value) {
                    var c = {};
                    $('#filter_gender').val(gender);
                    localStorage.setItem('cart', JSON.stringify(c));
                    $("#gender_form").submit();
                   } else {
                   }
                });


            } catch(e) {}
        }else {

            $('#filter_gender').val(gender);
            $("#gender_form").submit();
        }
    }

    function cart_alert(){
        if (typeof localStorage !== 'undefined') {
            if(localStorage.getItem('cart_salon')==null) {
                localStorage.setItem('cart_salon',{{$salon_display_id}});
            } else if (localStorage.getItem('cart_salon') != '{{$salon_display_id}}' && localStorage.getItem('cart') !== null){
                // Route to a page
                document.location.href = "/cart_alert/"+localStorage.getItem('cart_salon')+"/{{$salon_display_id}}";
            } else {
                localStorage.setItem('cart_salon',{{$salon_display_id}});
            }
        }
    }

    $( function() {

        cart_alert();
        show_cart();

    });

    function add_to_cart(id, name, description, rates) {
        if (typeof localStorage !== 'undefined') {
            try {
                var cart;
                var item = {};
                item.id = id;
                item.name = name;
                item.description = description;
                item.rates = rates;
                if (localStorage.getItem('addedToCart') === null) {
                    localStorage.setItem('addedToCart', "true");
                    ga('send', {
                        'hitType': 'event', 'eventCategory': 'cart',
                        'eventAction': 'Added to Cart Once', 'eventLabel': 'Added To Cart',
                        'eventValue': 1, 'nonInteraction': false
                    });
                }
                if (localStorage.getItem('cart') === null) {
                    cart = {};
                    item.quantity = 1;
                    cart[id] = item;
                } else {
                    cart = JSON.parse(localStorage.getItem("cart"));
                    if (id in cart) {
                        cart[id]['quantity'] += 1;
                    } else {
                        item.quantity = 1;
                        cart[id] = item;
                        // fbq('track', 'AddToCart', {
                        //     value: rates,
                        //     currency: 'INR'
                        // });
                    }
                }
                cart[id]['total'] =  parseInt(cart[id]['quantity'])* parseInt(item.rates);
                localStorage.setItem('cart', JSON.stringify(cart));
                $("."+id+".cart-button-container").find("i").removeClass("fa fa-cart-plus").addClass("glyphicon glyphicon-ok");
                update_cart(id);
            } catch(e) {
                console.log(e);
            }
        }
    }

    function update_cart(id) {
        show_cart();
    }
    var total_cost = 0;
    services_rates = {!! json_encode($services_rates) !!};

    function show_cart() {
        update_cart_rates();
        var total_cost = 0;
        if (typeof localStorage !== 'undefined') {
            try {
                if (localStorage.getItem('cart') !== null) {
                    cart = JSON.parse(localStorage.getItem("cart"));
                    cart_size = 0;
                    $("#cart-body").html("<table id='cart-table' class='table table-striped'><tbody><tr id ='cart-header' style='display:none;'></tr></tbody></table><div class='pointer' onclick='checkout()'  style='width:100%;background-color:#000;text-align:center;margin-top:10px;padding:5px 0;color:#FFF;'>Proceed</div>");
                    for (var key in cart) {
                        cart_size += 1;
                        total_cost += parseInt(cart[key]['total']);
                        var row = "<tr id='cart-row_"+key+"'>";
                        row += "<td class='cart-td' style='width:70%;'><span class='name'>"+cart[key]['name']+"</span><br><span class='cart-service'>"+cart[key]['description']+"</span></td>";
                        row += '<td class="cart-td" style="width:20%;padding-top: 10px;padding-bottom:5px;" align=center><div class="quantity-wrapper"><span style="float:left;padding-top:4px;cursor:pointer" onclick="btnMinus('+key+')"><i class="fa fa-minus-circle" aria-hidden="true"></i></span><span class="quantity-container"><input class="quantity" type="text" value="'+cart[key]['quantity']+'" onchange="updateQuantity(this,'+key+')"></span><span style="float:left;padding-top:4px;cursor:pointer" onclick="btnPlus('+key+')"><i class="fa fa-plus-circle" aria-hidden="true"></i></span></div><div class="price">&#8377; '+cart[key]['total']+'</div></td>';
                        row += "<td class='cart-td' style='width:10%;vertical-align:middle;'><i class='fa fa-times' onclick = 'remove_cart_item("+key+");' style='cursor: pointer;color:#888;'></i></td></tr>"
                        $("#cart-table tr:last").after(row);
                        $("."+cart[key]['id']+".cart-button-container").find("i").removeClass("fa fa-cart-plus").addClass("glyphicon glyphicon-plus");
                    }
                    if (cart_size != 0)
                        $("#cart-table tr:last").after('<tr id="cart-total"><td class="td1"><span class="cart-total-time"><h4 style="color:#EC2790;font-size:35px;">Total Amount:</h4></td><td class="td2" colspan=2><span class="cart-total-amount" style="font-size:35px;">&#8377; ' + total_cost + '</span></h4></td></tr>');
                    else
                        $("#cart-body").html("<div style='color:#d9534f;padding:15px;text-align:center;'>Cart is empty</div>");
                } else {
                    $("#cart-body").html("<div style='color:#d9534f;padding:15px;text-align:center;'>Cart is empty</div>");
                }
            } catch(e) {}
        } else {
            $("#cart-body").html("Update your browser");
        }
    }
    function update_cart_rates() {
        if (typeof localStorage !== 'undefined') {
            try {
                if (localStorage.getItem('cart') !== null) {
                    cart = JSON.parse(localStorage.getItem("cart"));
                    for (var key in cart){
                        if (key in services_rates)
                            cart[key]['rates'] = services_rates[key];
                        else
                            delete (cart[key]);
                    }
                    localStorage.setItem('cart', JSON.stringify(cart));
                }
            } catch(e) {}
        } else {
            $("#cart-body").html("Update your browser");

        }
    }
    function btnMinus(id) {
        if (typeof localStorage !== 'undefined' && localStorage.getItem('cart') != null) {
            cart = JSON.parse(localStorage.getItem("cart"));
            if (id in cart) {
                cart[id]['quantity'] -= 1;
                if(cart[id]['quantity'] > 0) {
                    cart[id]['total'] =  parseInt(cart[id]['quantity'])* parseInt(cart[id]['rates']);
                    localStorage.setItem('cart', JSON.stringify(cart));
                    show_cart();
                }
            }
        }
    }
    function btnPlus(id) {
        if (typeof localStorage !== 'undefined' && localStorage.getItem('cart') != null) {
            cart = JSON.parse(localStorage.getItem("cart"));
            if (id in cart) {
                cart[id]['quantity'] += 1;
                cart[id]['total'] =  parseInt(cart[id]['quantity'])* parseInt(cart[id]['rates']);
                localStorage.setItem('cart', JSON.stringify(cart));
            }
            show_cart();
        }
    }
    function updateQuantity(th,id) {
        if (typeof localStorage !== 'undefined' && localStorage.getItem('cart') != null) {
            var quantity = $(th).val();
            cart = JSON.parse(localStorage.getItem("cart"));
            if (id in cart) {
                cart[id]['quantity'] = quantity;
                if(cart[id]['quantity'] > 0) {
                    cart[id]['total'] =  parseInt(cart[id]['quantity'])* parseInt(cart[id]['rates']);
                    localStorage.setItem('cart', JSON.stringify(cart));
                    show_cart();
                }
            }
        }
    }
    function remove_cart_item (id) {
        if (typeof localStorage !== 'undefined') {
            try {
                if (localStorage.getItem('cart') !== null) {
                    cart = JSON.parse(localStorage.getItem("cart"));
                    total_cost -= parseInt(cart[id]['rates']);
                    delete (cart[id]);
                }
                localStorage.setItem('cart', JSON.stringify(cart));
                $("."+id+".cart-button-container").find("i").removeClass("glyphicon glyphicon-ok").addClass("fa fa-cart-plus");
                update_cart(id);
            } catch(e) {}
        }
    }
</script>
@endsection

@section('styles')
    <style>
.ui-icon.iconOpen:after {
    content: '\203A';
    font-size: 32px;
    color: #FFF;
    float: right;
    margin-left: 5px;
    margin-right: 10px;
    margin-top: -7px;
    transform: rotate(90deg);
    -webkit-transform: rotate(90deg);
}
.ui-icon.iconClosed:after {
    content: "\203A";
    font-size: 32px;
    color: #FFF;
    float: right;
    margin-left: 5px;
    margin-right: 10px;
    margin-top: -9px;
}

#toggle {
    background: #000;
    color: #fff;

}

.accordion-body p {
    font-size: 18px;
}
</style>
@endsection
