import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
    try {
        const { name, email, phone, location, plan } = await req.json();

        // Check if SMTP configuration exists
        if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
            console.error("SMTP configuration missing");
            return NextResponse.json(
                { error: "Email service not configured properly" },
                { status: 500 }
            );
        }

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: parseInt(process.env.SMTP_PORT || "587"),
            secure: process.env.SMTP_SECURE === "true",
            auth: {
                user: process.env.SMTP_USER, // Fixed typo: SMPT_USER → SMTP_USER
                pass: process.env.SMTP_PASSWORD,
            },
            // Add this to debug connection issues
            debug: true,
            tls: {
                // Do not fail on invalid certs
                rejectUnauthorized: false
            }
        });

        // Verify connection configuration
        await transporter.verify().catch(err => {
            console.error("SMTP Verification Error:", err);
            throw new Error(`SMTP Verification Failed: ${err.message}`);
        });

        const mailOptions = {
            from: {
                name: "Go Delivery Booking Form",
                address: process.env.FROM_EMAIL || process.env.SMTP_USER // Fallback to SMTP_USER if FROM_EMAIL not set
            },
            to: process.env.TO_EMAIL,
            replyTo: email,
            subject: `New Scooter Booking: ${plan}`,
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
                <h2 style="color: #0284c7; margin-bottom: 25px; text-align: center; font-size: 24px; border-bottom: 2px solid #0284c7; padding-bottom: 10px;">New Scooter Booking Request</h2>
                <div style="margin: 25px 0; background: #f8fafc; padding: 20px; border-radius: 8px;">
                    <p style="margin: 12px 0;"><strong style="color: #0284c7;">Name:</strong> ${name}</p>
                    <p style="margin: 12px 0;"><strong style="color: #0284c7;">Email:</strong> ${email}</p>
                    <p style="margin: 12px 0;"><strong style="color: #0284c7;">Phone:</strong> +91 ${phone}</p>
                    <p style="margin: 12px 0;"><strong style="color: #0284c7;">Location:</strong> ${location}</p>
                    <p style="margin: 12px 0;"><strong style="color: #0284c7;">Selected Plan:</strong> ${plan}</p>
                </div>
                <div style="color: #666; font-size: 13px; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; text-align: center;">
                    <p style="margin: 5px 0;">This is an automated message from Go Delivery Booking Form.</p>
                    <p style="margin: 5px 0;">© ${new Date().getFullYear()} Go Delivery. All rights reserved.</p>
                </div>
            </div>
        </body>
        </html>
      `,
        };

        await transporter.sendMail(mailOptions);
        return NextResponse.json({ message: "Booking request sent successfully" }, { status: 200 });
    } catch (error) {
        console.error("Email error:", error);
        return NextResponse.json({
            error: "Failed to send booking request",
            details: process.env.NODE_ENV === "development" ? error.message : undefined
        }, { status: 500 });
    }
}
