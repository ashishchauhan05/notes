<section id="promotions" class="col-padtop">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="bg-gray">
                    <h4 class="text-center" style='color:#FFF;'>Promotions and Specials</h4>
                    <div class="col-sm-12 col-lg-12">
                        <div id="myCarousel-1" class="carousel slide" data-ride="carousel">
                            <div class="carousel-inner" role="listbox">
                                {{-- */$i=1;/* --}}
                                @foreach ($promotions as $p)
                                    <div class="item @if($i==1) active @endif">
                                        <div class="img-right"><img src="/assets/site/images/promotions/{{$p->image}}" alt="{{$p->name}}" class="img-responsive"></div>
                                        <div class="gbg-white" style='padding:3%;'>
                                            <h4>{{$p->name}}</h4>
                                            {!! $p->description !!}
                                            <div style='float:left;'><p><strong>@if ($p->price_category=='fixed') Only @else Starts @endif @ <img src="/assets/site/images/rs.png" alt="Promotions" class="h12 w12"> {{$p->price}}/-@if($p->conditions_apply=='y')*@endif</strong></p></div><div style='float:right;'><button type="button" class="btn btn-primary btn-lg" href="/promotion/form/{{$p->id}}" data-toggle="modal" data-target="#promotionModal">Book</button></div>
                                        </div>
                                    </div>
                                    {{-- */$i++;/* --}}
                                @endforeach
                            </div>
                            <div class="carousel-control"> <a class="left" href="#myCarousel-1" role="button" data-slide="prev"></a> <a class="right" href="#myCarousel-1" role="button" data-slide="next"></a>  </div>
                        </div>
                    </div>
                    <div class="clearfix"></div>
                </div>
            </div>
        </div>
    </div>
</section>

<script>
    $('#promotionModal').on('hidden.bs.modal', function () {
        //$(this).removeData('bs.modal');
    });

    function showMe(){
        document.getElementById('main_container').style.display="block";
        $('#name').val('');
        $('#email').val('');
        $('#ContactNumber').val('');
    }
</script>
