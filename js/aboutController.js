// assigns another controller not used unless the router loads it
// router will it when the .when() is true.

navRoutes.controller('aboutController',function($scope){
	$scope.message = 'test about';
})