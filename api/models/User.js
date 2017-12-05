var db = require('../dbConnection'); //reference of dbconnection.js
var User = {

    //CRUD
    getAllUsers: function(callback) {
        return db.query("Select * from user", callback);
    },
    getUserById: function(id, callback) {
        return db.query("select * from user where idUser=?", [id], callback);
    },


    getUserID: function(email, callback) {
        return db.query("select iduser from Smoothies.user where email =?", [email], callback);
    },

    addUser: function(User, callback) {
        console.log("check model order.iduser:  " + User.email);
        qbq = db.query("Insert into Smoothies.user values(?,?,?,?,?,?,?)", [0, User.name, User.email, User.street, User.city, User.county, User.eircode], function(err, result) {
            if (!err) {
                console.log('Successfully added information.');
            } else {
                console.log(result);
                console.log('Was not able to add information to database.');
            }
        });
        console.log(qbq);
        return qbq;
    },
   
    updateUser: function(User, Task, callback) {
        console.log("models: " + User.iduser)
        qbq =  db.query("update user set name=?, email = ?, street = ?, city=?, county=?, eircode=? where iduser=?", [User.name, User.email, User.street, User.city, User.county, User.eircode, User.iduser], function(err, result)
        {
                if (!err) {
                    console.log('Successfully added information.');
                } else {
                    console.log(result);
                    console.log('Was not able to add information to database.');
                }
            });
            console.log(qbq);
            return qbq;
        }  
    //some other Requests


    // ....
};
module.exports = User;

