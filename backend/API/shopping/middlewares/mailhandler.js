/* eslint-disable camelcase */
/* eslint-disable max-len */
const nodemailer = require('nodemailer');

const mailHandler=async (req, res, next) => {
  const {customer_name, email,
    items_count, total}= req.body;
  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.outlook.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'thealphacom@outlook.com', // generated ethereal user
        pass: 'Alphawebsite', // generated ethereal password
      },
    });

    const date = new Date();

    // eslint-disable-next-line max-len
    const content = `Hi ${customer_name}, thank you for making an order with TheAlpa ${date}
    <table>
      <thead>
        <tr>
          <th> Number of items</th>
        </tr>
         <tr>
          <th> Total </th>
        </tr>
      </thead>
      <tbody>
      <tr>
        <td>${items_count}</td>
        <td> ${total} Ksh</td>
        </tr>
      </tbody>
    </table>
  `;

    const message = {
      from: 'thealphacom@outlook.com',
      to: email,
      subject: 'The Alpha clothings order!',
      html: content,
    };

    // message
    transporter.sendMail(message, (err, info) => {
      if (err) {
        console.log(err);
      }
    });
    next();
  } catch (error) {
    console.log('error', error);
  }
};

module.exports= mailHandler;
