const mongoose = require("mongoose");

const PomodoroSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  sessionsCompleted: { type: Number, default: 0 },
}, { timestamps: true });

module.exports = mongoose.model("Pomodoro", PomodoroSchema);