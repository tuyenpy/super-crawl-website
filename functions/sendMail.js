const sgMail = require('@sendgrid/mail');
const { infoMail } = require('../configs/mail.config');

// async..await is not allowed in global scope, must use a wrapper
async function sendMail(title, content) {
  try {
    const date = new Date().toLocaleString('vi-VN', {
      timeZone: 'Asia/Ho_Chi_Minh',
    });
    sgMail.setApiKey(infoMail.SENDGRID_API_KEY);
    const msg = {
      to: infoMail.TO,
      from: infoMail.FROM,
      subject: `${title}`,
      text: `${content}`,
      html: `${content}`,
    };
    sgMail.send(msg);
    console.log('Send email successfully at', date);
  } catch (err) {
    console.log(err.message);
  }
}

module.exports = { sendMail };
