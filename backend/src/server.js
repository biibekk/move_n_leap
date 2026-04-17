require("dotenv").config({ path: require("path").resolve(__dirname, "../.env") });

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const parentEnquiryRoute = require("./routes/parentEnquiry");

const app = express();

// connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

// middleware
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json());

// routes
// app.get("/test", (req, res) => {
//   res.send("Backend is working");
// });

app.use("/routes/parentEnquiry", parentEnquiryRoute);


// server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
