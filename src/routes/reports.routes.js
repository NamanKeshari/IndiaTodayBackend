const express = require("express");
const reportsController = require("../controllers/reports.controller");
const router = express.Router();
router.get("/", reportsController.getReports);
router.post("/", reportsController.createReport);
// router.put("/:id", reportsController.updateNote);
// router.delete("/:id", reportsController.deleteNote);
module.exports = router;
