const mongoose = require("mongoose");
const { model, Schema } = mongoose;
const BannerOfferSchema = new Schema(
  {
    name: String,
    date: String,
    img: String,
    images: {
      small: {
        imageUrl: String,
        id: Number,
      },
      large: {
        imageUrl: String,
        id: Number,
      },
      medium: {
        imageUrl: String,
        id: Number,
      },
    },
    urlSlug: String,
  },
  {
    timestamps: true,
  }
);
const BannerOfferModel = model("BannerOffer", BannerOfferSchema);
module.exports = BannerOfferModel;
