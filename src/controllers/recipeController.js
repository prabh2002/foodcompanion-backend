const axios = require("axios");

exports.generateRecipes = async (req, res) => {
  try {
    const { ingredients, dietType } = req.body;

    const firstIngredient = ingredients
      .split(",")[0]
      .trim();

    const response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${firstIngredient}`
    );

    let meals = response.data.meals;

    if (!meals) {
      return res.json({
        recipes: [],
      });
    }

    const limitedMeals = meals.slice(0, 10);

    const detailedRecipes = await Promise.all(
      limitedMeals.map(async (meal) => {
        const detail = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`
        );

        return detail.data.meals[0];
      })
    );

    let filteredRecipes = detailedRecipes;

    // Vegetarian filter
    if (
      dietType &&
      dietType.toLowerCase() === "vegetarian"
    ) {
      filteredRecipes = detailedRecipes.filter(
        (meal) =>
          meal.strCategory !== "Beef" &&
          meal.strCategory !== "Chicken" &&
          meal.strCategory !== "Pork" &&
          meal.strCategory !== "Seafood"
      );
    }

    // Non-veg filter
    if (
      dietType &&
      dietType.toLowerCase() === "non-vegetarian"
    ) {
      filteredRecipes = detailedRecipes.filter(
        (meal) =>
          meal.strCategory === "Beef" ||
          meal.strCategory === "Chicken" ||
          meal.strCategory === "Pork" ||
          meal.strCategory === "Seafood"
      );
    }

    res.json({
      recipes: filteredRecipes.slice(0, 5),
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Recipe fetch failed",
    });
  }
};