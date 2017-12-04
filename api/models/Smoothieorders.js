var db = require('../dbConnection'); //reference of dbconnection.js
var Smoothieorders = {


    getAllSmoothieOrders: function (callback) {
        return db.query("Select * from Smoothies.smoothieOrders", callback);
    },

    addSmoothieOrder: function (Smoothieorder, callback) {
        console.log("model" + Smoothieorder.idOrder)
      
            qbq = db.query("Insert into Smoothies.smoothieOrders values (?, ?, ?, ?)", [0, Smoothieorder.idSmoothie, Smoothieorder.idOrder, Smoothieorder.quantity], function (err, result) {
                if (!err) {
                    console.log('Successfully added information.  + secondInsert');
                } else {
                    console.log(result);
                    console.log('Was not able to add information to database.  +secondInsert');
                }
            })
    }
};
module.exports = Smoothieorders;

                //"(Select idOrder from Smoothies.order order by idOrder desc limit 1)"