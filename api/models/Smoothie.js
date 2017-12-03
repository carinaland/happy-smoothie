var db = require('../dbConnection'); //reference of dbconnection.js
var Smoothie = {

    //CRUD
    getAllSmoothies: function (callback) {
        return db.query("select * from smoothies", callback);
    },
    getSmoothieById: function (id, callback) {
        return db.query("select * from smoothies where idSmoothie=?", [id], callback);
    },

    addSmoothie: function (smoothies, callback) {
        console.log(smoothies);
        execQ = db.query("Insert into Smoothies.smoothies values(?,?,?,?,?,?)", [0, smoothies.name, smoothies.price, smoothies.description, 3, smoothies.imageUrl], function (err, result) {
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
    

    deleteSmoothie: function (id, callback) {
        qbq = db.query("delete from smoothies where idSmoothie=?", [idSmoothie], callback);
        //  return db.query("delete from smoothies where idSmoothie=5", [idSmoothie], callback);
        {
            if (!err) {
                console.log('Successfully deleted Smoothie.');
            } else {
                console.log(result);
                console.log('Was not able to delete Smoothie.');
            }
        };
        console.log(qbq);
        return qbq;
    },


    updateSmoothie: function (smoothies, Task, callback) {
        console.log(smoothies);
        console.log("ssssmm: " + smoothies.idSmoothie);
        qbq = db.query("update smoothies set name=? ,price=?, description=?, ImageUrl, where idSmoothie=?",
            [smoothies.name, smoothies.price, smoothies.description,
            smoothies.ImageUrl, smoothies.idSmoothie], callback);
        {
            if (!err) {
                console.log('Successfully updated Smoothie.');
            } else {
                console.log(result);
                console.log('Was not able to update Smoothie to database.');
            }
        };
        console.log(qbq);
        return qbq;
    },

    getSmoothieForCart: function (id, callback) {
        var id1 = id.split(',');
        return db.query("select  idSmoothie, name, price, imageUrl,  1 as quantity from smoothies where smoothies.idSmoothie in (?)", [id1], callback);
    }
    //some other Requests
    // ....
};
module.exports = Smoothie;