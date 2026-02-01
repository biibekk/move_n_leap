const express = require("express");
const nodemailer = require("nodemailer");
const Lead = require("../models/lead.js");

const router = express.Router();

router.post("/", async (req, res) => {
  const { parentName, phone, childAge, message } = req.body;

  try {
    // SAVE TO DATABASE FIRST
    const savedLead = await Lead.create({
      parentName,
      phone,
      childAge,
      message,
    });

    console.log("Saved to DB:", savedLead._id);

    // SEND EMAIL ONLY IF DB SAVE SUCCEEDS
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"MovenLeap Website" <${process.env.MAIL_USER}>`,
      to: process.env.CLIENT_EMAIL,
      subject: "New Parent Enquiry",
      html: `
        <h3>New Enquiry</h3>
        <p><b>Parent Name:</b> ${parentName}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Child Age:</b> ${childAge}</p>
        <p><b>Message:</b><br/>${message}</p>
      `,
    });

    // FINAL RESPONSE
    return res.status(201).json({
      success: true,
      message: "Enquiry saved and email sent",
    });

  } catch (error) {
    console.error("Enquiry error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to process enquiry",
    });
  }
});

module.exports = router;
