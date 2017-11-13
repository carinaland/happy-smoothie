var Order = require('../models/Order');

//just for example
module.exports.addOrder = function(req, res, next) {
    console.log(req.params);
    Order.addOrder(req.params.id, function(err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
}


module.exports.getAllOrders = function(req, res, next) {
    Order.getAllOrders(req.params.id, function(err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
}
