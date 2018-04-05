@extends('admin/app')

{{-- Web site Title --}}
@section('title') Dashboard :: @parent @stop

@section('content')

@if (isset($status))
    <div class="pad margin no-print">
        <div class="alert alert-{{$status['code']}} alert-dismissible fade in" role="alert">
            <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>
            <h4><i class="icon fa fa-ban"></i> {{ $status['header'] }}</h4>
            <ul>
                @foreach ($status['messages'] as $m)
                    <li>{{$m}}</li>
                @endforeach
            </ul>
        </div>
    </div>
@endif

<section class="content">
    <div class="row">
        <div class="col-md-12">
          <!-- Widget: user widget style 1 -->
          <div class="box box-widget widget-user-2">
            <!-- Add the bg color to the header using any of the bg-* classes -->
            <div class="widget-user-header bg-green">
              <!-- /.widget-user-image -->
              <h2 class="widget-user-desc">Administration</h2>
              
            </div>
            <div class="box-footer no-padding">
              <ul class="nav nav-stacked">
                <li><a href="#">Projects <span class="pull-right badge bg-blue">31</span></a></li>
                <li><a href="#">Tasks <span class="pull-right badge bg-aqua">5</span></a></li>
                <li><a href="#">Completed Projects <span class="pull-right badge bg-green">12</span></a></li>
                <li><a href="#">Followers <span class="pull-right badge bg-red">842</span></a></li>
              </ul>
            </div>
          </div>
          <!-- /.widget-user -->
        </div>
        <!-- /.col -->
    </div>
    
</section>
@stop 

@section('styles')
    <link rel="stylesheet" href="/assets/site/css/plugins.css">

    <link href="/assets/plugins/select2/select2.min.css" type="text/css" rel="stylesheet" />
    <link href="/assets/plugins/bootstrap-datetimepicker-master/css/bootstrap-datetimepicker.css" rel="stylesheet">

    <style type="text/css">
        .checkbox{
        margin-top: 1px !important;
        margin-bottom: 1px !important;
    </style>

@endsection

@section('scripts')

<script type='text/javascript' src='/assets/plugins/ez-schedule-manager/js/moment.locales.min.js?ver=4.3.5'></script>
<script src="/assets/plugins/bootstrap-datetimepicker-master/js/bootstrap-datetimepicker.js"></script>

 <!-- <script src="/assets/site/js/jquery.datetimepicker.full.min.js"></script> -->
<script type="text/javascript" src="/assets/plugins/select2/select2.full.js"></script>


<script type="text/javascript">

</script>
@stop
