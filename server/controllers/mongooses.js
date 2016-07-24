var mongoose = require('mongoose');
var bucketDb = mongoose.model('bucketListDb');
var nameDb = mongoose.model('userListDb');

module.exports = (function() {
	return {
		addItem: function(req,res){
			item = new bucketDb(req.body);
			item.save(function(err, item){
				if(err){
					console.log(err);
					console.log('see above for error');
				} else {
					console.log("added item!");
					res.json(item);
				}
			})
		},

		loginName: function(req,res){
			name = new nameDb(req.body);
			name.save(function(err, item){
				if(err){
					console.log(err);
					console.log('see above for error');
					res.json(item);
				} else {
					console.log("added name!");
					res.json(item);
				}
			})
		},
		getItems: function(req, res){
			bucketDb.find({name: req.params.name}, function(err, mongooses){
				if(err){
					console.log(err);
					console.log('getmongooses function mongooses controller');
				} else {
					console.log("got items!", mongooses);
					res.json(mongooses);
				}
			})
		},

		getItemsDone: function(req, res){
			bucketDb.find({$and:[{name: req.params.name}, {done:true}]}, function(err, mongooses){
				if(err){
					console.log(err);
					console.log('getmongooses function mongooses controller');
				} else {
					console.log("got items!");
					res.json(mongooses);
				}
			})
		},

		getItemsNotDone: function(req, res){
			bucketDb.find({$and:[{name: req.params.name}, {done:false}]}, function(err, mongooses){
				if(err){
					console.log(err);
					console.log('getmongooses function mongooses controller');
				} else {
					console.log("got items!");
					res.json(mongooses);
				}
			})
		},

		getNames: function(req, res){
			nameDb.find({name:{$ne: req.params.name}}, function(err, mongooses){
				if(err){
					console.log(err);
					console.log('getmongooses function mongooses controller');
				} else {
					console.log("got names!");
					res.json(mongooses);
				}
			})
		},
		done: function(req, res){
			console.log("got to done on backend controller");
			bucketDb.findOne({_id: req.params.id}, function(err, bucket){
				if(err){
					console.log(err);
					console.log('getmongooses function mongooses controller');
				} else {
					console.log("bucket: ", bucket);
					bucket.done = true;
					bucket.save(function(err,data){
						if(err){
							console.log(err);
						} else {
							console.log("done updated successfully");
						}
					})
					
				}
			})
		}
	}
})();