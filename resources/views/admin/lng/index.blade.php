@extends('admin.app')

{{-- Web site Title --}}
@section('title') Scrape :: @parent @stop

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

<section class="content-header">
    <h1>Check Language</h1>
    <ol class="breadcrumb">
        <li><a href="/admin"><i class="fa fa-dashboard"></i> Home</a></li>
        <li class="active">Search
        </li>
    </ol>
    <br>
</section>
<!-- Main content -->
<section class="content" ng-app="app" ng-controller="appController">
      <div class="row">
        <div class="col-md-6">
            <div class="box box-primary">
                <div class="box-header with-border">
                    <h3 class="box-title">Check work language(English Only)</h3>
                </div>
                <div class="box-body form-group row">

                    <input type="hidden" name="_token" value="{{{ csrf_token() }}}" />
                    
                    <div id='voucher_code' class="col-xs-12">
                         <label for="voucher_code">Enter paragraph</label>
                         <textarea ng-model="txt" class="form-control"></textarea>
                        <label class="control-label" for="voucher_code"  id="voucher_code_error"></label>
                    </div>
                    <div class="col-xs-12"> 
                        <div class="form-group">
                            <input ng-click="checkLng()" type="button" name="submit" value="Check" class="form-control btn btn-primary">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="box box-primary " ng-if="language">
                <div class="box-body">
                    <h3 class="box-title">Language</h3>
                    <h4>@{{language}}</h4>
                </div>
               
            </div>
        </div>
    </div>
</section>
@endsection

@section('styles')
    <link href="/assets/admin/css/angular-confirm.css" rel="stylesheet" type="text/css" />
@endsection

{{-- Scripts --}}
@section('scripts')

<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.7/angular.min.js"></script>

<script type="text/javascript" src="/assets/admin/js/angular-confirm.js"></script>
<script>

var app = angular.module("app",['cp.ngConfirm']).controller('appController',function($scope,$http,$q,filterFilter,$ngConfirm){
    $scope.language = '';
    $scope.checkLng = function() {
        $http.get('/api/lng?txt='+$scope.txt).then(function(response){
            $scope.language = response.data;

        });
    }

});

</script>

@endsection
