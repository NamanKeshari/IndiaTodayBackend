const express = require("express");
const questionCategoryController = require("../controllers/questionCategory.controller");
const router = express.Router();
router.get("/", questionCategoryController.getQuestionCategories);
router.post("/", questionCategoryController.createQuestionCategory);
// router.put("/:id", questionCategoryController.updateNote);
// router.delete("/:id", questionCategoryController.deleteNote);
module.exports = router;
