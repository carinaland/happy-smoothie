var db = require('../dbConnection'); //reference of dbconnection.js
var User = {

    //CRUD
    getAllUsers: function(callback) {
        return db.query("Select * from user", callback);
    },
    getUserById: function(id, callback) {
        return db.query("select * from user where idUser=?", [id], callback);
    },
   
    /*updateUser: function(id, Task, callback) {
        console.log("user model przed query" + id)
        return db.query("update user set name=? where idUser=?", [ala, , 1], callback);
    }*/
    //some other Requests


    // ....
};
module.exports = User;

