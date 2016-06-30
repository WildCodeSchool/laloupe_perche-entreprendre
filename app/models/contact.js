 // MODEL CONTACT
var mongoose = require('mongoose');
var User = require('./user');
var jwt = require('jsonwebtoken');

var contactSchema = new mongoose.Schema({
    userId : String,
    contactEmail: String,
    contactMdp: String,
    contactVille: String,
    contactFunction: String,
    contactNote: String,
    contactEnterprise: String,
    contactFirstname: String,
    contactName: String,
    contactImg: String,
    contactPhone: String
});

var Contact = {

    model: mongoose.model('Contact', contactSchema),

    create: function(req, res) {

        User.findById(req.body.userId, function(elu){
            elu = elu || {userFirstname: '', userName:'', userEmail:''};
            Contact.model.create(req.body, function(err, data) {
              if (!err) {
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
                    to: data.contactEmail,
                    subject: 'Bienvenue dans le Perche !',
                    html: 'Bonjour ' + data.contactFirstname + ', <p>Vous avez récemment rencontré ' + elu.userFirstname + ' ' + elu.userName + ' ' + '('+ elu.userEmail +') du Pôle Perche. Si vous êtes porteur de projet ou si vous souhaitez simplement vous installer dans la région, nous vous invitons à contacter nos conseillers en les appelant au 02 37 29 09 29 ou par mail à paysperche.sia@wanadoo.fr</p> <p> À bientôt !</p> <p>L\'équipe du Pôle Perche</p>'
                };
                transporter.sendMail(mailOptions, function (error, info) {
                    if (error) {
                        return console.log(error);
                    }
                    console.log('Message sent: ' + info.response);
                });

                transporter.close();
                res.sendStatus(200);
              } else {
                console.log(err);
              }
            });
        });
    },


    findAll: function(req, res) {
        jwt.verify(req.headers.authorization, 'tokenSecret', function (err, decoded) {
            if (err)
                return res.sendStatus(403);
            else{
              Contact.model.find(function(err, data) {
                  res.send(data);
              });
            }
        });

    },
    findList: function(req, res) {
      console.log('friend list');
      console.log(req.params);
        Contact.model.find({userId: req.params.id},function(err, data) {
            res.send(data);
        });
    },

    update: function(req, res) {
        Contact.model.findByIdAndUpdate(req.params.id, req.body, function() {
            res.sendStatus(200);
        })
    },

    delete: function(req, res) {
        Contact.model.findByIdAndRemove(req.params.id, function() {
            res.sendStatus(200);
        })
    }
}


module.exports = Contact;
