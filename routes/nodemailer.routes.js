module.exports = app => {

    const router = require("express").Router();
    const nodemailer = require('nodemailer');
    const config = require('../config/config.js');

    router.post("/send", (req, res) => {
        const output = `
            <p> You have new messages</p>
            <h3>Contact info</h3>
            <ul>
                <li> name: ${req.body.user_name} </li>
                <li> mail: ${req.body.user_mail} </li>
            </ul>
            <h3>Mail info</h3>
                <p> subject: ${req.body.user_subject} </p>
                <p> message: ${req.body.user_message} </p>
        `;

        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: config.smtp.user,
                pass: config.smtp.pass,
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        // setup mail data with unicode symbols
        let mailOptions = {
            from: `${req.body.user_name} <${req.body.user_mail}>`, // sender address
            to: "admin@pokeshop.tk", // list of receivers
            subject: `${req.body.user_subject}`, // Subject line
            text: `${req.body.user_message}`, // plain text body
            html: output, // html body
        };


        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            //console.log("Message sent: %s", info.messageId);
            //console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

            res.status(200).send("success");
        })
    });

    app.use('/api/contact', router);
};
