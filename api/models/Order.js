var db = require('../dbConnection'); //reference of dbconnection.js
var Order = {

    //'CRUD
       addOrder: function(Order, callback) {
            console.log("check model order.iduser:  " + Order.idUser);
            qbq = db.query("Insert into Smoothies.order values(?,?,?)", [0, Order.idUser, Order.date], function(err, result) {
                if (!err) {
                    console.log('Successfully added information.');
                } else {
                    console.log(result);
                    console.log('Was not able to add information to database.');
                }
            });
            console.log("model order qbq" + qbq);
            return qbq;
        },

    /*getAllOrders: function (callback) {
        return db.query("Select * from smoothies.order", callback);
    },*/

    getLastOrderID: function (callback) {
        idOrder = db.query("Select idOrder from Smoothies.order order by idOrder desc limit 1", (callback));
    },

    /*getLastOrderId: function (callback) {
        return db.query("select idOrder from Smoothies.order order by idOrder desc limit 1", callback);
    },
*/
};
module.exports = Order;