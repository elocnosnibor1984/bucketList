var mongoose = require('mongoose');
var pollSchema = new mongoose.Schema({
    name: String,
    question: String,
    created_at: {type:Date, default: Date()}
});

mongoose.model('Pollsdb', pollSchema);
// Validations
// MongooseSchema.path('color').required(true, 'Color cannot be blank');
// MongooseSchema.path('weight').required(true, 'Weight cannot be blank');
// MongooseSchema.path('name').required(true, 'Name cannot be blank');