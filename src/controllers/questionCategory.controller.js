const QuestionCategoryModel = require("../models/questionCategory.model");
module.exports = {
  getQuestionCategories: async (req, res) => {
    const questionCategories = await QuestionCategoryModel.find();
    res.json({
      questionCategories,
    });
  },
  createQuestionCategory: async (req, res) => {
    const questionCategory = new QuestionCategoryModel(req.body);
    await questionCategory.save();
    res.json({
      questionCategory,
    });
  },
};
