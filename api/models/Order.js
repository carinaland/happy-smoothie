var db = require('../dbConnection'); //reference of dbconnection.js
var Order = {

    //'CRUD
    addOrder: function (Order, callback) {
        console.log("model" + Order)

       /* qbq = db.query("Insert into smoothies.order values (?, ?)", [0, 680], function (err, result) {
            if (!err) {
                console.log('Successfully added information.');

                OrderIDfromDb = db.query("select idOrder from smoothies.order order by idOrder desc limit 1", function (err, result) {
                    if (!err) {

                        secondInsert = db.query("Insert into smoothies.smoothieorder values (?, ?, ?)", [2, 60, OrderIDfromDb], function (err, result) {
                            if (!err) {
                                console.log('Successfully added information.');
                            } else {
                                console.log(result);
                                console.log('Was not able to add information to database.');
                            }
                        });
                        console.log(qbq);
                        return secondInsert;
                    }
                });
            } else {
                console.log(result);
                console.log('Was not able to add information to database.');
            }
        });
        console.log(qbq);
        return qbq;

        /* secondInsert = db.query("Insert into smoothies.smoothieorder values (?, ?, ?)", [2, 50, "select idOrder from smoothies.order order by idOrder desc limit 1"],  function(err, result) {   
             if (!err) {
                 console.log('Successfully added information.');
             } else {
                 console.log(result);
                 console.log('Was not able to add information to database.');
             }
         });
         console.log(qbq);
         return  secondInsert;*/

    },

    getAllOrders: function (callback) {
        return db.query("Select * from smoothies.order", callback);
    },

};
module.exports = Order;