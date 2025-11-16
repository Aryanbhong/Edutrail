

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
// const nodemailer = require("nodemailer");

// const mailSender = async (email, title, body) => {
//     try {
//         const transporter = nodemailer.createTransport({
//             host: "smtp.gmail.com",
//             port: 587,
//             secure: false,
//             auth: {
//                 user: process.env.MAIL_USER,
//                 pass: process.env.MAIL_PASS,
//             },
//             requireTLS: true,
//             connectionTimeout: 8000,
//             greetingTimeout: 8000,
//             socketTimeout: 8000,
//         });

//         // Check SMTP connection
//         await transporter.verify();

//         let info = await transporter.sendMail({
//             from: `"Edutrail" <${process.env.MAIL_USER}>`,
//             to: email,
//             subject: title,
//             html: body,
//         });

//         return info;
//     } catch (error) {
//         console.log("MAIL ERROR:", error);
//         throw error;
//     }
// };

// module.exports = mailSender; 



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

const axios = require("axios");

const mailSender = async (email, title, body) => {
    try {
        const response = await axios.post(
            "https://api.mailjet.com/v3.1/send",
            {
                Messages: [
                    {
                        From: {
                            Email: process.env.MJ_SENDER_EMAIL,
                            Name: "Edutrail | Aryan",
                        },
                        To: [
                            {
                                Email: email,
                            },
                        ],
                        Subject: title,
                        HTMLPart: body,
                    },
                ],
            },
            {
                auth: {
                    username: process.env.MJ_APIKEY_PUBLIC,  // Public Key
                    password: process.env.MJ_APIKEY_PRIVATE, // Private Key
                },
                timeout: 10000,
            }
        );

        console.log("MAIL SENT:", response.data.Messages[0].Status);
        return response.data;
    } catch (error) {
        console.error("MAIL ERROR:", error.response?.data || error.message);
        throw new Error("Failed to send email");
    }
};

module.exports = mailSender;
