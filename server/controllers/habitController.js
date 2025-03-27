const Habit = require("../models/habit");

exports.addHabit = async (req, res) => {
  try {
    const { name } = req.body;
    const habit = new Habit({ user: req.user.id, name });
    await habit.save();
    res.status(201).json(habit);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getHabits = async (req, res) => {
  try {
    const habits = await Habit.find({ user: req.user.id });
    res.json(habits);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.incrementHabitStreak = async (req, res) => {
  try {
    const habit = await Habit.findOneAndUpdate(
      { _id: req.params.id, user: req.user.id },
      { $inc: { streak: 1 } },
      { new: true }
    );
    res.json(habit);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteHabit = async (req, res) => {
  try {
    await Habit.findOneAndDelete({ _id: req.params.id, user: req.user.id });
    res.json({ message: "Habit deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};