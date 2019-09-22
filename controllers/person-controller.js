var app = angular.module("kritiq", []);
app.controller('personController', function($scope) {
	$scope.firstName = "John";
	$scope.lastName = "Doe";
	$scope.fullName = function() {
		return $scope.firstName + " " + $scope.lastName;
	};
});