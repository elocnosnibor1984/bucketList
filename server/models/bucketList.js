var mongoose = require('mongoose');
var bucketListSchema = new mongoose.Schema({
    name: String,
    title: {type:String, required:true, minlength:5},
    description: {type:String, required:true, minlength:10},
    friend: String,
    done: Boolean
}, {timestamps:true});

mongoose.model('bucketListDb', bucketListSchema);
// Validations
// MongooseSchema.path('color').required(true, 'Color cannot be blank');
// MongooseSchema.path('weight').required(true, 'Weight cannot be blank');
// MongooseSchema.path('name').required(true, 'Name cannot be blank');