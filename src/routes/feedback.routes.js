const express = require("express");
const feedbackController = require("../controllers/feedback.controller");
const router = express.Router();
router.get("/", feedbackController.getFeedbacks);
router.post("/", feedbackController.createFeedback);

module.exports = router;
