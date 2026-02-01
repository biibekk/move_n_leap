const express = require("express");
const nodemailer = require("nodemailer");
const Lead = require("../models/lead.js");

const router = express.Router();

router.post("/", async (req, res) => {
  const { parentName, phone, childAge, activity } = req.body;

  try {
    // SAVE TO DATABASE FIRST
    const savedLead = await Lead.create({
      parentName,
      phone,
      childAge,
      activity,
    });

    console.log("Saved to DB:", savedLead._id);

    // SEND THE SUCCESS RESPONSE IMMEDIATELY after DB save
    res.status(201).json({
      success: true,
      message: "Enquiry received! We will call you soon.",
    });

    // ATTEMPT TO SEND EMAIL IN THE BACKGROUND
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    // Don't 'await' this so the user doesn't wait for the email connection
    transporter.sendMail({
      from: `"MovenLeap Website" <${process.env.MAIL_USER}>`,
      to: process.env.CLIENT_EMAIL,
      subject: "New Parent Enquiry",
      html: `
        <h3>New Enquiry Received</h3>
        <p><b>Parent Name:</b> ${parentName}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Child Age:</b> ${childAge}</p>
        <p><b>Activity:</b> ${activity}</p>
      `,
    }).then(() => console.log("Email sent successfully"))
      .catch(err => console.error("Background Email Error:", err));

  } catch (error) {
    console.error("Enquiry Database Error:", error);
    if (!res.headersSent) {
      return res.status(500).json({
        success: false,
        message: "Failed to process enquiry",
      });
    }
  }
});

module.exports = router;
