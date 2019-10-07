var express = require('express');
var router = express.Router();
var Test = require('../models/testModel');


router.post('/addTest', function (req, res) {
    var test = new Test(req.body);
    console.log(test)
    test.save(function (err, test) {
        if (err) {
            res.send(err);
        }
        res.send(test);
    });
});
router.get('/getTest/:id', function (req, res) {

    Test.findById({ _id: req.params.id }, function (err, question) {
        if (err) {
            res.send(err);
        }
        res.send(question);

    });
});

router.get('/getTestCat/:category', function (req, res) {
    var category = "";
    category = req.params.category;
    if (req.params.category == 'csharp') {
        category = 'C#';
    }
    if (req.params.category == 'nodejs') {
        category = 'NODE JS';
    }




    Test.find({ category }).populate('questions').exec(function (err, result) {
        if (err) {
            res.send(err);
        }
        console.log(result)
        res.send(result);

    });
});

router.get('/getTestCategory/', function (req, res) {
    console.log(req.params.category);
    console.log(req.query);
    Test.find().distinct('category').populate('questions').exec(function (err, result) {
        if (err) {
            res.send(err);
        }
        console.log(result);
        res.send(result);

    });
});

router.get('/getQCM/:id', function (req, res) {

    Test.findOne({ id: req.params._id }).populate('questions').exec(function (err, result) {
        if (err) {
            throw err;

        } res.send(result);

    })


});


router.get('/getAllTests', function (req, res) {

    Test.find({}).populate('questions').exec(function (err, result) {
        if (err) {
            throw err;

        } res.send(result);

    })

});

router.post('/deleteTest/:id', function (req, res) {


    Test.findByIdAndDelete(req.params.id, function (err, test) {
        if (err) {
            res.send(err);
        }
        res.send(test);
    });
});



router.post('/updateTest/:id', function (req, res) {

    console.log(req.body)
    Test.findByIdAndUpdate(req.params.id, function (err, test) {
        if (err) {
            res.send(err)
        }
        res.send(test);
    });
});


router.post("/affect/:idTest/:idQuestion", function (req, res) {
    Test.findByIdAndUpdate(req.params.idTest, { $push: { questions: req.params.idQuestion } }, function (err, test) {
        if (err) {
            throw err;
        }
        res.send(test)
    });



})
router.post("/desaffect/:idTest/:idQuestion", function (req, res) {
    Test.findByIdAndUpdate(req.params.idTest, { $pull: { questions: req.params.idQuestion } }, function (err, test) {
        if (err) {
            throw err;
        }
        res.send(test)
    });

})

module.exports = router;