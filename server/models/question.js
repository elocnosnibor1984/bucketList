var mongoose = require('mongoose');
var questionSchema = new mongoose.Schema({
    option1: String,
    option2: String,
    option3: String,
    option4: String,
    votes1: Number,
    votes2: Number,
    votes3: Number,
    votes4: Number,
    total: Number,
    created_at: {type:Date, default: Date()}
});

mongoose.model('Questionsdb', questionSchema);
// Validations
// MongooseSchema.path('color').required(true, 'Color cannot be blank');
// MongooseSchema.path('weight').required(true, 'Weight cannot be blank');
// MongooseSchema.path('name').required(true, 'Name cannot be blank');