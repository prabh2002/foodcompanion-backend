const Kitchen = require("../models/Kitchen");

exports.createKitchen = async (req, res) => {
  try {
    const {
      kitchenName,
      description,
      address,
      latitude,
      longitude
    } = req.body;

    const kitchen = await Kitchen.create({
      ownerId: req.user._id,
      kitchenName,
      description,
      address,
      location: {
        type: "Point",
        coordinates: [longitude, latitude]
      }
    });

    res.status(201).json(kitchen);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};