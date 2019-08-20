app.controller('doctorController', function($scope, $state, $http,$stateParams) {
    console.log('in doctor controller page')
    
    $scope.addNew = function() {
        $state.go('doctorCRUD');
    }
    
    $scope.search=function(){
        console.log('search')
        $http.post('/search', $scope.doctor).
        then(function successCallback(response) {
    	var data=response.data;
        $scope.doctordata=data.doctor;
        console.log(data);
        console.log($scope.doctordata)
    },  function errorCallback(errresponse) {
            var data = errresponse.data;
            console.log('error' + data);
        });
    }
    $scope.search();
    $scope.remove = function(DoctorId) {
        if (confirm("Delete Detail") == true) {
                $http.get('removeDoctor/' + DoctorId).
                then(function successCallback(response) {
                    $scope.search();
                }, function errorCallback(errresponse) {
                    var data = errresponse.data;
                    console.log('Error' + data);
                });
            }  else {
                console.log("Delete Cancelled");
            } }
        $scope.Edit = function(doctorid) {
        console.log('Edit');

            $state.go('doctorCRUD', { newDoctorId: doctorid });
        console.log('doctor uid in doctor controller',doctoruid);
        }
        $scope.viewdetails=function(doctorid){
            $state.go('view', { newDoctorId: doctorid });
        }
        // ----------------------------------------------------------------------------
    //     $scope.list=function(){
    //     console.log('search')
    //     $http.post('/search', $scope.docdetails).
    //     then(function successCallback(response) {
    // var data=response.data;
    // $scope.doctordata=data.doctor;
    // console.log(data);
    // console.log($scope.doctordata)
    // }, function errorCallback(errresponse) {
    //         var data = errresponse.data;
    //         console.log('error' + data);

    //     });
    // }
   
});