myApp.controller('indexController', function($scope, $location, pollFactory){
	// Here is where we are creating indexController. 
	// You have to make sure that our index controller matches the name 
	// that we pass in, in our router. 
	// So far the only variable that I'm injecting into this controller
	// is $scope.
	// pollFactory.logoutUser(function(data){
	// 	console.log("user logged out");
	// })

	$scope.login = function(){
		console.log("got to login");
		pollFactory.loginUser($scope.name, function(data){
			$location.path('/dash');
		})
	}


})