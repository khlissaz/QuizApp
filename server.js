var express= require('express');
var bodyparser=require('body-parser');
var db=require('./database/db');
var app= express();
var cors = require('cors')

app.use(cors())
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
app.use('/users', require('./api/userApi'));
app.use('/questions', require('./api/questionApi'));
app.use('/tests', require('./api/testApi'));
app.use('/results', require('./api/resultApi'));
app.listen(3000,()=>{
     console.log('Express server is connected on port 3000!');
});
