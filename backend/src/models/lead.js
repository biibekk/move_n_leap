const mongoose = require("mongoose");

const leadSchema = new mongoose.Schema({
  parentName: String,
  phone: String,
  childAge: String,
  activities: [String],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Lead", leadSchema);
