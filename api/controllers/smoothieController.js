
var Smoothie = require('../models/Smoothie');

//just for example
module.exports.doSomething = function(req, res, next) {
    if (req.params.id) {
        Smoothie.getSmoothieById(req.params.id, function(err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    } else {
        Smoothie.getAllSmoothies(function(err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    }
}

//just for example
module.exports.delete = function(req, res, next) {
    Smoothie.deleteSmoothie(req.params.id, function(err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
}
