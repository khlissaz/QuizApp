var mongoose = require('mongoose');

var questionSchema=new mongoose.Schema({
    questionText: {
        type: String,
        trim: true,
        required: [true, 'Question text is a required field']
    },
    options:[
        {option1: {type:String}, 
         option2: {type:String},
         option3:{type:String},
         option4: {type:String}
    }
],
  
/*
    answer: {
        type: String,
        required: [true, 'Answer is a required field']
    },*/
    solution: {
        type: String,
        trim: true,
        required: true,
        default: ''
    },
    
    category: {
        type: String,
        trim: true,
        lowercase: true,
        required: [true, 'Question category is a required field']
    },
    difficultyLevel: {
        type: String,
        trim: true,
        enum: ['E', 'M', 'H'],
        required: [true, 'Difficulty level is a required field']
    },
    questionActive: {
        type: Number,
        default: 1
    }
},
  )

module.exports = mongoose.model('Question', questionSchema)