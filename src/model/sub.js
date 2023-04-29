// const { check, validationResult } = require('express-validator');
// const nodemailer = require('nodemailer');
// const ejs = require('ejs');

// const transporter = nodemailer.createTransport({
//   host: process.env.EMAIL_HOST,
//   port: process.env.EMAIL_PORT,
//   auth: {
//     user: process.env.EMAIL_USERNAME,
//     pass: process.env.EMAIL_PASSWORD
//   }
// });

// app.post('/subscribe', [
//   check('email').isEmail().withMessage('Invalid email address')
// ], (req, res) => {
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.redirect('/');
//   }

//   const to = req.body.email;
//   const info = await Information.findById(1);
//   const products = await ProductVariant.find().limit(3);
//   ejs.renderFile('subscribe.ejs', { information: info, products: products }, (err, html) => {
//     if (err) {
//       console.log(err);
//       return res.redirect('/');
//     }

//     transporter.sendMail({
//       from: process.env.EMAIL_FROM,
//       to: to,
//       subject: 'Thank you for subscribing to our website.',
//       html: html,
//       text: 'Thank you for subscribing to our website.'
//     }).then(() => {
//       return res.redirect('/');
//     }).catch((err) => {
//       console.log(err);
//       return res.redirect('/');
//     });
//   });
// });
