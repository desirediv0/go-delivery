import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
    try {
        const { name, email, subject, message } = await req.json();

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: 587,
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            },
        });

        const mailOptions = {
            from: {
                name: "Go Delivery Contact Form",
                address: process.env.FROM_EMAIL
            },
            to: process.env.TO_EMAIL,
            replyTo: email,
            subject: `Contact Form Submission: ${subject}`,
            headers: {
                'X-Priority': '1',
                'X-MSMail-Priority': 'High',
                'Importance': 'high',
                'Content-Type': 'text/html; charset=utf-8'
            },
            html: `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width">
        </head>
        <body style="font-family: 'Segoe UI', Arial, sans-serif; padding: 20px; color: #333; background-color: #f5f5f5;">
            <div style="max-width: 600px; margin: 0 auto; background: #fff; border-radius: 10px; padding: 30px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                <div style="text-align: center; margin-bottom: 30px;">
                    <img src="https://godeliverygroup.com/logo.png" alt="Go Delivery Logo" style="width: 150px; height: auto;">
                </div>
                <h2 style="color: #0284c7; margin-bottom: 25px; text-align: center; font-size: 24px; border-bottom: 2px solid #0284c7; padding-bottom: 10px;">New Contact Form Submission</h2>
                <div style="margin: 25px 0; background: #f8fafc; padding: 20px; border-radius: 8px;">
                    <p style="margin: 12px 0;"><strong style="color: #0284c7;">Name:</strong> ${name}</p>
                    <p style="margin: 12px 0;"><strong style="color: #0284c7;">Email:</strong> ${email}</p>
                    <p style="margin: 12px 0;"><strong style="color: #0284c7;">Subject:</strong> ${subject}</p>
                    <p style="margin: 12px 0;"><strong style="color: #0284c7;">Message:</strong></p>
                    <p style="background: #ffffff; padding: 15px; border-radius: 5px; border-left: 4px solid #0284c7;">${message}</p>
                </div>
                <div style="color: #666; font-size: 13px; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; text-align: center;">
                    <p style="margin: 5px 0;">This is an automated message from Go Delivery Contact Form.</p>
                    <p style="margin: 5px 0;">© ${new Date().getFullYear()} Go Delivery. All rights reserved.</p>
                </div>
            </div>
        </body>
        </html>
      `,
        };

        await transporter.sendMail(mailOptions);
        return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
    } catch (error) {
        console.error("Email error:", error);
        return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }
}
