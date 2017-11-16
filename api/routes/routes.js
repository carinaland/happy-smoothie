var express = require('express');
var router = express.Router();


//include controllers
var smoothieController = require('../controllers/smoothieController');

//Smoothies
router.get('/something/:id?', function(req, res, next) { smoothieController.doSomething(req, res, next); }); //just example

//create Smoothie
router.post('/something/:id?', function(req, res, next) { smoothieController.doSomething(req, res, next); }); //just example

module.exports = router;


/*

//smoothie list routes
aap.route('/smoothies')
    .get(smoothieController.list_all_smoothies)
    .post(smoothieController.create_a_smoothie)

aap.route('/smoothies/:smoothieId')
    .get(smoothieController.read_a_smoothie)
    .put(smoothieController.update_a_smoothie)
    .delete(smoothieController.delete_a_smoothie)

*/