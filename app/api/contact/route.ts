import { NextResponse } from "next/server";
import { Resend } from "resend";
import ContactFormEmail from "@/app/emails/contact-form";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, phone, subject, message } = await req.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email and message are required" },
        { status: 400 }
      );
    }

    // Send email using Resend with our custom template
    const data = await resend.emails.send({
      from: "UI Logic Contact Form <onboarding@resend.dev>", // Update this with your verified domain
      to: process.env.CONTACT_EMAIL || "your-email@example.com",
      subject: `New Contact Form Submission: ${subject || "No Subject"}`,
      react: ContactFormEmail({
        name,
        email,
        phone,
        subject,
        message,
      }),
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
