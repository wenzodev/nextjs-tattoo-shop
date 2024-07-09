import nodemailer from 'nodemailer'

export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    }
})

export const mailOptions = (
    name: string,
    email: string,
    message: string
) => ({
    from: email,
    to: process.env.RECEIVER_EMAIL,
    subject: `Contact form submission from ${name}`,
    text: message,
    html: `
    <!DOCTYPE html>
    <html>
    <head>
        </head>
        <body>
            <h3>Contact Form Submission</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p class="message">${message}</p>
    </body>
    </html>
    `,
})