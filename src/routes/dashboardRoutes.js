const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
  getCookDashboard,
  toggleKitchenAvailability,
} = require("../controllers/dashboardController");

const {
  getConsumerDashboard,
} = require("../controllers/consumerDashboardController");

router.get("/cook", authMiddleware, getCookDashboard);

router.put("/toggle-availability", authMiddleware, toggleKitchenAvailability);

router.get("/consumer", authMiddleware, getConsumerDashboard);

module.exports = router;
