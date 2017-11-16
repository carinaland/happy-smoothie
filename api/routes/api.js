var express = require('express');
var router = express.Router();

//include models
var Smoothie = require('../models/Smoothie');

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

module.exports = router;


router.post('/Smoothies/add', function(req, res, next) {
    console.log(req.body);
    console.log(Date.now);
    var smoothie = {
        'idSmoothie': req.body.idSmoothie,
        'name': req.body.name,
        'price': req.body.price,
        'imageUrl': req.body.imageUrl,
        'description': req.body.imageUrl,
    }
    Comment.addSmoothie(smoothie, function(err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});