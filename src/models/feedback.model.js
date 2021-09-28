const mongoose = require("mongoose");
const { model, Schema } = mongoose;
const FeedbackSchema = new Schema(
  {
    name: String,
    feedback: String,
    location: String,
  },
  {
    timestamps: true,
  }
);
const FeedbackModel = model("Feedback", FeedbackSchema);
module.exports = FeedbackModel;
