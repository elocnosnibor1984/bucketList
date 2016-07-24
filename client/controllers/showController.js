myApp.controller('showController', function($scope, $routeParams, $location, pollFactory, bucketFactory){

	$scope.name = $routeParams.name;

	bucketFactory.getItemsDone($routeParams.name, function(data){
		console.log("getItems on showcontroller", $routeParams.name);
		$scope.itemsDone = data.data;
	})

	bucketFactory.getItemsNotDone($routeParams.name, function(data){
		console.log("getItems on showcontroller", $routeParams.name);
		$scope.itemsNotDone = data.data;
	})

	$scope.logout = function(data){
		pollFactory.logoutUser(function(data){
			console.log("user logged out");
			$location.path("/");
		})
	}
})