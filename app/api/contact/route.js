"use server";

import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const requiredEnvVars = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS"];

const missingEnv = requiredEnvVars.filter((key) => !process.env[key]);

const transporter =
    missingEnv.length === 0
        ? nodemailer.createTransport({
              host: process.env.SMTP_HOST,
              port: Number(process.env.SMTP_PORT),
              secure: process.env.SMTP_SECURE === "true",
              auth: {
                  user: process.env.SMTP_USER,
                  pass: process.env.SMTP_PASS,
              },
          })
        : null;

export async function POST(request) {
    const body = await request.json();
    const { firstName, lastName, email, phone, service, message } = body ?? {};

    if (!firstName || !email || !message) {
        return NextResponse.json(
            { ok: false, error: "First name, email, and message are required." },
            { status: 400 }
        );
    }

    if (missingEnv.length > 0 || !transporter) {
        console.warn(
            `Contact form submission skipped. Missing SMTP env vars: ${missingEnv.join(", ")}`
        );
        return NextResponse.json(
            {
                ok: false,
                error: "Email service is not configured. Please set SMTP environment variables.",
            },
            { status: 500 }
        );
    }

    try {
        await transporter.sendMail({
            from: process.env.SMTP_FROM || process.env.SMTP_USER,
            to: "panhwarnabinoo@gmail.com",
            subject: `New contact request from ${firstName} ${lastName ?? ""}`.trim(),
            replyTo: email,
            text: `New contact request:

Name: ${firstName} ${lastName ?? ""}
Email: ${email}
Phone / WhatsApp: ${phone ?? "N/A"}
Service Focus: ${service ?? "N/A"}

Message:
${message}
`,
        });

        return NextResponse.json({ ok: true });
    } catch (error) {
        console.error("Failed to send contact email", error);
        return NextResponse.json(
            {
                ok: false,
                error: "Something went wrong while sending your message. Please try again later.",
            },
            { status: 500 }
        );
    }
}
