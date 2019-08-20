var app=angular.module('MyApp',['ui.router']);
app.config(function($stateProvider){
    $stateProvider
    .state('doctor',{
        url:'/doctor',
        templateUrl:'/doctor.html',
        controller:'doctorController',

    })
    .state('doctorCRUD',{
        url:'/doctorCRUD',
        templateUrl:'/doctorCRUD.html',
        controller:'doctorCRUDcontroller',
        params: { newDoctorId: null }

    })  
    .state('view',{
        url:'/view',
        templateUrl:'/view.html',
        controller:'doctorCRUDcontroller',
        params: { newDoctorId: null }

    })   
});
app.config(['$qProvider', function ($qProvider) {
   $qProvider.errorOnUnhandledRejections(false);
}]);

app.controller('appController',function($scope,$state){
    $scope.Doctor_page=function(){
        $state.go('doctorCRUD');
    }
    $scope.Display=function(){
        $state.go('doctor');
    }
});