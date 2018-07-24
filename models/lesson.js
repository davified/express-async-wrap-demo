const mongoose = require("mongoose");

const schema = mongoose.Schema({
  name: { type: String, required: true },
  day: { type: String, required: true },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true }
});

module.exports = mongoose.model("Lesson", schema);
