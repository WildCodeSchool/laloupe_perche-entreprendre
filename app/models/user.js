// MODEL USER
var jwt = require('jsonwebtoken');
var mongoose = require('mongoose');


var userSchema = new mongoose.Schema({
    userEmail: {
        type: String,
        required: true,
        unique: true
    },
    userMdp: {
        type: String,
        required: true
    },
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
        if (!req.body.userEmail || !req.body.userMdp) {
            res.status(404).send("User not found");
        } else {
            User.model.findOne(req.body, {
                userMdp: 0
            }, function(err, user) {
                if (err || !user)
                    res.sendStatus(403);
                else {
                    var token = jwt.sign({
                        _id: user._id,
                        isAdmin: user.isAdmin
                    }, 'tokenSecret', {
                        expiresIn: '2h' // expires in 24 hours
                    });

                    // return the information including token as JSON
                    res.json({
                        success: true,
                        user: user,
                        token: token
                    });
                }
            });
        }
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


    findById: function(id, cb) {
        User.model.findById(id, function(err, data) {
            cb(data);
        });
    },

    update: function(req, res) {
        User.model.findByIdAndUpdate(req.params.id, req.body, function(err) {
            if (err) {
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
    },

    lostpassword: function(req, res) {
        User.model.find({
            userEmail: req.params.email
        }, function(err, users) {

            var ListeCar = new Array("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9");

            var Password = '';

            for (i = 0; i < 6; i++) {

                Password = Password + ListeCar[Math.floor(Math.random() * ListeCar.length)];
            }

            var helper = require('sendgrid').mail;
            var from_email = new helper.Email('entreprendre@poleperche28.fr');
            var to_email = new helper.Email(users[0].userEmail);
            var subject = 'Mot de passe oublié';
            var content = new helper.Content('text/plain', 'Vous avez tenté de vous connecter au site web du Pôle Perche en vain. Voici donc votre nouveau mot de passe : ' + Password + '.Si vous rencontrez d`autres problèmes, vous pouvez contacter nos conseillers par téléphone au 02 37 29 09 29 ou par mail à l`adresse suivante : entreprendre@perche28.fr. À bientôt ! L\'équipe du Pôle Perche');
            var mail = new helper.Mail(from_email, subject, to_email, content);

            var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
            var request = sg.emptyRequest({
              method: 'POST',
              path: '/v3/mail/send',
              body: mail.toJSON(),
            });

            sg.API(request, function(error, response) {
              console.log(response.statusCode);
              console.log(response.body);
              console.log(response.headers);
            });


            users[0].userMdp = Password;
            users[0].save();

            res.sendStatus(200);

        })
    }
}

module.exports = User;
