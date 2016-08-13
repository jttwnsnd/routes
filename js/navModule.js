// anguar routes are consider cross origin. is only supported for http, https, ftp. our protocol when we load a page is
// 'file:///'. this requires something with http, https, ftp etc to function.
// node.js is our answer! weith connect module and the serve-static module, we can use http://localhost:8000


// assign a variable to our angular module we need to include ngRoutes in our dependencies, otherwise Angular gets mad.
var navRoutes = angular.module('navRoutes', ['ngRoute', 'ngAnimate']);

// assign a controller to our name module
navRoutes.controller('navController', function($scope, $http){
	$scope.message = "I'm working!";
})

// attach a config to our module, especially the $routeProvider
// this service is available because of the ngRoute above
// has a when moths. watches url and fires when true
// it will set the template URL which will go into the ng-view
// as a last resort, we have an otherwise as a catch-all or else
navRoutes.config(function($routeProvider){
	$routeProvider.when('/contact',{
		templateUrl: 'templates/contact.html',
		controller: 'contactController'
	});
	$routeProvider.when('/locations',{
		templateUrl: 'templates/locations.html',
		controller: 'locationsController'
	});
	$routeProvider.when('/about',{
		templateUrl: 'templates/about.html',
		controller: 'aboutController'
	});
	
	
	$routeProvider.otherwise('/');
})