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
    const { email, name, message } = req.body;

    if (!email || !message) {
        return res.status(400).send({ error: 'Email and message are required.' });
    }

    // Configure nodemailer
    const transporter = nodemailer.createTransport({
      host: 'smtp.ionos.com',
      port: 587,
      secure:false, 
        auth: {
          user: process.env.SMTP_USER ,
          pass: process.env.SMTP_PASS 
        }
    });

    const mailOptions = {
        from: 'info@noblecarcare.net', 
        to: 'info@noblecarcare.net',
        subject: 'Message from Noble Car Care',
        text: 'This message is from ' + name + '<br/>' + message
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




