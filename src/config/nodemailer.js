import nodemailer from 'nodemailer';

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

export const transporter = nodemailer.createTransport({
    service: 'outlook',
    auth: {
        user: email,
        pass,
    }
})

export const mailOption = {
    from: email,
    to: email,
}