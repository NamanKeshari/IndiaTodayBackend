const AstroModel = require("../models/astro.model");
module.exports = {
  getAstros: async (req, res) => {
    const astros = await AstroModel.find();
    res.json({
      astros,
    });
  },
  getFilteredAstros: async (req, res) => {
    const astros = await AstroModel.find(req.query);
    res.json({
      astros,
    });
  },
  createAstro: async (req, res) => {
    const astro = new AstroModel(req.body);
    await astro.save();
    res.json({
      astro,
    });
  },
};
