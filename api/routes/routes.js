var express = require('express');
var router = express.Router();

//include controllers
var smoothieController = require('../controllers/smoothieController');

//Smoothies
router.get('/something/:id?', function(req, res, next) { smoothieController.doSomething(req, res, next); }); //just example

module.exports = router;