var TestControllers = angular.module('TestControllers', []);

TestControllers.controller('TestController', ['$q', '$scope', '$location', '$http', function ($q, $scope, $location, $http){
	$http({
	  method: 'GET',
	  url: '/api/authToken'
	}).success(function(res){
	  $scope.accessToken = res.data;
	});
}]);
