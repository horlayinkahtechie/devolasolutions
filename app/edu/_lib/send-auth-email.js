import "server-only";
import { Resend } from "resend";

const FROM = "Devola Solutions Academy <noreply@devolasolutions.com>";

/* Transactional only — login links. Marketing email (campaigns,
   announcements) is a separate concern (Phase 2+ admin email tooling) and
   must go through its own sender + unsubscribe-aware path, never this one. */
export async function sendMagicLinkEmail({ to, name, link }) {
  if (!process.env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY is not set — cannot send the login email.");
  }
  const resend = new Resend(process.env.RESEND_API_KEY);

  const html = `
    <div style="font-family:sans-serif;max-width:480px;margin:0 auto">
      <h2 style="color:#FF5C00">Sign in to Devola Academy</h2>
      <p>Hi ${name || "there"},</p>
      <p>Click the button below to sign in. This link works once and expires shortly for your security.</p>
      <p style="margin:28px 0">
        <a href="${link}" style="background:#0f172a;color:#fff;padding:14px 28px;border-radius:999px;text-decoration:none;font-weight:bold;display:inline-block">
          Sign in to your courses
        </a>
      </p>
      <p style="font-size:12px;color:#999">If you didn't request this, you can safely ignore this email.</p>
    </div>
  `;

  const { error } = await resend.emails.send({
    from: FROM,
    to,
    subject: "Your Devola Academy sign-in link",
    html,
  });
  if (error) throw error;
}
