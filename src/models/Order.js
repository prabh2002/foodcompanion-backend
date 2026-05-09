const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    consumerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    cookId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    kitchenId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Kitchen",
      required: true,
    },

    items: [
      {
        itemName: String,
        price: Number,
      },
    ],

    totalAmount: {
      type: Number,
      required: true,
    },

    deliveryAddress: {
      type: String,
      required: true,
    },

    messageForCook: {
  type: String
},

    status: {
      type: String,
      enum: [
        "pending",
        "accepted",
        "preparing",
        "delivered"
      ],
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

module.exports =
  mongoose.model(
    "Order",
    orderSchema
  );