var NavControllers = angular.module('NavControllers', []);

NavControllers.controller('NavController', ['$q', '$scope', '$location', '$http', function ($q, $scope, $location, $http){
  var data = {};
  var authKey = '';
  $http({method: 'GET',
    url: '/api/authKey'
  }).success(function(res){
    authKey = res;
  });

  var postRequest = {
    method: 'post',
    url: 'https://us.battle.net/oauth/token',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Bearer: '+authKey
    },
    data: {
      redirect_uri : 'https://192.241.209.107:8443/auth/bnet/callback',
      scope: 'sc2.profile',
      grant_type: 'authorization_code',
      code : authKey,
      client_id : 'dk2gt3fz4qhwfk76kan6p8ueenynev8j',
      client_secret: 'ra3Xq77xWhnaGKBgK67q3hjNTF7hB6Mw'
    }
  }

  // $http(postRequest).then(function(req,res){
  //   console.log(req);
  //   console.log(res);
  // });

  $http(postRequest).success(function(req, res){
    console.log(req);
    console.log(re);
  });



  



  // $https.post('https://us.api.battle.net/oauth/token', data, function(req,res){
  //   console.log(req);
  // });

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