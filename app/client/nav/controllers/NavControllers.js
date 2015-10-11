var NavControllers = angular.module('NavControllers', []);

NavControllers.controller('NavController', ['$q', '$scope', '$location', '$http', function ($q, $scope, $location, $http){
  $http({
    method: 'GET',
    url: '/api/nav'
  }).success(function(res){
    console.log(res.data);
    $scope.navs = res.data;
  });
  $scope.isActive = function(path){
    console.log($location.path());
    console.log(path.substring(2, path.toString().length));
    return $location.path() === path.substring(2, path.toString().length);
  }
}])
.directive('hpNav', function ($location) {
  return {
    templateUrl: '/nav/nav.ejs'
  }
});