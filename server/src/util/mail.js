const nodemailer = require("nodemailer");

exports.mailSend = async (subject,to,text,html) => {
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'mack.anderson90@ethereal.email',
            pass: 'x2WBZVGjZnKqPqhckb'
        }
    });
    const info = await transporter.sendMail({
        from: 'ProgressPulse <ProgressPulse@mail.com>', 
        to: to, 
        subject: subject, 
        text: text, 
        html: html, 
    });
    return info;
}