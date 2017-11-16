var db = require('../dbConnection'); //reference of dbconnection.js
var Order = {

    //'CRUD
    addOrder: function(Order, callback) {
        return db.query("Insert into order values (?, ?)", [Order.idOrder, Order.idUser], callback);    
    }, 

    getAllOrders: function(callback) {
        return db.query("Select * from smoothies.order", callback);
    },

};
module.exports = Order;