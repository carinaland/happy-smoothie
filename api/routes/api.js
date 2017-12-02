var express = require('express');
var router = express.Router();

//include models
var Smoothie = require('../models/Smoothie');
var Comment = require('../models/Comment');
var Ingrediant = require('../models/Ingrediant');
var User = require('../models/User');
var Order = require('../models/Order');

// Smoothie by id
router.get('/Smoothie/:id', function(req, res, next) {
    Smoothie.getSmoothieById(req.params.id, function(err, rows) {
         if (err) {
            res.json(err);
         } else {
            res.json(rows);
         }
    });
});

router.get('/Cart/:id', function(req, res, next) {
    Smoothie.getSmoothieForCart(req.params.id, function(err, rows) {
         if (err) {
            res.json(err);
         } else {
            res.json(rows);
         }
    });
});

router.get('/Smoothies', function(req, res, next) {
    Smoothie.getAllSmoothies(function(err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});

//delete
router.post('/Smoothies/delete', function(req, res, next) {
    console.log('try to delete');
    Smoothie.deleteSmoothie(req.params.id, function(err, rows) {
         if (err) {
            res.json(err);
         } else {
            res.json(rows);
         }
    });
});
//smoothie add
router.post('/Smoothies/Add', function(req, res, next) {
    var smoothie = {
        'idSmoothie': req.body.idSmoothie,
        'name': req.body.name,
        'price': req.body.price,
        'description': req.body.description,
        'imageUrl': req.body.imageUrl
      //  'averageRating':req.body.averageRating,
    }
    Smoothie.addSmoothie(smoothie, function(err, rows) {
        if (err) {
           res.json(err);
        } else {
           res.json(rows);
        }
   });
});

//update smoothie
router.put('/Smoothies/update', function(req, res, next) {
    Smoothie.updateSmoothie(function(err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});



//User
router.get('/User/:id', function(req, res, next) {
    User.getUserById(req.params.id, function(err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});

router.get('/User', function(req, res, next) {
    User.getAllUsers(function(err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});

router.put('/User/update', function(req, res, next) {
    User.updateUser(function(err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});


//Ingrediants
router.get('/Smoothie/:id/Ingrediants', function(req, res, next) {
    Ingrediant.getIngrediantsOfSmoothie(req.params.id, function(err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});


//Comments
router.get('/Comments', function(req, res, next) {
    Comment.getAllComments(function(err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});

router.get('/Smoothie/:id/Comments', function(req, res, next) {
    Comment.getCommentsOfSmoothie(req.params.id, function(err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});

router.get('/Comment/:id', function(req, res, next) {
    Comment.getCommentById(req.params.id, function(err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});

router.post('/Comment/add', function(req, res, next) {
    var date = Date.now();
    console.log(date);
    var comment = {
        'idUser': req.body.idUser,
        'idSmoothie': req.body.idSmoothie,
        'content': req.body.content,
        'rating': req.body.rating,
        'date': date,
    }
    Comment.addComment(comment, function(err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});

//Order
router.post('/Order/add', function(req, res, next) {
    var order = {
        'idUser': req.body.idUser,
        'idSmoothie': req.body.idSmoothie
    }
    Order.addOrder(order, function(err, rows) {
        if (err) {
           res.json(err);
        } else {
           res.json(rows);
        }
   });
});



router.get('/Order', function(req, res, next) {
    Order.getAllOrders(function(err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});

module.exports = router;
