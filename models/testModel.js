var mongoose= require('mongoose');
var Schema= mongoose.Schema;
 var testSchema= new mongoose.Schema({
     name:{
        type: String,
        trim: true,
        uppercase :true,
        required: [true, 'Name is a required field']
     },
     description:{
        type: String,
        trim: true,
        required: [true, 'Description is a required field']
     },
    category: {
        type: String,
        trim: true,
        uppercase :true,
        required: [true, 'Category is a required field']
    },
    questions: [{type: Schema.Types.ObjectId, ref:'Question'}],
    dateTest : { type: Date, default: Date.now },
    difficultyLevel: {
        type: String,
        trim: true,
        enum: ['E', 'M', 'H'],
        required: [true, 'Difficulty level is a required field']
    },
        
 })

module.exports=mongoose.model('Test',testSchema);