var express = require('express');
var router = express.Router();

//include models
var Smoothie = require('../models/Smoothie');
var Comment = require('../models/Comment');

//Smoothies
router.get('/Smoothie/:id', function(req, res, next) {
    Smoothie.getSmoothieById(req.params.id, function(err, rows) {
         if (err) {
            res.json(err);
         } else {
            res.json(rows);
         }
    });
});

router.get('/Smoothies', function(req, res, next) {
    Smoothie.getAllSmoothies(function(err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});


//Comments
router.get('/Comments', function(req, res, next) {
    Comment.getAllComments(function(err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});

router.get('/Smoothie/:id/Comments', function(req, res, next) {
    Comment.getCommentsOfSmoothie(req.params.id, function(err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});

router.get('/Comment/:id', function(req, res, next) {
    Comment.getCommentById(req.params.id, function(err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});

router.post('/Comment/add', function(req, res, next) {
    console.log(req.body);
    console.log(Date.now);
    var comment = {
        'idUser': req.body.idUser,
        'idSmoothie': req.body.idSmoothie,
        'content': req.body.content,
        'date': Date.now,
        'rating': req.body.rating
    }
    Comment.addComment(comment, function(err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});

/*router.post('/send-post', (req, res, next) => {
    console.log(req.body);
var waste = new Waste(req.body);
waste.save(function(){
    res.json = (req.body);
});
});*/

module.exports = router;