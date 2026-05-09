const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  createMenu
} = require("../controllers/menuController");

router.post("/create", protect, createMenu);

module.exports = router;