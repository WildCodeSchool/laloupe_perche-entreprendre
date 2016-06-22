// MODEL USER
var jwt = require('jsonwebtoken');
var mongoose = require('mongoose');


var userSchema = new mongoose.Schema({
    userEmail: String,
    userMdp: String,
    userVille: String,
    userFunction: String,
    userNote: String,
    userEnterprise: String,
    userImg: String,
    userFirstname: String,
    userName: String,
    userPhone: String,
    isAdmin: {
        type: Boolean,
        default: false
    }
});

var User = {

    model: mongoose.model('User', userSchema),


    connect: function(req, res) {
            console.log(req.body)
            User.model.findOne(req.body, {
                password: 0,
                image: 0
            }, function(err, user) {
              console.log(user);
                if (err || !user)
                    res.sendStatus(403);
                else {
                    var token = jwt.sign(user, 'tokenSecret', {
                        expiresIn: 1440 // expires in 24 hours
                    });

                    // return the information including token as JSON
                    res.json({
                        success: true,
                        user: user,
                        token: token
                    });
                }
            });
        },

    create: function(req, res) {
        User.model.create(req.body,
            function() {
                res.sendStatus(200);
            });
    },

    findAll: function(req, res) {
        User.model.find(function(err, data) {
            res.send(data);
        });
    },


    findById: function(id, cb){
        User.model.findById(id, function(err, data) {
            console.log(data);
            cb(data);
        });
    },

    update: function(req, res) {
        User.model.findByIdAndUpdate(req.params.id, req.body, function(err) {
            if (err){
              console.log(err);
              res.sendStatus(500)
            } else {
              res.sendStatus(200);
            }
        })
    },

    delete: function(req, res) {
        User.model.findByIdAndRemove(req.params.id, function() {
            res.sendStatus(200);
        })
    }
}


module.exports = User;
