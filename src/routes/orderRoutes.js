const express = require("express");
const router = express.Router();

const authMiddleware =
  require("../middleware/authMiddleware");

const {
  placeOrder,
  getCookOrders,
  updateOrderStatus
} = require(
  "../controllers/orderController"
);

router.post(
  "/place",
  authMiddleware,
  placeOrder
);

router.get(
  "/cook-orders",
  authMiddleware,
  getCookOrders
);

router.put(
  "/update-status",
  authMiddleware,
  updateOrderStatus
);

module.exports = router;