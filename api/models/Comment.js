var db = require('../dbConnection'); //reference of dbconnection.js
var Comment = {

    //CRUD
    getAllComments: function(callback) {
        return db.query("Select * from comments", callback);
    },
    getCommentsOfSmoothie: function(smoothieId, callback) {
        return db.query("Select * from comments where idSmoothie=?", [smoothieId], callback);
    },
    getCommentById: function(id, callback) {
        return db.query("select * from comments where idComments=?", [id], callback);
    },
    addComment: function(Comment, callback) {
        console.log(Comment);
        qbq = db.query("Insert into comments values(?,?,?,?,?,?)", [0, Comment.idUser, Comment.idSmoothie, Comment.content, '0000-00-00 00:00:00', Comment.rating], function(err, result) {
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
    deleteComment: function(id, callback) {
        return db.query("delete from comments where idComment=?", [idComment], callback);
    }

    //some other Requests
    // ....
};
module.exports = Comment;