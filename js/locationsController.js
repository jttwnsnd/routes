// assigns another controller not used unless the router loads it
// router will it when the .when() is true.
navRoutes.controller('locationsController',function($scope){
	$scope.message = 'test locations';
})
	