 // MODEL CONTACT
 var mongoose = require('mongoose');
 var User = require('./user');
 var jwt = require('jsonwebtoken');

 var contactSchema = new mongoose.Schema({
     userId: String,
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
         User.findById(req.body.userId, function(elu) {

             elu = elu || {
                 userFirstname: '',
                 userName: '',
                 userEmail: ''
             };
             Contact.model.create(req.body, function(err, data) {
                 if (!err) {
                   var helper = require('sendgrid').mail;
                   var from_email = new helper.Email('entreprendre@poleperche28.fr');
                   var to_email = new helper.Email(data.contactEmail);
                   var subject = 'Demande d\'informations';
                   var content = new helper.Content('text/plain', 'Si vous êtes porteur de projet ou si vous souhaitez simplement vous installer dans la région, nous vous invitons à contacter nos conseillers en les appelant au 02 37 29 09 29 ou par mail à entreprendre@perche28.fr. À bientôt ! L\'équipe du Pôle Perche');
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
                 } else {
                     console.log(err);
                 }
             });
             //var content = new helper.Content('text/plain', 'Bonjour ' + data.contactFirstname + ', <p>Vous avez récemment rencontré ' + elu.userFirstname + ' ' + elu.userName + ' ' + '('+ elu.userEmail +') du Pôle Perche. Si vous êtes porteur de projet ou si vous souhaitez simplement vous installer dans la région, nous vous invitons à contacter nos conseillers en les appelant au 02 37 29 09 29 ou par mail à entreprendre@perche28.fr</p> <p> À bientôt !</p> <p>L\'équipe du <a href="perche-entreprendre.fr">Pôle Perche</a></p>');
         });
     },

     findAll: function(req, res) {
         jwt.verify(req.headers.authorization, 'tokenSecret', function(err, decoded) {
             if (err)
                 return res.sendStatus(403);
             else {
                 Contact.model.find(function(err, data) {
                     res.send(data);
                 });
             }
         });

     },
     findList: function(req, res) {
         Contact.model.find({
             userId: req.params.id
         }, function(err, data) {
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
