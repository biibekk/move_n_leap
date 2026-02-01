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

    // In backend/src/routes/parentEnquiry.js

    // ATTEMPT TO SEND EMAIL IN THE BACKGROUND VIA RESEND
    const transporter = nodemailer.createTransport({
      host: "smtp.resend.com",
      port: 587,
      secure: false, // Use STARTTLS (Port 587)
      auth: {
        user: "resend", // This is literal text "resend"
        pass: process.env.RESEND_API_KEY,
      },
    });

    transporter.sendMail({
      from: "MovenLeap <onboarding@resend.dev>", // For free accounts, use this 'from' address
      to: process.env.CLIENT_EMAIL,
      subject: "New Parent Enquiry",
      html: `
        <h3>New Enquiry Received</h3>
        <p><b>Parent Name:</b> ${parentName}</p>
        <p><b>Phone:</b> ${phone}</p> 
        <p><b>Child Age:</b> ${childAge}</p>
        <p><b>Activity:</b> ${activity}</p>
      `,
    }).then(() => console.log("Email sent successfully via Resend"))
      .catch(err => console.error("Resend Email Error:", err));

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
