const nodemailer = require('nodemailer');

const sendEmail = (crashType) => {
    // Create a transporter using SMTP or other transport options
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'pd2bikebox@gmail.com', // Include the full email address
        pass: 'ouwyxrvdmgsykwzt'
      }
    });
  
    // Define the email message
    const mailOptions = {
      from: 'pd2bikebox@gmail.com', // Include the full email address
      to: 'jc.desepeda@gmail.com', // Recipient Address
      subject: 'Crash Alert',
      text: `A ${crashType} crash has been detected.`
    };
  
    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log('Error:', error);
      } else {
        console.log('Email sent:', info.response);
      }
    });
  };
  
  module.exports = { sendEmail };
  