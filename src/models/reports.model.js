const mongoose = require("mongoose");
const { model, Schema } = mongoose;
const ReportSchema = new Schema(
  {
    id: Number,
    urlSlug: String,
    namePrefix: String,
    firstName: String,
    lastName: String,
    aboutMe: String,
    profliePicUrl: String,
    experience: Number,
    languages: [String],
    minimumCallDuration: Number,
    minimumCallDurationCharges: Number,
    additionalPerMinuteCharges: Number,
    isAvailable: Boolean,
    rating: Number,
    skills: [String],
    isOnCall: Boolean,
    images: {
      large: {
        imageUrl: String,
        id: Number,
      },
      medium: {
        imageUrl: String,
        id: Number,
      },
    },
    availability: {
      days: [String],
      slot: {
        toFormat: String,
        fromFormat: String,
        from: String,
        to: String,
      },
    },
  },
  {
    timestamps: true,
  }
);
const ReportModel = model("Report", ReportSchema);
module.exports = ReportModel;
