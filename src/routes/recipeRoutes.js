const express =
  require("express");

const router =
  express.Router();

const authMiddleware =
  require(
    "../middleware/authMiddleware"
  );

const {
  generateRecipes
} = require(
  "../controllers/recipeController"
);

router.post(
  "/generate",
  authMiddleware,
  generateRecipes
);

module.exports =
  router;