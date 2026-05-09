const Order = require("../models/Order");

exports.getConsumerDashboard =
async (req, res) => {
  try {
    const orders =
      await Order.find({
        consumerId: req.user.id
      })
      .populate("kitchenId");

    const activeOrder =
      orders.find(
        (order) =>
          order.status !==
          "Delivered"
      );

    const recentOrders =
      orders
        .slice(-5)
        .reverse();

    const favoriteKitchens =
      [
        ...new Map(
          orders.map(
            (order) => [
              order.kitchenId
                ._id
                .toString(),
              order.kitchenId
            ]
          )
        ).values()
      ];

    res.json({
      activeOrder,
      recentOrders,
      favoriteKitchens
    });

  } catch (error) {
    res.status(500).json({
      message:
        "Consumer dashboard failed"
    });
  }
};