import { Resend } from "resend";

const NOTIFY_EMAIL = "devolasolutions@gmail.com";

export async function POST(request) {
  const {
    name, email, phone, service, budget, source, message,
    websiteType, mobileAppType, typeOther,
  } = await request.json();

  const resolvedType = (val) =>
    val === "Other (please specify)"
      ? typeOther?.trim()
        ? `Other — ${typeOther.trim()}`
        : "Other"
      : val;

  const websiteTypeDisplay = websiteType ? resolvedType(websiteType) : null;
  const mobileAppTypeDisplay = mobileAppType ? resolvedType(mobileAppType) : null;

  const html = `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
      <h2 style="color:#FF5C00">New Contact Form Submission</h2>
      <table style="width:100%;border-collapse:collapse">
        <tr><td style="padding:8px 0;font-weight:bold;width:160px">Name</td><td>${name}</td></tr>
        <tr><td style="padding:8px 0;font-weight:bold">Email</td><td><a href="mailto:${email}">${email}</a></td></tr>
        <tr><td style="padding:8px 0;font-weight:bold">Phone / WhatsApp</td><td>${phone || "—"}</td></tr>
        <tr><td style="padding:8px 0;font-weight:bold">Service</td><td>${service}</td></tr>
        ${websiteTypeDisplay ? `<tr><td style="padding:8px 0;font-weight:bold">Website Type</td><td>${websiteTypeDisplay}</td></tr>` : ""}
        ${mobileAppTypeDisplay ? `<tr><td style="padding:8px 0;font-weight:bold">Mobile App Type</td><td>${mobileAppTypeDisplay}</td></tr>` : ""}
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
    if (!process.env.RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not set");
    }
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: "Devola Solutions Contact <contact@devolasolutions.com>",
      to: NOTIFY_EMAIL,
      replyTo: email,
      subject: `New enquiry from ${name} — ${service}`,
      html,
    });

    if (error) throw error;

    return Response.json({ success: true });
  } catch (err) {
    console.error("Email send error:", err);
    return Response.json({ success: false }, { status: 500 });
  }
}
