const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/send-email", async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Web Contact" <${process.env.EMAIL_USER}>`,
      to: "gruasvargaszacapa@yahoo.es",
      subject: subject || "Nuevo mensaje desde la página web",
      html: `
        <h2>Nuevo mensaje desde el formulario de contacto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone}</p>
        <p><strong>Mensaje:</strong><br/>${message}</p>
      `,
    });

    res.json({ ok: true });

  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false, error: "Error enviando correo" });
  }
});

app.listen(5001, () => console.log("Backend ready on http://localhost:5001"));
