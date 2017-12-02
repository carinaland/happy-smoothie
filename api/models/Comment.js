var db = require('../dbConnection'); //reference of dbconnection.js
var Comment = {

    //CRUD
    getAllComments: function(callback) {
        return db.query("Select * from comments", callback);
    },
    getCommentsOfSmoothie: function(smoothieId, callback) {
        return db.query("Select * from comments left join user on comments.idUser = user.iduser where idSmoothie=?", [smoothieId], callback);
    },
    getCommentById: function(id, callback) {
        return db.query("select * from comments where idComments=?", [id], callback);
    },
    addComment: function(Comment, callback) {
        qbq = db.query("Insert into comments values(?,?,?,?,?,?)", [0, Comment.idUser, Comment.idSmoothie, Comment.content, Comment.rating, Comment.date], function(err, result) {
            if (!err) {
            } else {
                console.log('Was not able to add information to database.');
            }
        });
        return qbq;
    },
    deleteComment: function(id, callback) {
        return db.query("delete from comments where idComment=?", [idComment], callback);
    }

    //some other Requests
    // ....
};
module.exports = Comment;