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

// --- Brand constants ---
// Update LOGO_URL to your actual hosted logo path once confirmed.
const LOGO_URL = "https://gogotyre.co.uk/images/logo.png";
const SITE_URL = "https://gogotyre.co.uk";
const BRAND = {
  graphite: "#0b0d10",
  panel: "#14171b",
  border: "#2a2e33",
  volt: "#c6ff3d",
  chrome: "#b7bcc3",
  white: "#ffffff",
};

function emailShell(opts: { preheader: string; bodyHtml: string }) {
  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>GOGO TYRE</title>
  </head>
  <body style="margin:0;padding:0;background-color:${BRAND.graphite};font-family:Arial,Helvetica,sans-serif;">
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;">${opts.preheader}</div>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:${BRAND.graphite};padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background-color:${BRAND.panel};border:1px solid ${BRAND.border};border-radius:12px;overflow:hidden;">
            <!-- Header -->
            <tr>
              <td style="padding:28px 32px 20px;border-bottom:1px solid ${BRAND.border};">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td>
                      <img src="${LOGO_URL}" alt="GOGO TYRE" height="28" style="display:block;border:0;" />
                    </td>
                    <td align="right" style="font-size:11px;font-weight:bold;letter-spacing:1px;color:${BRAND.volt};text-transform:uppercase;">
                      Norwich
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <!-- Body -->
            <tr>
              <td style="padding:32px;">
                ${opts.bodyHtml}
              </td>
            </tr>
            <!-- Footer -->
            <tr>
              <td style="padding:20px 32px;border-top:1px solid ${BRAND.border};">
                <p style="margin:0;font-size:12px;color:${BRAND.chrome};">
                  GOGO TYRE &middot; 14 Page Road, Norwich NR3 2BX &middot;
                  <a href="tel:01603123456" style="color:${BRAND.volt};text-decoration:none;">01603 123456</a>
                </p>
                <p style="margin:6px 0 0;font-size:11px;color:${BRAND.chrome};opacity:0.7;">
                  <a href="${SITE_URL}" style="color:${BRAND.chrome};text-decoration:underline;">gogotyre.co.uk</a>
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
  </html>
  `;
}

function detailsTable(rows: [string, string][]) {
  return `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;margin-top:8px;">
      ${rows
        .map(
          ([label, value], i) => `
        <tr>
          <td style="padding:10px 12px;font-size:13px;font-weight:bold;color:${BRAND.white};background-color:${
            i % 2 === 0 ? "rgba(255,255,255,0.04)" : "transparent"
          };border-bottom:1px solid ${BRAND.border};width:42%;">
            ${label}
          </td>
          <td style="padding:10px 12px;font-size:13px;color:${BRAND.chrome};background-color:${
            i % 2 === 0 ? "rgba(255,255,255,0.04)" : "transparent"
          };border-bottom:1px solid ${BRAND.border};">
            ${value}
          </td>
        </tr>`
        )
        .join("")}
    </table>
  `;
}

export async function POST(request: Request) {
  try {
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

    const detailRows: [string, string][] = [
      ["Name", safe.name],
      ["Phone", safe.phone],
      ["Email", safe.email || "-"],
      ["Vehicle registration", safe.registration || "-"],
      ["Tyre size", safe.tyreSize || "-"],
      ["Service needed", safe.service],
      ["Preferred date/time", safe.preferredTime || "-"],
      ["Message", safe.message || "-"],
    ];

    const replyTo = data.email && EMAIL_REGEX.test(data.email.trim())
      ? data.email.trim()
      : undefined;

    // --- Owner notification email ---
    const ownerBody = `
      <p style="margin:0 0 4px;font-size:11px;font-weight:bold;letter-spacing:1px;color:${BRAND.volt};text-transform:uppercase;">
        New Quote Request
      </p>
      <h1 style="margin:0 0 16px;font-size:22px;font-weight:900;color:${BRAND.white};">
        ${safe.name} wants a quote
      </h1>
      ${detailsTable(detailRows)}
      ${
        replyTo
          ? `<p style="margin:20px 0 0;font-size:13px;color:${BRAND.chrome};">
              Reply directly to this email to respond to <a href="mailto:${replyTo}" style="color:${BRAND.volt};">${replyTo}</a>.
            </p>`
          : ""
      }
    `;

    await resend.emails.send({
      from: fromAddress,
      to: toAddress,
      subject: `New quote request from ${safe.name}`,
      html: emailShell({
        preheader: `New tyre quote request from ${safe.name}`,
        bodyHtml: ownerBody,
      }),
      replyTo,
    });

    // --- Customer confirmation email ---
    if (replyTo) {
      const customerBody = `
        <p style="margin:0 0 4px;font-size:11px;font-weight:bold;letter-spacing:1px;color:${BRAND.volt};text-transform:uppercase;">
          Request Received
        </p>
        <h1 style="margin:0 0 16px;font-size:22px;font-weight:900;color:${BRAND.white};">
          Thanks, ${safe.name}!
        </h1>
        <p style="margin:0 0 8px;font-size:14px;line-height:1.6;color:${BRAND.chrome};">
          We've received your tyre quote request and will be in touch shortly.
        </p>
        <p style="margin:0 0 20px;font-size:14px;line-height:1.6;color:${BRAND.chrome};">
          If it's urgent, WhatsApp or call us directly and we'll help right away.
        </p>
        <table role="presentation" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
          <tr>
            <td style="border-radius:999px;background-color:${BRAND.volt};">
              <a href="tel:01603123456" style="display:inline-block;padding:12px 24px;font-size:13px;font-weight:900;color:${BRAND.graphite};text-decoration:none;">
                Call 01603 123456
              </a>
            </td>
          </tr>
        </table>
        <p style="margin:0 0 6px;font-size:12px;font-weight:bold;color:${BRAND.white};">
          Here's a copy of what you sent us
        </p>
        ${detailsTable(detailRows)}
      `;

      await resend.emails.send({
        from: fromAddress,
        to: replyTo,
        subject: "We've got your tyre quote request — GOGO TYRE",
        html: emailShell({
          preheader: "We've received your tyre quote request and will be in touch shortly.",
          bodyHtml: customerBody,
        }),
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