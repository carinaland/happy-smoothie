var db = require('../dbConnection'); //reference of dbconnection.js
var User = {

    //CRUD
    getAllUsers: function(callback) {
        return db.query("Select * from user", callback);
    },
    getUserById: function(id, callback) {
        return db.query("select * from user where idUser=?", [id], callback);
    },
   
    //updateUser: function(id, Task, callback) {
        //return db.query("update user set name=? where idUser=?", [User.name, , idUser], callback);
   // }
    //some other Requests


    // ....
};
module.exports = User;

