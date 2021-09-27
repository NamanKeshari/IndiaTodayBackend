const HoroscopeModel = require("../models/horoscope.model");
module.exports = {
  getHoroscopes: async (req, res) => {
    const horoscopes = await HoroscopeModel.find();
    res.json({
      horoscopes,
    });
  },
  createHoroscope: async (req, res) => {
    const horoscope = new HoroscopeModel(req.body);
    await horoscope.save();
    res.json({
      horoscope,
    });
  },
};
