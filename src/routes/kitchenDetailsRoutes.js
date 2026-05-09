const express = require("express");
const router = express.Router();

const {
  getKitchenDetails
} = require(
  "../controllers/kitchenDetailsController"
);

router.get("/:id", getKitchenDetails);

module.exports = router;