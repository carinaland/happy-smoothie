var express = require('express');
var router = express.Router();

//include models
var Smoothie = require('../models/Smoothie');
var Comment = require('../models/Comment');
var Ingrediant = require('../models/Ingrediant');
var User = require('../models/User');
var Order = require('../models/Order');
var Smoothieorders = require('../models/Smoothieorders');

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
            var arr = [];
            rows.forEach(function(element){
                Ingrediant.getIngrediantsOfSmoothie(element.idSmoothie, function(err, row) {
                    if (err) {
                        res.json(err);
                    } else {
                        element['ingrediants'] = row;
                        arr.push(element);
                         if(arr.length  === rows.length) {
                            res.json(arr);
                         }
                    }
                });
            })
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


//http://localhost:3100/api/Smoothies/delete
//delete
router.post('/Smoothies/delete/', function(req, res, next) {
    console.log('try to delete');
    Smoothie.deleteSmoothie(req.params.id, function(err, rows) { //issue here
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
        'imageUrl': req.body.imageUrl,
      'averageRating':req.body.averageRating,
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
router.put('/Smoothies/update/:id', function(req, res, next) {
    console.log('api Update Smoothie');
    console.log(req.body);
    var smoothie = {
       'idSmoothie': req.body.idSmoothie,
        'name': req.body.name,
        'price': req.body.price,
        'description': req.body.description,
        'imageUrl': req.body.imageUrl,
     // 'averageRating':req.body.averageRating,
    }     
        
    Smoothie.updateSmoothie(smoothie, function(err, rows) {
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
//get logged in user id
router.get('/User/GetId/:email', function(req, res, next) {
    console.log("api")
    
    console.log("checkGetId api" + req.params.email)

    User.getUserID(req.params.email, function(err, rows) {

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

router.post('/User/Add', function(req, res, next) {
    console.log("req.body" + req.body);
    var user = {
        'name': req.body.name,
        'email': req.body.email,
        'street': req.body.street,
        'city': req.body.city,
        'county': req.body.county,
        'eircode': req.body.eircode,
    }
    User.addUser(user, function(err, rows) {
        if (err) {
           res.json(err);
        } else {
           res.json(rows);
        }
   });
});

router.put('/User/Update/:id', function(req, res, next) {
    console.log('work');
    console.log("user api check");
    console.log(req.body);
    var user = {
        'iduser': req.body.iduser,
        'name': req.body.name,
        'email': req.body.email,
        'street': req.body.street,
        'city': req.body.city,
        'county': req.body.county,
        'eircode': req.body.eircode,
    }
    User.updateUser(user, function(err, rows) {
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
        console.log(rows);
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
    console.log("req.body" + req.body);
    var order = {
        'idUser': req.body.idUser,
        'date': req.body.date,
    }
    Order.addOrder(order, function(err, rows) {
        if (err) {
            console.log('first');
           res.json(err);
        } else {
            console.log('second');
           res.json(rows);
        }
   });
});


router.get('/Order', function(req, res, next) {
    Order.getLastOrderID(function(err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});


//SmoothieOrders - link table 
router.get('/SmoothieOrders', function(req, res, next) {
    Smoothieorders.getLastOrderID(function(err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});

//SmoothieOrders - link table 
router.post('/SmoothieOrders/add', function(req, res, next) {
    console.log("req.body" + req.body);
    var smoothieorder = {
        'idSmoothie': req.body.idSmoothie,
        'idOrder':req.body.idOrder,
        'quantity' : req.body.quantity
    }
    console.log("check api"  + smoothieorder.idSmoothie);
    console.log("check api"  + smoothieorder.idOrder);
    console.log("check api"  + smoothieorder.quantity);
    Smoothieorders.addSmoothieOrder(smoothieorder, function(err, rows) {
        if (err) {
           res.json(err);
        } else {
           res.json(rows);
        }
   });
});

module.exports = router;
