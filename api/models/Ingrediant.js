var db = require('../dbConnection'); //reference of dbconnection.js
var Ingrediant = {

    //CRUD
    getAllComments: function(callback) {
        return db.query("Select * from ingrediants", callback);
    },
    getIngrediantsOfSmoothie: function(smoothieId, callback) {
        return db.query("Select * from ingrediants left join smoothieIngrediants on ingrediants.idIngrediants = smoothieIngrediants.idIngrediant where smoothieIngrediants.idSmoothie=?", [smoothieId], callback);
    },
    getIngrediantById: function(id, callback) {
        return db.query("select * from ingrediants where idIngrediants=?", [id], callback);
    },
    /*addComment: function(Comment, callback) {
        qbq = db.query("Insert into comments values(?,?,?,?,?,?)", [0, Comment.idUser, Comment.idSmoothie, Comment.content, '0000-00-00 00:00:00', Comment.rating], function(err, result) {
            if (!err) {
            } else {
                console.log('Was not able to add information to database.');
            }
        });
        return qbq;
    },
    deleteComment: function(id, callback) {
        return db.query("delete from comments where idComment=?", [idComment], callback);
    }*/

    //some other Requests
    // ....
};
module.exports = Ingrediant;