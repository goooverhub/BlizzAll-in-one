var D3 = angular.module('D3', ['ngCookies']);
D3.controller('d3',['$cookies','$q', '$scope', '$location', '$http', function($cookies, $q, $scope, $location, $http){
	var call_url = 'https://us.api.battle.net/d3/profile/';
	var id = $cookies.get('battleid');
	var tag = encodeURIComponent($cookies.get('battletag'));

	call_url = call_url + tag;
	call_url = call_url + '/?locale=en_US&apikey='+'dk2gt3fz4qhwfk76kan6p8ueenynev8j';


	var getD3Info = function () {
		$http({
		  method: 'GET',
		  url: call_url
		}).success(function(res){
			$scope.data = res;
		});	
	}

	getD3Info();

	
}]);