const FeedbackModel = require("../models/feedback.model");
module.exports = {
  getFeedbacks: async (req, res) => {
    const feedbacks = await FeedbackModel.find();
    res.json({
      feedbacks,
    });
  },
  createFeedback: async (req, res) => {
    const feedback = new FeedbackModel(req.body);
    await feedback.save();
    res.json({
      feedback,
    });
  },
};
