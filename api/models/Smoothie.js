var db = require('../dbConnection'); //reference of dbconnection.js
var Smoothie = {

    //CRUD
    getAllSmoothies: function(callback) {
        return db.query("Select * from smoothies", callback);
    },
    getSmoothieById: function(id, callback) {
        return db.query("select * from smoothies where idSmoothie=?", [id], callback);
    },
    addSmoothie: function(Smoothie, callback) {
        console.log(Smoothie);
        execQ = db.query("Insert into smoothies values(?,?,?,?,?)", [Smoothie.idSmoothie, Smoothie.name, Smoothie.price, Smoothie.imageUrl, Smoothie.description], function(err, result) {
            if (!err) {
                console.log('Successfully added Smoothie.');
            } else {
                console.log(result);
                console.log('Was not able to add Smoothie to database.');
            }
        });
        console.log(execQ);
        return execQ;
    },
    deleteSmoothie: function(id, callback) {
        return db.query("delete from smoothies where idSmoothie=?", [idSmoothie], callback);
    },
    updateSmoothie: function(id, Task, callback) {
        return db.query("update smoothies set name=? ,price=?, description=?, averageRating=?, where idSmoothie=?", [Smoothie.name, Smoothie.price, Smoothie.description, Smoothie.averageRating, idSmoothie], callback);
    }



    //some other Requests
    // ....
};
module.exports = Smoothie;