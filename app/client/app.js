var app = angular.module('app', ['ngRoute','NavControllers']);
app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
	$routeProvider.when('/#', {
		templateUrl: 'index.ejs'
	});

	$locationProvider.html5Mode(true);
}]);


// .when('/contact', {
// 		templateUrl: './templates/contact.ejs',
// 		controller: './contact/controllers/ContactController'
// 	}).when('/d3', {
// 		templateUrl: './templates/d3.ejs',
// 		controller: './d3/controllers/D3Controller'
// 	}).when('/starcraft', {
// 		templateUrl: './templates/starcraft.ejs',
// 		controller: './startcraft/controllers/SCController'
// 	})