const express = require("express");
const horoscopeController = require("../controllers/horoscope.controller");
const router = express.Router();
router.get("/", horoscopeController.getHoroscopes);
router.post("/", horoscopeController.createHoroscope);
// router.put("/:id", horoscopeController.updateHoroscope);
// router.delete("/:id", horoscopeController.deleteHoroscope);
module.exports = router;
