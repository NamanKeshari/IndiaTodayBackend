const ReportsModel = require("../models/reports.model");
module.exports = {
  getReports: async (req, res) => {
    const reports = await ReportsModel.find();
    res.json({
      reports,
    });
  },
  createReport: async (req, res) => {
    const report = new ReportsModel(req.body);
    await report.save();
    res.json({
      report,
    });
  },
};
