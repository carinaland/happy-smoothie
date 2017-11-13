var User = require('../models/User');

//just for example
module.exports.doSomething = function(req, res, next) {
    if (req.params.id) {
        User.getUserById(req.params.id, function(err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    } else {
        User.getAllUsers(function(err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    }
}

//just for example
module.exports.update = function(req, res, next) {
    User.updateUser(req.params.id, function(err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
}