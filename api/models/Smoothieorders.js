var db = require('../dbConnection'); //reference of dbconnection.js
var Smoothieorders = {


    getAllSmoothieOrders: function(callback) {
        return db.query("Select * from Smoothies.smoothieOrders", callback);
    },


    addSmoothieOrder: function(Smoothieorder, callback) {
        console.log(" check model before insert" + Smoothieorder.idSmoothie, Smoothieorder.quantity)
     
                 /*OrderIDfromDb = db.query("select idOrder from smoothies.order order by idOrder desc limit 1", function (err, result) {
                    if (!err) {*/

                        qpq = db.query("Insert into Smoothies.smoothieOrders values (?, ?, ?, ?)", [0, Smoothieorder.idSmoothie, "(Select idOrder from Smoothies.order order by idOrder desc limit 1)", Smoothieorder.quantity], function (err, result) {
                            if (!err) {
                                console.log('Successfully added information.  + secondInsert');
                            } else {
                                console.log(result);
                                console.log('Was not able to add information to database.  +secondInsert');
                            }
                        });
                        console.log(qbq);
                        return qbq;
                    }
                };
                module.exports = Smoothieorders;

                //"(Select idOrder from Smoothies.order order by idOrder desc limit 1)"