app.controller('doctorCRUDcontroller', function($scope, $http, $state,$stateParams) {
    var newDoctorId = $stateParams.newDoctorId;
    console.log( 'in doctor crud controller',newDoctorId);
 $scope.newPatient = function() {
        console.log("adding newPatient");
        $scope.doctor.patientDetails.push({
            name: '',
            age: '',
            complaint: ''
        });
    }
if (newDoctorId != null) {
        $http.get('/newhospDetail/' + newDoctorId).
            then(function successCallback(response) {
            console.log('newhospdetails',newDoctorId);
            var data = response.data;      
             $scope.doctor = data.doctor;
        }),function errorCallback(error){
            var data = error.data;
            console.log("error" + data);
        }      
    } else {
             console.log('newhospdetails else',newDoctorId);
            $scope.doctor = {};
            $scope.doctor.patientDetails = [];
           }

    $scope.add_update=function(){
    var url = '/createDoctor';
    if (!!newDoctorId) {
    url = '/updateDoctor';}
    console.log("create doctor page");
    $http.post(url, $scope.doctor).
    then(function successcallback(response){
    var data=response.data;
    $scope.doctor=data;
    $scope.doctor={};
    console.log(data);
    $state.go('doctor');
    
}),
    function errorcallback(error){
    var data = error.data;
    console.log("error" + data);
};
}
    $scope.remove = function(index) {
    $scope.doctor.patientDetails.splice(index,1);
    }

    $scope.cancel = function() {
        $state.go('doctor');
    }
});