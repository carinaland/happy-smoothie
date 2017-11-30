var express = require('express');
var router = express.Router();


//include controllers
var smoothieController = require('../controllers/smoothieController');
var userController = require('../controllers/userController');
var orderController = require('../controllers/orderController');

//Smoothies
router.get('/something/:id?', function(req, res, next) { smoothieController.doSomething(req, res, next); }); //just example

//create/add Smoothie
router.post('/something/:id?', function(req, res, next) { smoothieController.doSomething(req, res, next); }); //just example

//edit & update
router.put('/something/:id?', function(req, res, next) { smoothieController.doSomething(req, res, next); }); //just example


module.exports = router;

//User
router.put('/something/:id?', function(req, res, next) { userController.doSomething(req, res, next); }); //just example

//Order
router.post('/something/:id?', function(req, res, next) { orderController.doSomething(req, res, next); }); //just example
router.get('/something/:id?', function(req, res, next) { orderController.doSomething(req, res, next); }); //just example

module.exports = router;
