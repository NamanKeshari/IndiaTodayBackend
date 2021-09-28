const BannerOfferModel = require("../models/bannerOffer.model");
module.exports = {
  getBannerOffers: async (req, res) => {
    const bannerOffers = await BannerOfferModel.find();

    res.json({
      httpStatus: "OK",
      httpStatusCode: 200,
      success: true,
      message: "fetched successfully",
      apiName: "Get all daily horoscopes",
      data: bannerOffers,
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
