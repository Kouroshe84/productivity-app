const Pomodoro = require("../models/pomodoro");

exports.startPomodoroSession = async (req, res) => {
  try {
    let session = await Pomodoro.findOne({ user: req.user.id });

    if (!session) {
      session = new Pomodoro({ user: req.user.id, sessionsCompleted: 1 });
    } else {
      session.sessionsCompleted += 1;
    }

    await session.save();
    res.status(200).json(session);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getPomodoroStats = async (req, res) => {
  try {
    const session = await Pomodoro.findOne({ user: req.user.id });
    res.json(session || { user: req.user.id, sessionsCompleted: 0 });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};