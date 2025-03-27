const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const { startPomodoroSession, getPomodoroStats } = require("../controllers/pomodoroController");

const router = express.Router();

router.post("/start", authMiddleware, startPomodoroSession);
router.get("/", authMiddleware, getPomodoroStats);

module.exports = router;