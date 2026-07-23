/**
 * app/api/contact/route.ts
 *
 * Contact form API endpoint — uses Resend for email delivery.
 *
 * Required environment variable:
 *   RESEND_API_KEY  — obtained from https://resend.com/api-keys
 *
 * Set in Vercel:
 *   Project → Settings → Environment Variables → Add:
 *     Name:  RESEND_API_KEY
 *     Value: re_xxxxxxxxxxxxxxxxxxxx
 *     Environments: Production, Preview, Development
 */

import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

/* ── Rate limiter ──────────────────────────────────────────────────────────
   In-memory: 3 submissions per IP per 60 s.
   For multi-region deployments swap the Map for an Upstash Redis KV.
─────────────────────────────────────────────────────────────────────────── */
const WINDOW_MS = 60_000;
const MAX_REQUESTS = 3;
const ipMap = new Map<string, { count: number; windowStart: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = ipMap.get(ip);
  if (!entry || now - entry.windowStart > WINDOW_MS) {
    ipMap.set(ip, { count: 1, windowStart: now });
    return false;
  }
  if (entry.count >= MAX_REQUESTS) return true;
  entry.count++;
  return false;
}

/* ── Input sanitization ────────────────────────────────────────────────── */
function sanitize(value: unknown): string {
  if (typeof value !== "string") return "";
  return value.replace(/<[^>]*>/g, "").trim();
}

/* ── Validation ────────────────────────────────────────────────────────── */
interface ContactFields {
  name: string;
  email: string;
  phone: string;
  message: string;
}

type ValidationResult =
  | { ok: true; fields: ContactFields }
  | { ok: false; error: string; field?: string };

function validate(body: unknown): ValidationResult {
  if (!body || typeof body !== "object") {
    return { ok: false, error: "Invalid request body." };
  }

  const raw = body as Record<string, unknown>;
  const name    = sanitize(raw.name);
  const email   = sanitize(raw.email).toLowerCase();
  const phone   = sanitize(raw.phone);
  const message = sanitize(raw.message);

  if (name.length < 2 || name.length > 100)
    return { ok: false, error: "Please enter your full name (2–100 characters).", field: "name" };

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  if (!emailRe.test(email))
    return { ok: false, error: "Please enter a valid email address.", field: "email" };

  if (message.length < 10 || message.length > 5000)
    return { ok: false, error: "Please enter a message (10–5,000 characters).", field: "message" };

  return { ok: true, fields: { name, email, phone, message } };
}

/* ── HTML email template ───────────────────────────────────────────────── */
function buildHtml(fields: ContactFields, submittedAt: string): string {
  const esc = (s: string) =>
    s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  const rows: [string, string][] = [
    ["From",      esc(fields.name)],
    ["Email",     `<a href="mailto:${esc(fields.email)}" style="color:#095B67;text-decoration:none;">${esc(fields.email)}</a>`],
    ...(fields.phone ? [["Phone", `<a href="tel:${esc(fields.phone)}" style="color:#095B67;text-decoration:none;">${esc(fields.phone)}</a>`] as [string, string]] : []),
    ["Submitted", esc(submittedAt)],
  ];

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1.0" />
  <title>New Website Inquiry</title>
</head>
<body style="margin:0;padding:0;background:#f4f4f4;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;padding:32px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0"
             style="max-width:600px;width:100%;background:#fff;border-radius:4px;
                    overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.08);">

        <!-- Header -->
        <tr>
          <td style="background:#095B67;padding:28px 32px;">
            <h1 style="margin:0;color:#fff;font-size:20px;font-weight:700;letter-spacing:.5px;">
              Barcelona Constructions
            </h1>
            <p style="margin:6px 0 0;color:rgba(255,255,255,.8);font-size:13px;">
              New Website Inquiry
            </p>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:32px;">
            <h2 style="margin:0 0 24px;color:#111;font-size:18px;font-weight:600;">
              You have a new message from your website contact form.
            </h2>

            <!-- Details -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;border-collapse:collapse;">
              ${rows.map(([label, value]) => `
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #eee;width:110px;
                           vertical-align:top;font-size:12px;font-weight:700;
                           color:#888;text-transform:uppercase;letter-spacing:1px;">
                  ${label}
                </td>
                <td style="padding:10px 0;border-bottom:1px solid #eee;
                           vertical-align:top;font-size:15px;color:#111;">
                  ${value}
                </td>
              </tr>`).join("")}
            </table>

            <!-- Message -->
            <p style="margin:0 0 8px;font-size:12px;font-weight:700;color:#888;
                      text-transform:uppercase;letter-spacing:1px;">
              Message
            </p>
            <div style="background:#f8f8f8;border-left:3px solid #095B67;
                        padding:16px 20px;border-radius:0 3px 3px 0;">
              <p style="margin:0;font-size:15px;color:#333;line-height:1.75;
                        white-space:pre-wrap;">${esc(fields.message)}</p>
            </div>

            <!-- CTA -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:28px;">
              <tr>
                <td>
                  <a href="mailto:${esc(fields.email)}?subject=Re:%20Your%20Inquiry%20-%20Barcelona%20Constructions"
                     style="display:inline-block;background:#095B67;color:#fff;
                            font-size:14px;font-weight:700;text-decoration:none;
                            padding:12px 28px;border-radius:3px;letter-spacing:.5px;">
                    Reply to ${esc(fields.name)}
                  </a>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#f0f0f0;padding:16px 32px;border-top:1px solid #e0e0e0;">
            <p style="margin:0;font-size:12px;color:#999;line-height:1.6;">
              Sent from the contact form at
              <a href="https://barcelonaconstruction.com"
                 style="color:#095B67;text-decoration:none;">
                barcelonaconstruction.com
              </a>.
              Use the button above to reply directly to the sender.
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

/* ── Route handler ─────────────────────────────────────────────────────── */
export async function POST(req: NextRequest) {
  // 1. Rate limiting
  const forwarded = req.headers.get("x-forwarded-for");
  const ip = (forwarded ? forwarded.split(",")[0] : "unknown").trim();

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please wait a moment before trying again." },
      { status: 429 }
    );
  }

  // 2. Parse body
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // 3. Honeypot check (bots fill hidden field; real users leave it empty)
  if (
    typeof body === "object" &&
    body !== null &&
    typeof (body as Record<string, unknown>).website === "string" &&
    (body as Record<string, unknown>).website !== ""
  ) {
    return NextResponse.json({ success: true }, { status: 200 });
  }

  // 4. Validate
  const validation = validate(body);
  if (!validation.ok) {
    return NextResponse.json(
      { error: validation.error, field: validation.field },
      { status: 422 }
    );
  }

  const { fields } = validation;
  const now = new Date();
  const submittedAt =
    now.toLocaleDateString("en-CA", {
      timeZone: "America/Regina",
      year: "numeric",
      month: "long",
      day: "numeric",
    }) +
    " at " +
    now.toLocaleTimeString("en-CA", {
      timeZone: "America/Regina",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    }) +
    " CST (Saskatchewan)";

  // 5. Send via Resend
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[contact/route] RESEND_API_KEY is not set.");
    return NextResponse.json(
      { error: "Email service is not configured. Please contact us directly." },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    // TODO: Once barcelonaconstruction.com is verified in Resend, change to:
    //   from: "Barcelona Constructions <contact@barcelonaconstruction.com>",
    //   to:   ["contact@barcelonaconstruction.com"],
    //
    // Until then, Resend sandbox only allows sending FROM onboarding@resend.dev
    // and TO the email address registered on your Resend account.
    from: "Barcelona Constructions <onboarding@resend.dev>",
    to:   ["guptarajat234@gmail.com"], // ← your Resend account email (sandbox restriction)
    replyTo: `${fields.name} <${fields.email}>`,
    subject: `New Website Inquiry from ${fields.name}`,
    html: buildHtml(fields, submittedAt),
    text: [
      `New website inquiry from ${fields.name} <${fields.email}>`,
      fields.phone ? `Phone: ${fields.phone}` : "",
      `Submitted: ${submittedAt}`,
      "",
      fields.message,
    ].filter(Boolean).join("\n"),
  });

  if (error) {
    console.error("[contact/route] Resend error:", error);
    return NextResponse.json(
      { error: "We couldn't send your message. Please try calling or emailing us directly." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true }, { status: 200 });
}

export async function GET() {
  return NextResponse.json({ error: "Method not allowed." }, { status: 405 });
}
