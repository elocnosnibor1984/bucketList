myApp.factory('pollFactory', function($http){

	// This is my dummyFactory. I usually add this into any project that 
	// I do. Just so that I can use it for reference as I add new Factories
	// below we have an example of how we would create a post request, as well 
	// as how we would create a get request. 
	var user = [];

	var polls = [];

	var factory = {};

	factory.loginUser = function(data, callback){
		user.push(data);
		console.log("login data: ", data);
		$http.post('/login',data).then(function(data){
			// mongooses = data.data;
			// callback(data.data);
		callback(console.log(user));
	})
	}

	factory.logoutUser = function(callback){
		user = [];
		callback();
	}

	factory.getUser = function(callback){
		console.log("user in getUser", user);
		callback(user);
	}

	factory.getDummies = function(callback){
		$http.get('/dummies').then(function(data){
			mongooses = data.data;
			callback(data.data);
		});
	}


	factory.addPoll = function(info, callback){
		$http.post('/polls', info).then(function(data){
			if(data.error){
				callback(data);
			} else {
				polls.push(data);
				callback(polls);
			}
		})
	}

	return factory;
})