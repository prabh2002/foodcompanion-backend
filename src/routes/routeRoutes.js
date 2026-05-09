const express = require("express");
const router = express.Router();

const {
  searchRoute
} = require("../controllers/routeController");

router.post("/search", searchRoute);

module.exports = router;