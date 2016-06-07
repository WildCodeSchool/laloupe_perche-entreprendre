// ROUTES USERS
var User = require('../models/user.js');
module.exports = function (app) {

    app.get('/users', User.findAll);
    app.post('/users', User.create);
    app.put('/users/:id', User.update);
    app.delete('/users/:id', User.delete);
    app.post('/toto', function (req, res) {
        var nodemailer = require('nodemailer');
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'sender@gmail.com',
                pass: 'password'
            }
        });
        var mailOptions = {
            from: req.body.sender,
            to: req.body.destination,
            subject: req.body.subject,
            text: req.body.message,
            html: '<b>' + req.body.message + '</b>'
        };
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: ' + info.response);
        });

        transporter.close();

    })
}