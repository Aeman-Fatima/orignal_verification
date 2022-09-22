const nodemailer = require('nodemailer');
const config = require('config.json');

async function sendEmail({ to, subject, html, from = config.emailFrom }) {
  const transporter = nodemailer.createTransport(config.smtpOptions);
  let info = await transporter.sendMail({ from, to, subject, html });
  console.log('Message sent: %s', info.messageId);
}

// async function main() {
//   let transporter = nodemailer.createTransport({
//     host: "smtp.googlemail.com", // Gmail Host
//     port: 465, // Port
//     secure: true, // this is true as port is 465
//     auth: {
//       user: "waqarali_1999@ucp.edu.pk", // username
//       pass: "mnbvcxzasdfghjkl", // password
//     },
//   });

//   // send mail with defined transport object
//   await transporter.sendMail({
//     from: '"info@onebyte', // sender address
//     to: "waqarasifali@gmail.com", // list of receivers
//     subject: "Welcome Email", // Subject line
//     //text: "Hello world?", // plain text body
//     html: "This email is sent through <b>GMAIL SMTP SERVER</b>", // html body
//   });
// }

// main().catch(console.error);
module.exports = sendEmail;
