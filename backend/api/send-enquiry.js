import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { parentName, phone, childAge, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"MovenLeap Website" <${process.env.MAIL_USER}>`,
      to: process.env.CLIENT_EMAIL, // 👈 academy head
      subject: "New Parent Enquiry",
      html: `
        <h3>New Enquiry</h3>
        <p><b>Parent Name:</b> ${parentName}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Child Age:</b> ${childAge}</p>
        <p><b>Message:</b><br/>${message}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ success: false });
  }
}
