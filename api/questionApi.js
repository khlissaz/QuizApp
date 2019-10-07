var express= require('express');
var router=express.Router();
var Question=require('../models/questionModel');

router.post('/addQuestion',function(req,res){
    question=new Question(req.body);
    question.save(function(err,question){
        if(err){
            res.send(err);
        }
        res.send(question);
    
    });
});

router.get('/getAllQuestions',function(req,res){
    
    Question.find({},function(err,question){
        if(err){
            res.send(err);
        }
        res.send(question);
    
    });
});

router.get('/getCat',function(req,res){
    
    Question.find().distinct('category',function(err,question){
        if(err){
            res.send(err);
        }
        res.send(question);
    
    });
});

router.get('/getQuestion/:id',function(req,res){
    
    Question.findById({_id:req.params.id},function(err,question){
        if(err){
            res.send(err);
        }
        res.send(question);
    
    });
});

router.post('/supQuestion/:id', function(req,res){
    Question.findByIdAndDelete({_id:req.params.id},function(err, result){
        if(err){
            console.log(result);
            res.send(err) ;
        }
        res.send (result)
    });
    
   
});


router.post('/updateQuestion/:id', function(req,res){
    Question.findByIdAndUpdate(req.params.id,req.body,function(err, result){
        if(err){
            throw err;
        }
        res.send (result)
    });
    
   
});



router.post('/deleteQuestion/:id', function (req, res) {
    Question.findByIdAndDelete(req.params.id,function (err, result) {
        if (err) {
            throw err;
        }
        res.send(result);
    });


});


router.post('/sendAnswer/:id',function(req,res){
    Question.findByIdAndUpdate(req.params.id,req.body,function(err,result){
        if(err){
            throwerr;
        }res.send(result)
    })

});
module.exports = router;