const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  createKitchen
} = require("../controllers/kitchenController");

router.post("/create", protect, createKitchen);

module.exports = router;