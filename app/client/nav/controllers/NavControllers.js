var NavControllers = angular.module('NavControllers', []);

NavControllers.controller('NavController', ['$q', '$scope', '$location', '$http', function ($q, $scope, $location, $http){
  $http({
    method: 'GET',
    url: '/api/nav'
  }).success(function(res){
    $scope.navs = res.data;
  });
  $scope.isActive = function(path){
    return $location.path() === path.substring(2, path.toString().length);
  }
}])
.directive('hpNav', function ($location) {
  return {
    templateUrl: '/nav/nav.ejs'
  }
});