import nodemailer from "nodemailer";
import { validateContactMessage } from "@/lib/contact-validation";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const result = validateContactMessage(body);
  if (!result.success) {
    return Response.json({ error: result.error }, { status: 400 });
  }

  const { SMTP_SENDER_EMAIL, SMTP_RECEIVER_EMAIL, SMTP_PASSWORD } = process.env;
  if (!SMTP_SENDER_EMAIL || !SMTP_RECEIVER_EMAIL || !SMTP_PASSWORD) {
    return Response.json({ error: "The contact form is temporarily unavailable. Please try again later." }, { status: 503 });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: SMTP_SENDER_EMAIL, pass: SMTP_PASSWORD },
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 20000,
    });

    const { name, email, message } = result.data;
    const info = await transporter.sendMail({
      from: { name: "Portfolio contact form", address: SMTP_SENDER_EMAIL },
      to: SMTP_RECEIVER_EMAIL,
      replyTo: { name, address: email },
      subject: "New portfolio contact form submission",
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    if (!info.accepted.length || info.rejected.length) {
      throw new Error("Recipient not accepted");
    }
    return Response.json({ success: true });
  } catch {
    console.error("Contact email delivery failed.");
    return Response.json({ error: "Unable to send your message. Please try again later." }, { status: 502 });
  }
}
