var mongoose= require('mongoose');
mongoose.connect('mongodb://localhost:27017/quizDb',{ useNewUrlParser: true });
mongoose.set('useCreateIndex', true);