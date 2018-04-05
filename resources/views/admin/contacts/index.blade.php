@extends('admin.app')

{{-- Web site Title --}}
@section('title') Contacts :: @parent @stop

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
    <h1>Contacts</h1>
    <ol class="breadcrumb">
        <li><a href="/admin"><i class="fa fa-dashboard"></i> Home</a></li>
        <li class="active">Contacts
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
                    <h3 class="box-title">Add Contact</h3>
                </div>
                <div class="box-body form-group">
                    <div class="row">
                        <input type="hidden" name="_token" value="{{{ csrf_token() }}}" ng-model="token" />
                        
                        <div id='voucher_code' class="col-xs-12 @{{errors.name ? 'has-error' : ''}}">
                             <label class="control-label">Name</label>
                            <input ng-model="name" type="text" class="form-control">
                            <label class="control-label" ng-if="errors.name">@{{errors.name[0]}}</label>
                        </div>

                        <div id='voucher_code' class="col-xs-12 @{{errors.email ? 'has-error' : ''}}">
                             <label class="control-label">Email</label>
                            <input ng-model="email" type="email" class="form-control">
                            <label class="control-label" ng-if="errors.email">@{{errors.email[0]}}</label>
                        </div>

                        <div id='voucher_code' class="col-xs-12 @{{errors.mobile ? 'has-error' : ''}}">
                             <label class="control-label">Mobile</label>
                            <input ng-model="mobile" type="text" class="form-control" >
                            <label class="control-label" ng-if="errors.mobile">@{{errors.mobile[0]}}</label>
                        </div>

                        <div id='voucher_code' class="col-xs-12 @{{errors.address ? 'has-error' : ''}}">
                             <label class="control-label">Address</label>
                            <input ng-model="address" type="text" class="form-control">
                            <label class="control-label" ng-if="errors.address">@{{errors.address[0]}}</label>
                        </div>

                        <div class="col-xs-12"> 
                            <div class="form-group">
                                <input ng-click="createContact()" type="button" name="submit" value="Save" class="form-control btn btn-primary">
                            </div>
                        </div>
                    </div>
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
    $scope.linkArray = '';
    $scope.error = null;
    $scope.createContact = function() {
         
        var data = $.param({
            name: $scope.name,
            address: $scope.address,
            mobile : $scope.mobile,
            email : $scope.email
        });

        var config = {
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
            }
        }

        $http.post('/api/contact/create', data, config)
        .success(function (data, status, headers, config) {
             $('.notify > .alert-success > .alert-msg').html('Contact succesfully saved!!');
              $('.notify > .alert-success').show();
              setTimeout(function(d){
               $('.notify > .alert-success').hide();
              }, 10000);

            $scope.errors = null;
        })
        .error(function (data, status, header, config) {
            if(status == 422) {
                $scope.errors = data;
            } else {
               $('.notify > .alert-danger > .alert-msg').html('Contact not saved!!');
               $('.notify > .alert-danger').show();
                setTimeout(function(d){
                   $('.notify > .alert-danger').hide();
                }, 10000);
            }
        });
    }

});

</script>

@endsection
