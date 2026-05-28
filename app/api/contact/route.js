import nodemailer from "nodemailer";

export async function POST(request) {
  const { name, email, phone, service, budget, source, message } =
    await request.json();

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  const html = `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
      <h2 style="color:#FF5C00">New Contact Form Submission</h2>
      <table style="width:100%;border-collapse:collapse">
        <tr><td style="padding:8px 0;font-weight:bold;width:160px">Name</td><td>${name}</td></tr>
        <tr><td style="padding:8px 0;font-weight:bold">Email</td><td><a href="mailto:${email}">${email}</a></td></tr>
        <tr><td style="padding:8px 0;font-weight:bold">Phone / WhatsApp</td><td>${phone || "—"}</td></tr>
        <tr><td style="padding:8px 0;font-weight:bold">Service</td><td>${service}</td></tr>
        <tr><td style="padding:8px 0;font-weight:bold">Budget</td><td>${budget || "—"}</td></tr>
        <tr><td style="padding:8px 0;font-weight:bold">How they found us</td><td>${source || "—"}</td></tr>
      </table>
      <h3 style="color:#FF5C00;margin-top:24px">Message</h3>
      <p style="white-space:pre-wrap;background:#f9f9f9;padding:16px;border-radius:8px">${message}</p>
      <hr style="margin-top:32px;border:none;border-top:1px solid #eee"/>
      <p style="font-size:12px;color:#999">Sent from the Devola Solutions contact form</p>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"Devola Solutions Contact" <${process.env.GMAIL_USER}>`,
      to: "devolasolutions@gmail.com",
      replyTo: email,
      subject: `New enquiry from ${name} — ${service}`,
      html,
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error("Email send error:", err);
    return Response.json({ success: false }, { status: 500 });
  }
}
