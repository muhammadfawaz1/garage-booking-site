import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type QuotePayload = {
  name: string;
  phone: string;
  email?: string;
  registration?: string;
  tyreSize?: string;
  service: string;
  preferredTime?: string;
  message?: string;
};

// --- Basic in-memory rate limiting ---
// Not perfect (resets on redeploy, per-instance only), but stops casual
// spam/bots hammering the endpoint. Good enough for a small business site.
const RATE_LIMIT_WINDOW_MS = 60_000; // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 3; // max 3 submissions per IP per minute
const requestLog = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (requestLog.get(ip) || []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS
  );
  timestamps.push(now);
  requestLog.set(ip, timestamps);
  return timestamps.length > RATE_LIMIT_MAX_REQUESTS;
}

// --- Helpers ---
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    // Rate limit by IP (best-effort; header may be absent depending on host)
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
      "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again in a minute." },
        { status: 429 }
      );
    }

    const data: QuotePayload = await request.json();

    if (!data.name?.trim() || !data.phone?.trim()) {
      return NextResponse.json(
        { error: "Name and phone are required." },
        { status: 400 }
      );
    }

    if (data.email && !EMAIL_REGEX.test(data.email.trim())) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // Cap field lengths to stop absurdly large payloads
    const clamp = (value: string | undefined, max: number) =>
      (value || "").toString().slice(0, max);

    const safe = {
      name: escapeHtml(clamp(data.name, 100)),
      phone: escapeHtml(clamp(data.phone, 30)),
      email: data.email ? escapeHtml(clamp(data.email, 100)) : "",
      registration: escapeHtml(clamp(data.registration, 20)),
      tyreSize: escapeHtml(clamp(data.tyreSize, 30)),
      service: escapeHtml(clamp(data.service, 100)),
      preferredTime: escapeHtml(clamp(data.preferredTime, 100)),
      message: escapeHtml(clamp(data.message, 1000)),
    };

    const fromAddress = process.env.QUOTE_FROM_EMAIL || "onboarding@resend.dev";
    const toAddress = process.env.QUOTE_TO_EMAIL;

    if (!toAddress) {
      console.error("QUOTE_TO_EMAIL is not set");
      return NextResponse.json(
        { error: "Something went wrong sending your quote. Please try WhatsApp instead." },
        { status: 500 }
      );
    }

    const detailRows = [
      ["Name", safe.name],
      ["Phone", safe.phone],
      ["Email", safe.email || "-"],
      ["Vehicle registration", safe.registration || "-"],
      ["Tyre size", safe.tyreSize || "-"],
      ["Service needed", safe.service],
      ["Preferred date/time", safe.preferredTime || "-"],
      ["Message", safe.message || "-"],
    ];

    const buildTable = () => `
      <table cellpadding="6" style="border-collapse:collapse">
        ${detailRows
          .map(
            ([label, value]) =>
              `<tr><td style="font-weight:bold;border:1px solid #ddd">${label}</td><td style="border:1px solid #ddd">${value}</td></tr>`
          )
          .join("")}
      </table>
    `;

    // Only pass replyTo if it's a validated, safe email — never raw user input
    const replyTo = data.email && EMAIL_REGEX.test(data.email.trim())
      ? data.email.trim()
      : undefined;

    await resend.emails.send({
      from: fromAddress,
      to: toAddress,
      subject: `New quote request from ${safe.name}`,
      html: `<h2>New tyre quote request</h2>${buildTable()}`,
      replyTo,
    });

    if (replyTo) {
      await resend.emails.send({
        from: fromAddress,
        to: replyTo,
        subject: "We've got your tyre quote request — GOGO TYRE",
        html: `
          <p>Hi ${safe.name},</p>
          <p>Thanks for reaching out to GOGO TYRE. We've received your quote request and will be in touch shortly.</p>
          <p>If it's urgent, WhatsApp or call us directly and we'll help right away.</p>
          <p>Here's a copy of what you sent us:</p>
          ${buildTable()}
          <p>— GOGO TYRE, Norwich</p>
        `,
      });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Quote email error:", error);
    return NextResponse.json(
      { error: "Something went wrong sending your quote. Please try WhatsApp instead." },
      { status: 500 }
    );
  }
}