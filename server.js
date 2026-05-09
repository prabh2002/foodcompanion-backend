const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./src/config/db");
const authRoutes = require("./src/routes/authRoutes");
const kitchenRoutes = require("./src/routes/kitchenRoutes");
const menuRoutes = require("./src/routes/menuRoutes");
const routeRoutes = require("./src/routes/routeRoutes");
const kitchenDetailsRoutes = require("./src/routes/kitchenDetailsRoutes");
const orderRoutes = require("./src/routes/orderRoutes");
const dashboardRoutes = require("./src/routes/dashboardRoutes");
const favoriteRoutes = require("./src/routes/favoriteRoutes");

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/kitchen", kitchenRoutes);
app.use("/api/menu", menuRoutes);
app.use("/api/route", routeRoutes);
app.use("/api/kitchen-details", kitchenDetailsRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/dashboard", dashboardRoutes);

app.use("/api/recipe", require("./src/routes/recipeRoutes"));
app.use("/api/favorites", favoriteRoutes);

app.get("/", (req, res) => {
  res.send("FoodCompanion API Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
