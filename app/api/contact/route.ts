import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// 🔒 جلوگیری از XSS
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
    // 🔑 چک API key
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { message: "Email service not configured." },
        { status: 500 }
      );
    }

    const body = await req.json();

    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const phone = String(body.phone || "").trim();
    const service = String(body.service || "").trim();
    const message = String(body.message || "").trim();

    // ❌ validation
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

    // 🔒 sanitize
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone || "-");
    const safeService = escapeHtml(service);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

    // 📧 ارسال ایمیل
    await resend.emails.send({
      from: "Sadat Legal <onboarding@resend.dev>", // موقت
      to: "info@sadatlaw.de",
      subject: `New Appointment Request - ${safeName}`,
      replyTo: safeEmail,
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
      message: "Email sent successfully ✅",
    });
  } catch (error: any) {
    console.error("RESEND ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: error?.message || "Failed to send email.",
      },
      { status: 500 }
    );
  }
}