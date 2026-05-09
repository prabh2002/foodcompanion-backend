const Kitchen = require("../models/Kitchen");
const Menu = require("../models/Menu");

exports.getKitchenDetails = async (
  req,
  res
) => {
  try {
    const kitchen =
      await Kitchen.findById(
        req.params.id
      ).populate(
        "ownerId",
        "name phone"
      );

    const menu =
      await Menu.findOne({
        kitchenId: req.params.id
      });

    res.json({
      kitchen,
      menu
    });

  } catch (error) {
    res.status(500).json({
      message:
        "Failed to fetch kitchen details"
    });
  }
};