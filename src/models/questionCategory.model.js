const mongoose = require("mongoose");
const { model, Schema } = mongoose;
const QuestionCategorySchema = new Schema(
  {
    id: Number,
    name: String,
    description: String,
    price: Number,
    suggestions: [String],
  },
  {
    timestamps: true,
  }
);
const QuestionCategoryModel = model("QuestionCategory", QuestionCategorySchema);
module.exports = QuestionCategoryModel;
