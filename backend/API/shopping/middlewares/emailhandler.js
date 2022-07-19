'use strict';
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'hotmail',
  auth: {
    user: 'thealphashop@outlook.com', // generated ethereal user
    pass: 'Mensecom1', // generated ethereal password
  },
});

// send mail with defined transport object
transporter.sendMail({
  from: 'thealphashop@outlook.com', // sender address
  to: 'jontejonhn@gmail.com', // list of receivers
  subject: 'Hello ✔', // Subject line
  text: 'Hello world?', // plain text body
  html: '<b>Hello world?</b>', // html body
});

