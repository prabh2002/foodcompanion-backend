const Favorite =
require("../models/Favorite");

exports.toggleFavorite =
async (req, res) => {
  try {
    const {
      kitchenId
    } = req.body;

    const existing =
      await Favorite.findOne({
        consumerId:
          req.user.id,
        kitchenId
      });

    if (existing) {
      await Favorite.findByIdAndDelete(
        existing._id
      );

      return res.json({
        message:
          "Removed from favorites",
        isFavorite:
          false
      });
    }

    await Favorite.create({
      consumerId:
        req.user.id,
      kitchenId
    });

    res.json({
      message:
        "Added to favorites",
      isFavorite:
        true
    });

  } catch (error) {
    res.status(500).json({
      message:
        "Favorite failed"
    });
  }
};

exports.getFavorites =
async (req, res) => {
  try {
    const favorites =
      await Favorite.find({
        consumerId:
          req.user.id
      }).populate(
        "kitchenId"
      );

    res.json(favorites);

  } catch (error) {
    res.status(500).json({
      message:
        "Failed to fetch favorites"
    });
  }
};