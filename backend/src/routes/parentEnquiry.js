const express = require("express");
const { Resend } = require("resend");
const Lead = require("../models/lead.js");

const router = express.Router();

// Initialize Resend with your API key
router.post("/", async (req, res) => {
  const { parentName, phone, childAge, activity } = req.body;

  // Initialize Resend inside the handler to ensure env vars are ready
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    // SAVE TO DATABASE FIRST
    const savedLead = await Lead.create({
      parentName,
      phone,
      childAge,
      activity,
    });

    console.log("Saved to DB:", savedLead._id);

    // SEND THE SUCCESS RESPONSE IMMEDIATELY
    res.status(201).json({
      success: true,
      message: "Enquiry received! We will call you soon.",
    });

    // SEND EMAIL IN THE BACKGROUND VIA RESEND SDK (Uses HTTP, not SMTP)
    resend.emails.send({
      from: "MovenLeap <onboarding@resend.dev>", // For free accounts, use this 'from'
      to: process.env.CLIENT_EMAIL || "divas.shrestha20@gmail.com",
      subject: "New Parent Enquiry",
      html: `
        <h3>New Enquiry Received</h3>
        <p><b>Parent Name:</b> ${parentName}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Child Age:</b> ${childAge}</p>
        <p><b>Activity:</b> ${activity}</p>
      `,
    }).then(() => console.log("Email sent successfully via Resend SDK"))
      .catch(err => console.error("Resend SDK Error:", err));

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
