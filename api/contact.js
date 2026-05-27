import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { nombre, empresa, email, telefono, equipo, mensaje } = req.body ?? {};

  // Basic server-side validation
  if (!nombre?.trim() || !email?.trim() || !telefono?.trim() || !mensaje?.trim()) {
    return res.status(400).json({ error: "Missing required fields" });
  }
  if (!/\S+@\S+\.\S+/.test(email)) {
    return res.status(400).json({ error: "Invalid email" });
  }

  // If credentials aren't configured yet, skip sending and return success.
  // Set EMAIL_USER and EMAIL_PASS in Vercel environment variables before deploying.
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.log("[contact] No email credentials set — skipping send. Form data:", { nombre, email, equipo });
    return res.status(200).json({ ok: true, dev: true });
  }

  const transporter = nodemailer.createTransport({
    service: "yahoo",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const html = `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#111;color:#F0EBE3;padding:32px;border-radius:4px">
      <div style="border-bottom:2px solid #D4560F;padding-bottom:16px;margin-bottom:24px">
        <h2 style="margin:0;font-size:24px;color:#D4560F;letter-spacing:0.1em">NUEVA SOLICITUD</h2>
        <p style="margin:4px 0 0;color:#9A9A9A;font-size:13px">Grúas Vargas — Formulario de Contacto</p>
      </div>

      <table style="width:100%;border-collapse:collapse">
        ${[
          ["Nombre", nombre],
          ["Empresa", empresa || "—"],
          ["Email", email],
          ["Teléfono", telefono],
          ["Equipo de interés", equipo || "—"],
        ]
          .map(
            ([label, value]) => `
          <tr>
            <td style="padding:8px 0;color:#9A9A9A;font-size:12px;text-transform:uppercase;letter-spacing:0.1em;width:160px;vertical-align:top">${label}</td>
            <td style="padding:8px 0;color:#F0EBE3;font-size:14px">${value}</td>
          </tr>`
          )
          .join("")}
      </table>

      <div style="margin-top:24px;padding:16px;background:#1E1E1E;border-left:3px solid #D4560F">
        <p style="margin:0 0 6px;color:#9A9A9A;font-size:12px;text-transform:uppercase;letter-spacing:0.1em">Mensaje</p>
        <p style="margin:0;color:#F0EBE3;font-size:14px;line-height:1.6;white-space:pre-wrap">${mensaje}</p>
      </div>

      <div style="margin-top:24px;padding-top:16px;border-top:1px solid #1E1E1E;font-size:12px;color:#5A5A5A">
        Enviado desde el formulario de contacto de gruasvargas.com
      </div>
    </div>
  `;

  await transporter.sendMail({
    from: `"Grúas Vargas Web" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_TO || "gruasvargaszacapa@yahoo.es",
    replyTo: email,
    subject: `Nueva solicitud de ${nombre}${equipo ? ` — ${equipo}` : ""}`,
    html,
  });

  return res.status(200).json({ ok: true });
}
