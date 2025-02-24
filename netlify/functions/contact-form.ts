import { Handler } from '@netlify/functions';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST')
    return {
      statusCode: 405,
      body: 'Method Not Allowed',
    };

  try {
    if (!event.body)
      return {
        statusCode: 400,
        body: 'Missing request body',
      };

    const { name, email, message } = JSON.parse(event.body) as ContactFormData;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === 'true', // true for port 465, false for 587 or others
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"Personal Website" <${process.env.SMTP_USER}>`, // sender address
      to: process.env.CONTACT_RECEIVER,
      subject: `Uh oh, somebody (${name}) used the contact form`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong><br>${message}</p>`,
    };

    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully.' }),
    };
  } catch (error: unknown) {
    console.error('Error sending email:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    return {
      statusCode: 500,
      body: JSON.stringify({ error: errorMessage }),
    };
  }
};
