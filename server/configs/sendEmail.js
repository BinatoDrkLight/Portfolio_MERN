import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

export const sendEmail = async (email, firstName, lastName, message) => {
  await transporter.sendMail({
    from: process.env.GMAIL_USER,
    to: process.env.GMAIL_USER,
    subject: `MERN portfolio message from ${email}`,
    text: `${email} \n\n ${message} \n\nBy ${firstName} ${lastName}`,
  });
};