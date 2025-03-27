const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const { addHabit, getHabits, incrementHabitStreak, deleteHabit } = require("../controllers/habitController");

const router = express.Router();

router.post("/", authMiddleware, addHabit);
router.get("/", authMiddleware, getHabits);
router.put("/:id/increment", authMiddleware, incrementHabitStreak);
router.delete("/:id", authMiddleware, deleteHabit);

module.exports = router;