const mongoose = require("mongoose");

const kitchenSchema = new mongoose.Schema(
  {
    ownerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    kitchenName: {
      type: String,
      required: true
    },

    description: {
      type: String
    },

    address: {
  type: String,
  required: true
},

    location: {
      type: {
        type: String,
        enum: ["Point"],
        default: "Point"
      },
      coordinates: {
        type: [Number],
        required: true
      }
    },

    isAvailable: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);

kitchenSchema.index({ location: "2dsphere" });

module.exports = mongoose.model("Kitchen", kitchenSchema);