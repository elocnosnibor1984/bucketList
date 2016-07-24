var buckets = require('./../controllers/mongooses.js');

module.exports = function(app){
	app.post('/item', function(req, res){
		console.log("made it to app.post /item");
		buckets.addItem(req, res);
	})

	app.post('/item2', function(req, res){
		console.log("made it to app.post /item");
		buckets.addItem(req, res);
	})

	app.get('/items/:name', function(req, res){
		console.log("made it to app.post /item");
		buckets.getItems(req, res);
	})

	app.get('/itemsdone/:name', function(req, res){
		console.log("made it to app.post /item");
		buckets.getItemsDone(req, res);
	})

	app.post('/login', function(req, res){
		console.log("made it to app.get /login/:name");
		buckets.loginName(req, res);
	})

	app.get('/itemsnotdone/:name', function(req, res){
		console.log("made it to app.post /item");
		buckets.getItemsNotDone(req, res);
	})

	app.get('/names/:name', function(req, res){
		console.log("made it to app.get /names");
		buckets.getNames(req, res);
	})

	app.get('/done/:id', function(req, res){
		console.log("made it to app.get /done");
		buckets.done(req, res);
	})
}