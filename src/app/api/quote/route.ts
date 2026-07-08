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

export async function POST(request: Request) {
  try {
    const data: QuotePayload = await request.json();

    if (!data.name || !data.phone) {
      return NextResponse.json(
        { error: "Name and phone are required." },
        { status: 400 }
      );
    }

    const fromAddress = process.env.QUOTE_FROM_EMAIL || "onboarding@resend.dev";
    const toAddress = process.env.QUOTE_TO_EMAIL || "mfawaz182@gmail.com";

    const detailRows = [
      ["Name", data.name],
      ["Phone", data.phone],
      ["Email", data.email || "-"],
      ["Vehicle registration", data.registration || "-"],
      ["Tyre size", data.tyreSize || "-"],
      ["Service needed", data.service],
      ["Preferred date/time", data.preferredTime || "-"],
      ["Message", data.message || "-"],
    ];

    const ownerHtml = `
      <h2>New tyre quote request</h2>
      <table cellpadding="6" style="border-collapse:collapse">
        ${detailRows
          .map(
            ([label, value]) =>
              `<tr><td style="font-weight:bold;border:1px solid #ddd">${label}</td><td style="border:1px solid #ddd">${value}</td></tr>`
          )
          .join("")}
      </table>
    `;

    await resend.emails.send({
      from: fromAddress,
      to: toAddress,
      subject: `New quote request from ${data.name}`,
      html: ownerHtml,
      replyTo: data.email || undefined,
    });

    if (data.email) {
      await resend.emails.send({
        from: fromAddress,
        to: data.email,
        subject: "We've got your tyre quote request — GOGO TYRE",
        html: `
          <p>Hi ${data.name},</p>
          <p>Thanks for reaching out to GOGO TYRE. We've received your quote request and will be in touch shortly.</p>
          <p>If it's urgent, WhatsApp or call us directly and we'll help right away.</p>
          <p>Here's a copy of what you sent us:</p>
          <table cellpadding="6" style="border-collapse:collapse">
            ${detailRows
              .map(
                ([label, value]) =>
                  `<tr><td style="font-weight:bold;border:1px solid #ddd">${label}</td><td style="border:1px solid #ddd">${value}</td></tr>`
              )
              .join("")}
          </table>
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