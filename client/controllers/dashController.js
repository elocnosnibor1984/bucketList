myApp.controller('dashController', function($scope, $location, pollFactory, bucketFactory){

	var user;

	var other;

	pollFactory.getUser(function(data){
		user = data;
		console.log("in getUser:", user);
		$scope.user = user[0].name;
	})

	$scope.logout = function(data){
		pollFactory.logoutUser(function(data){
			console.log("user logged out");
			$location.path("/");
		})
	}

	// $scope.user = "Cole";

	bucketFactory.getItems($scope.user, function(data){
		console.log("getItems on controller");
		$scope.items = data.data;
	})

	bucketFactory.getNames($scope.user, function(data){
		console.log("getNames on controller");
		$scope.names = data;
	})

	$scope.add = function(){
		console.log("got to add on dashController");
		$scope.item.name = $scope.user;
		$scope.item.done = false;
		if(!$scope.item.friend){
			$scope.item.friend = $scope.user;
		} else {
			console.log('FRIEND');
			var name = $scope.item.name;
			$scope.item.friend = $scope.item.friend.name;
			var friend = $scope.item.friend;
			other = {
				name: friend,
				title: $scope.item.title,
				description: $scope.item.description,
				friend: name,
				done: false
			}
		}
		console.log("other", other);
		bucketFactory.addItem2(other, function(data){
			console.log(data);
		})
		bucketFactory.addItem($scope.item, function(data){
			console.log(data);
			bucketFactory.getItems($scope.user, function(data){
			console.log("getItems on controller");
			$scope.items = data.data;
			$scope.item = {};
	})
		})
	}
	$scope.done = function(id){
		console.log('got to done!');
		bucketFactory.done(id, function(data){
			bucketFactory.getItems($scope.user, function(data){
			console.log("getItems on controller");
			$scope.items = data.data;
			$scope.item = {};
		})
		})
	}
// else {
// 			var name = $scope.item.name;
// 			var friend = $scope.item.friend;
// 			var other = {
// 				name: friend,
// 				title: $scope.item.title,
// 				description: $scope.item.description,
// 				friend: name,
// 				done: false
// 			};
// 			console.log("there was a friend!", other);
// 			bucketFactory.addItem(other, function(data){
// 			console.log(data);
// 			})
// 		}
	// var users = ["Cole", "Rozen", "Oscar", "Jimmy", "Jay"];
	// $scope.users = users;

	
})