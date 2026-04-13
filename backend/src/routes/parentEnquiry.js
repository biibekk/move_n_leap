const express = require("express");
const { Resend } = require("resend");
const Lead = require("../models/lead.js");

const router = express.Router();

// Initialize Resend with your API key
router.post("/", async (req, res) => {
  const { parentName, phone, childAge, activities } = req.body;

  // Simple validation: strictly 10 digits
  if (!/^\d{10}$/.test(phone)) {
    return res.status(400).json({
      success: false,
      message: "Please provide a valid 10-digit phone number.",
    });
  }

  // Initialize Resend inside the handler to ensure env vars are ready
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    // SAVE TO DATABASE FIRST
    const savedLead = await Lead.create({
      parentName,
      phone,
      childAge,
      activities,
    });

    console.log("Saved to DB:", savedLead._id);

    // SEND THE SUCCESS RESPONSE IMMEDIATELY
    res.status(201).json({
      success: true,
      message: "Enquiry received! We will call you soon.",
    });

    // SEND EMAIL IN THE BACKGROUND VIA RESEND SDK (Uses HTTP, not SMTP)
    const activitiesList = Array.isArray(activities) ? activities.join(", ") : activities;

    resend.emails.send({
      from: "Move N Leap Academy <onboarding@resend.dev>",
      to: ["movenleapacademy@gmail.com"],
      subject: `New Enquiry: ${parentName} (${activitiesList})`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');
          </style>
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f4f7ff; color: #1e1b4b;">
          <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f4f7ff; padding: 40px 0;">
            <tr>
              <td align="center">
                <table width="600" border="0" cellspacing="0" cellpadding="0" style="background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.05);">
                  <!-- Header -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #4f46e5, #1e1b4b); padding: 40px 30px; text-align: center;">
                      <h1 style="color: #ffffff; margin: 0; font-size: 28px; letter-spacing: -0.5px;">New Parent Enquiry</h1>
                      <p style="color: rgba(255,255,255,0.8); margin: 10px 0 0 0; font-size: 16px;">Move N Leap Academy</p>
                    </td>
                  </tr>
                  
                  <!-- Content -->
                  <tr>
                    <td style="padding: 40px 30px;">
                      <p style="font-size: 16px; line-height: 1.5; color: #4b5563; margin-top: 0;">
                        You have received a new enquiry from the website. Here are the details:
                      </p>
                      
                      <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-top: 30px; border-collapse: separate; border-spacing: 0 10px;">
                        <tr>
                          <td width="35%" style="font-weight: 700; color: #4f46e5; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Parent Name</td>
                          <td style="font-size: 16px; color: #1e1b4b;">${parentName}</td>
                        </tr>
                        <tr>
                          <td style="font-weight: 700; color: #4f46e5; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Phone Number</td>
                          <td style="font-size: 16px; color: #1e1b4b;">
                            <a href="tel:${phone}" style="color: #4f46e5; text-decoration: none; font-weight: 600;">${phone}</a>
                          </td>
                        </tr>
                        <tr>
                          <td style="font-weight: 700; color: #4f46e5; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Child Age</td>
                          <td style="font-size: 16px; color: #1e1b4b;">${childAge} Years</td>
                        </tr>
                        <tr>
                          <td style="font-weight: 700; color: #4f46e5; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; vertical-align: top; padding-top: 5px;">Activities</td>
                          <td style="font-size: 16px; color: #1e1b4b;">
                            <div style="background-color: #f3f4f6; padding: 10px 15px; border-radius: 8px; display: inline-block;">
                              ${activitiesList}
                            </div>
                          </td>
                        </tr>
                      </table>
                      
                      <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center;">
                        <a href="https://wa.me/91${phone}" style="background-color: #25d366; color: white; padding: 12px 25px; border-radius: 30px; text-decoration: none; font-weight: 700; display: inline-block; font-size: 14px;">
                          Contact via WhatsApp
                        </a>
                      </div>
                    </td>
                  </tr>
                  
                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #f9fafb; padding: 20px 30px; text-align: center;">
                      <p style="font-size: 12px; color: #9ca3af; margin: 0;">
                        Generated via Move N Leap Website &bull; Enquiry ID: ${savedLead._id}
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    }).then(data => {
      console.log("Resend SDK Response:", data);
      if (data.error) {
        console.error("Resend Delivery Error:", data.error);
      } else {
        console.log("Email sent successfully, ID:", data.data?.id);
      }
    })
    .catch(err => console.error("Resend SDK Critical Error:", err));

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
