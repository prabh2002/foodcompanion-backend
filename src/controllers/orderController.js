const Order = require("../models/Order");
const Kitchen = require("../models/Kitchen");

exports.placeOrder = async (req, res) => {
  try {
    const { kitchenId, items, totalAmount, deliveryAddress, messageForCook } =
      req.body;

    const kitchen = await Kitchen.findById(kitchenId);

    const order = await Order.create({
      consumerId: req.user._id,
      cookId: kitchen.ownerId,
      kitchenId,
      items,
      totalAmount,
      deliveryAddress,
      messageForCook,
    });

    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({
      message: "Order placement failed",
    });
  }
};

exports.getCookOrders = async (req, res) => {
  try {
    const orders = await Order.find({
      cookId: req.user._id,
    })
      .populate("consumerId", "name phone")
      .populate("kitchenId", "kitchenName");

    res.json(orders);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch orders",
    });
  }
};

exports.updateOrderStatus = async (req, res) => {
  try {
    const { orderId, status } = req.body;

    const order = await Order.findById(orderId);

    if (!order) {
      return res.status(404).json({
        message: "Order not found",
      });
    }

    order.status = status;

    await order.save();

    res.json({
      message: "Order status updated",
      order,
    });
  } catch (error) {
    res.status(500).json({
      message: "Status update failed",
    });
  }
};
