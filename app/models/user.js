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


    connect: function (req, res) {
        User.model.findOne(req.body, {
            userMdp: 0
        }, function (err, user) {
            if (err || !user)
                res.sendStatus(403);
            else {
                var token = jwt.sign({
                    _id: user._id,
                    isAdmin: user.isAdmin
                }, 'tokenSecret', {
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

    create: function (req, res) {
        User.model.create(req.body,
            function () {
                res.sendStatus(200);
            });
    },

    findAll: function (req, res) {
        User.model.find(function (err, data) {
            res.send(data);
        });
    },


    findById: function (id, cb) {
        User.model.findById(id, function (err, data) {
            console.log(data);
            cb(data);
        });
    },

    update: function (req, res) {
        User.model.findByIdAndUpdate(req.params.id, req.body, function (err) {
            if (err) {
                console.log(err);
                res.sendStatus(500)
            } else {
                res.sendStatus(200);
            }
        })
    },

    delete: function (req, res) {
        User.model.findByIdAndRemove(req.params.id, function () {
            res.sendStatus(200);
        })
    },

    lostpassword: function (req, res) {
        User.model.find({
            userEmail: req.params.email
        }, function (err, users) {

            var ListeCar = new Array("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9");

            var Password = '';

            for (i = 0; i < 6; i++) {

                Password = Password + ListeCar[Math.floor(Math.random() * ListeCar.length)];
            }

            var nodemailer = require('nodemailer');
            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.SMTP_USER,
                    pass: process.env.SMTP_PASS
                }
            });
            
            
            var mailOptions = {
                from: 'poleperche28@gmail.com',
                to: users[0].userEmail,
                subject: 'Mot de passe oublié !',
                html: 'Bonjour ' + users[0].userFirstname + ', <p>Vous avez tenté de vous connecter au site web du Pôle Perche en vain. Voici donc votre nouveau mot de passe : <strong>' + Password + '</strong>.</p> <p> Si vous rencontrez d`autres problèmes, vous pouvez contacter nos conseillers par téléphone au 02 37 29 09 29 ou par mail à l`adresse suivante : paysperche.sia@wanadoo.fr </p> <p> À bientôt !</p> <p>L\'équipe du <a href="perche-entreprendre.fr">Pôle Perche</a></p>'
            };
            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    return console.log(error);
                }
                console.log('Message sent: ' + info.response);
            });

            transporter.close();
            
            users[0].userMdp = Password;
            users[0].save();
            
            res.sendStatus(200);

        })
    }
}

module.exports = User;