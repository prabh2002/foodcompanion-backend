const Order = require("../models/Order");
const Kitchen = require("../models/Kitchen");
const Menu = require("../models/Menu");

exports.getCookDashboard = async (req, res) => {
  try {
    const kitchen = await Kitchen.findOne({
      ownerId: req.user.id,
    });

    if (!kitchen) {
      return res.json({
        kitchen: null,
        totalOrders: 0,
        totalRevenue: 0,
        menu: null,
        recentOrders: [],
      });
    }

    const orders = await Order.find({
      kitchenId: kitchen._id,
    }).populate("consumerId"); //--------------------------------------------------------

    const menu = await Menu.findOne({
      kitchenId: kitchen._id,
    });

    const totalRevenue = orders.reduce(
      (sum, order) => sum + order.totalAmount,
      0,
    );

    const recentOrders = orders.slice(-5).reverse();

    res.json({
      kitchen,
      totalOrders: orders.length,
      totalRevenue,
      menu,
      recentOrders,
    });
  } catch (error) {
    res.status(500).json({
      message: "Dashboard fetch failed",
    });
  }
};

exports.toggleKitchenAvailability = async (req, res) => {
  try {
    const kitchen = await Kitchen.findOne({
      ownerId: req.user.id,
    });

    kitchen.isAvailable = !kitchen.isAvailable;

    await kitchen.save();

    res.json({
      message: "Availability updated",
      isAvailable: kitchen.isAvailable,
    });
  } catch (error) {
    res.status(500).json({
      message: "Toggle failed",
    });
  }
};
