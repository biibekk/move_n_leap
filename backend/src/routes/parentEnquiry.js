const express = require("express");
const nodemailer = require("nodemailer");
const Lead = require("../models/lead.js");

const router = express.Router();

router.post("/", async (req, res) => {
  const { parentName, phone, childAge, message } = req.body;

  try {
    await Lead.create(req.body);
    console.log(req.body);
    // res.status(201).json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false });
  }

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
      to: process.env.CLIENT_EMAIL, // academy head
      subject: "New Parent Enquiry",
      html: `
        <h3>New Enquiry</h3>
        <p><b>Parent Name:</b> ${parentName}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Child Age:</b> ${childAge}</p>
        <p><b>Message:</b><br/>${message}</p>
      `,
    });

    return res.status(200).json({
      success: true,
      message: "Enquiry email sent",
    });
  } catch (error) {
    console.error("Email error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to send email",
    });
  }
});

module.exports = router;
