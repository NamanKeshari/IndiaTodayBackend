const express = require("express");
const astroController = require("../controllers/astro.controller");
const router = express.Router();
router.get("/", astroController.getAstros);
router.get("/filter", astroController.getFilteredAstros);
router.post("/", astroController.createAstro);

module.exports = router;
