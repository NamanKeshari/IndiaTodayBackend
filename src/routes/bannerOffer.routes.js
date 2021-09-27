const express = require("express");
const bannerOfferController = require("../controllers/bannerOffer.controller");
const router = express.Router();
router.get("/", bannerOfferController.getBannerOffers);
router.post("/", bannerOfferController.createBannerOffer);

module.exports = router;
