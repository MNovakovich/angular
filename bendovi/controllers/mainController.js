angular.module("mainController",[])
.controller("mainCtrl", function($scope, db){
	
   $scope.bendovi = [];
   $scope.detaljiBend = [];

   db.getData().then(function (result){
       $scope.bendovi = result.data;
   }, function(error){
   	 console.log(error);
   })
	$scope.prikazi = function(bend){
		$scope.detaljiBend = bend;

	}
})