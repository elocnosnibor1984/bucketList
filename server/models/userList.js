var mongoose = require('mongoose');
var userListSchema = new mongoose.Schema({
    name: {type:String, required:true, index: {unique:true}}
}, {timestamps:true});

mongoose.model('userListDb', userListSchema);
// Validations
// MongooseSchema.path('color').required(true, 'Color cannot be blank');
// MongooseSchema.path('weight').required(true, 'Weight cannot be blank');
// MongooseSchema.path('name').required(true, 'Name cannot be blank');