var db = require('../dbConnection'); //reference of dbconnection.js
var Smoothie = {

    //CRUD
    getAllSmoothies: function(callback) {
        return db.query("select smoothies.idSmoothie,  smoothies.name as smoothieName, price, imageUrl, smoothies.description, c.name as ingreName from smoothies left join smoothieIngrediants on smoothies.idSmoothie = smoothieIngrediants.idSmoothie left join Smoothies.ingrediants as c on smoothieIngrediants.idIngrediant = c.idIngrediants  ", callback);
    },
    getSmoothieById: function(id, callback) {
        return db.query("select * from smoothies where idSmoothie=?", [id], callback);
    },
    addSmoothie: function(smoothies, callback) {
        console.log(smoothies);
      execQ = db.query("Insert into Smoothies.smoothies (smoothies.idSmoothie,  smoothies.name, smoothies.price, smoothies.description, 0, smoothies.imageUrl)", function(err, result) {
    //   execQ = db.query("Insert into smoothies values(?,?,?,?,?,?)", [ 6, 'aaaaa', 2, 'sss', '', 1], function(err, result) {
            
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
    //  return db.query("delete from smoothies where idSmoothie=5", [idSmoothie], callback);
    },
    updateSmoothie: function(id, Task, callback) {
        return db.query("update smoothies set name=? ,price=?, description=?, ImageUrl, where idSmoothie=?", [smoothies.name, smoothies.price, smoothies.description, smoothies.ImageUrl, idSmoothie], callback);
    },
   
    getSmoothieForCart: function(id, callback) {
        var id1 = id.split(',');
        return db.query("select  idSmoothie, name, price, imageUrl,  1 as quantity from smoothies where smoothies.idSmoothie in (?)", [id1], callback);
    }

    //some other Requests
    // ....
};
module.exports = Smoothie;