const BannerOfferModel = require("../models/bannerOffer.model");
module.exports = {
  getBannerOffers: async (req, res) => {
    const bannerOffers = await BannerOfferModel.find();
    res.json({
      bannerOffers,
    });
  },
  createBannerOffer: async (req, res) => {
    const bannerOffer = new BannerOfferModel(req.body);
    await bannerOffer.save();
    res.json({
      bannerOffer,
    });
  },
};
