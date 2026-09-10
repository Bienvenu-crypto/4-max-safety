import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export interface MailOptions {
  to?: string;
  subject: string;
  html: string;
}

export async function sendMail({ to, subject, html }: MailOptions) {
  const adminEmail = process.env.GMAIL_USER!;
  await transporter.sendMail({
    from: `"4 Max Safety" <${adminEmail}>`,
    to: to ?? adminEmail,
    subject,
    html,
  });
}
