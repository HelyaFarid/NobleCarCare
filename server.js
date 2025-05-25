const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 10000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Email sending route
app.post('/send-email', async (req, res) => {
    const { email, message } = req.body;

    if (!email || !message) {
        return res.status(400).send({ error: 'Email and message are required.' });
    }

    // Configure nodemailer
    const transporter = nodemailer.createTransport({
      host: 'smtp.ionos.com',
      port: 587,
      secure:false, // Use your email service (e.g., Gmail, Outlook)
        auth: {
          user: process.env.SMTP_USER ,
          pass: process.env.SMTP_PASS // Replace with your email password or app password
        }
    });

    const mailOptions = {
        from: 'info@noblecarcare.net', // Replace with your email
        to: 'info@noblecarcare.net', // Send to the provided email
        subject: 'Message from Noble Car Care',
        text: message
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send({ success: 'Email sent successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Failed to send email.' });
    }
});

// Start the server

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});







//console.log('hi')
//app.post('/', function(req, res) {
   // console.log('hi');
    //const output = `
    //  <p>You have a new contact request</p>
     // <h3>contact details</h3>
     // <ul>
      //  <li>Email: ${req.body.email}</li>
      //</ul>
     // <h3>Message</h3>
     // <p>${req.body.message}</p>
   // `;
  

    /*let transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'mail.domain.com',
      port: 465,
      tls: {
        rejectUnauthorized: false, //NOTE: you only need to set rejectUnauthorized to false if you are running on a local server, you can remove it after testing
      }
    });
  
    let mailOptions = {
      from: `nodemailer contact ${req.body.email}`,
      to: 'info@domain.com',
      subject: 'User Form Contact',
      html: output
    };
  
    transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
        return console.log(error);
      }
  
      console.log('Message sent: %s', info.messageId);
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  
      res.send({
        msg: 'Email has been sent!'
      });
    });*/
  //});