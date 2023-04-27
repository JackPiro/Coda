const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
    // Set up a transporter with your email service configuration
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD,
        },
    });

    // Define email options
    const mailOptions = {
        from: process.env.EMAIL_FROM,
        to: options.email,
        subject: options.subject,
        text: options.message,
    };

    // Send the email
    await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;

/*
This code sets up a sendEmail function that uses 
the Nodemailer package to send emails. 
You'll need to customize the email service configuration 
(host, port, auth) based on the email service you're using. 
Make sure to also set the appropriate environment variables for your email 
service configuration in your 
.env file or other preferred method.
*/