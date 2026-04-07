import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const host = process.env.CONTACT_EMAIL_HOST || "mail.sadatlaw.de";
const port = Number(process.env.CONTACT_EMAIL_PORT || 465);
const user = process.env.CONTACT_EMAIL_USER;
const pass = process.env.CONTACT_EMAIL_PASS;
const receiver = process.env.CONTACT_RECEIVER_EMAIL;

const transporter = nodemailer.createTransport({
  host,
  port,
  secure: port === 465,
  auth: {
    user,
    pass,
  },
  connectionTimeout: 10000,
  greetingTimeout: 10000,
  socketTimeout: 15000,
});

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: Request) {
  try {
    if (!user || !pass || !receiver) {
      console.error("Missing email environment variables");
      return NextResponse.json(
        { message: "Email configuration is incomplete." },
        { status: 500 }
      );
    }

    const body = await req.json();

    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const phone = String(body.phone || "").trim();
    const service = String(body.service || "").trim();
    const message = String(body.message || "").trim();

    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { message: "Please fill all required fields." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone || "-");
    const safeService = escapeHtml(service);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

    await transporter.sendMail({
      from: `"Sadat Legal Website" <${user}>`,
      to: receiver,
      replyTo: email,
      subject: `Appointment Request - ${name} (${service})`,
      text: `New Appointment Request

Name: ${name}
Email: ${email}
Phone: ${phone || "-"}
Service: ${service}

Message:
${message}`,
      html: `
        <div style="font-family: Arial, Helvetica, sans-serif; line-height: 1.6; color: #111;">
          <h2 style="margin-bottom: 16px;">New Appointment Request</h2>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Phone:</strong> ${safePhone}</p>
          <p><strong>Service:</strong> ${safeService}</p>
          <p><strong>Message:</strong></p>
          <p>${safeMessage}</p>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Email sent successfully.",
    });
  } catch (error) {
    console.error("EMAIL ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to send email. Please try again.",
      },
      { status: 500 }
    );
  }
}