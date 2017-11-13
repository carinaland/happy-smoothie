var express = require('express');
var router = express.Router();

//include models
var Smoothie = require('../models/Smoothie');
var User = require('../models/User');
var Order = require('../models/Order');

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

//User
router.get('/User/:id', function(req, res, next) {
    User.getUserById(req.params.id, function(err, rows) {
         if (err) {
            res.json(err);
         } else {
            res.json(rows);
         }
    });
});

router.get('/User', function(req, res, next) {
    User.getAllUsers(function(err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});

router.put('/User/:id', function(req, res, next) {
    console.log(req.params);

    User.updateUser(req.params.id, function(err, rows) {
         if (err) {
            res.json(err);
         } else {
            res.json(rows);
         }
    });
});

//Order
router.post('/Order', function(req, res, next) {
    console.log(req.params);


    Order.addOrder(req.params.id, function(err, rows) {
        if (err) {
           res.json(err);
        } else {
           res.json(rows);
        }
   });
});


router.get('/Order', function(req, res, next) {
    Order.getAllOrders(function(err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});

module.exports = router;