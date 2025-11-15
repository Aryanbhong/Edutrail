

// const nodemailer = require('nodemailer');

// const mailSender = async (email, title, body) => {
//     try{
//             let transporter = nodemailer.createTransport({
//                 host:process.env.MAIL_HOST,
//                 auth:{
//                     user: process.env.MAIL_USER,
//                     pass: process.env.MAIL_PASS,
//                 }
//             })


//             let info = await transporter.sendMail({
//                 from: 'Edutrail || aryan ',
//                 to:`${email}`,
//                 subject: `${title}`,
//                 html: `${body}`,
//             })
//             console.log(info);
//             return info;
//     }
//     catch(error) {
//         console.log(error.message);
//     }
// }

// module.exports = mailSender;
const nodemailer = require("nodemailer");

const mailSender = async (email, title, body) => {
    try {
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
            requireTLS: true,
            connectionTimeout: 8000,
            greetingTimeout: 8000,
            socketTimeout: 8000,
        });

        // Check SMTP connection
        await transporter.verify();

        let info = await transporter.sendMail({
            from: `"Edutrail" <${process.env.MAIL_USER}>`,
            to: email,
            subject: title,
            html: body,
        });

        return info;
    } catch (error) {
        console.log("MAIL ERROR:", error);
        throw error;
    }
};

module.exports = mailSender;
