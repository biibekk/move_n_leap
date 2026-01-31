require("dotenv").config({ path: require("path").resolve(__dirname, "../.env") });

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const parentEnquiryRoute = require("./routes/parentEnquiry");

const app = express();

const Lead = require("./models/lead.js");

// connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log(err));

// middleware
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json());

// routes
app.get("/test", (req, res) => {
  res.send("Backend is working");
});

app.use("/routes/parentEnquiry", parentEnquiryRoute);

app.post('/local_parent_lead', (req, res) => {
    console.log(req.body);
    res.status(200).json({
        success: true,
        message: "Parent lead received successfully"
    });
});


app.post("/parent_leads_db", async (req, res) => {
  try {
    await Lead.create(req.body);
    console.log(req.body);
    res.status(201).json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false });
  }
});


// server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
