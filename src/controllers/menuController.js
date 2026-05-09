const Menu = require("../models/Menu");

exports.createMenu = async (req, res) => {
  try {
    const { kitchenId, breakfast, lunch, dinner } =
      req.body;

    const menu = await Menu.create({
      kitchenId,
      breakfast,
      lunch,
      dinner
    });

    res.status(201).json(menu);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};