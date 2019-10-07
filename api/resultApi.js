var express= require('express');
var router=express.Router();
var Result=require('../models/resultModel');
// Result API Routes (api/scores/)
router.post('/saveR', function(req, res) {

    // Create Result Object for Registration
    var newResult = new Result(req.body);
    console.log(newResult);
    // Register Result Object
    newResult.save( (err, result) => {
        if (err) {
            console.log(err);
            res.send({ success: false, msg: 'Score Registration Failed! ' + err })
            
        } else {
            console.log(err);
            res.send(result)
        }
    })

});
router.post('/save',function(req,res){
    result=new Result(req.body);
    console.log(result);
    result.save(function(err,reslt){
        if(err){
            console.log(err);
            res.send(err);

        }
        console.log(reslt);
        res.send(reslt);
    
    });
});


router.get('/high-scores', (req, res, next) => {

    // Get All Scores
    Result.find({}, function (err, items) {
        if (err) {
            console.log(err)
            res.json({ err: err })
        } else {
            res.json({ results: items })
        }
    })

})
router.get('/getAll',function(req,res){
    
    Result.find().populate('user').exec(function (err, result){
        if(err){
            throw err;
        }
        res.send (result)
    });
    
    });
        
    router.get('/getResultUser/:user', function (req, res) {
        
        Result.find({ user: req.params.user.id }).populate('users').exec(function (err, result) {
            if (err) {
                res.send(err);
            }
            console.log(result);
            res.send(result);
    
        });
    });


    
// Export this Module
module.exports = router
