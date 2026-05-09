const mongoose =
require("mongoose");

const favoriteSchema =
new mongoose.Schema({
  consumerId: {
    type:
      mongoose.Schema.Types
        .ObjectId,
    ref: "User"
  },

  kitchenId: {
    type:
      mongoose.Schema.Types
        .ObjectId,
    ref: "Kitchen"
  }
});

module.exports =
mongoose.model(
  "Favorite",
  favoriteSchema
);