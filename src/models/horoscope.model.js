const mongoose = require("mongoose");
const { model, Schema } = mongoose;
const HoroscopeSchema = new Schema(
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
const HoroscopeModel = model("Horoscope", HoroscopeSchema);
module.exports = HoroscopeModel;
