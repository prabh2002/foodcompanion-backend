const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema(
  {
    kitchenId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Kitchen",
      required: true
    },

    breakfast: [
      {
        itemName: String,
        price: Number
      }
    ],

    lunch: [
      {
        itemName: String,
        price: Number
      }
    ],

    dinner: [
      {
        itemName: String,
        price: Number
      }
    ]
  },
  { timestamps: true }
);

module.exports = mongoose.model("Menu", menuSchema);