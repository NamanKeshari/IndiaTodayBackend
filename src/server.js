require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
app.use(cors());
app.use(express.json());
const notesRoutes = require("./routes/notes.routes");
const astroRoutes = require("./routes/astro.routes");
const bannerOfferRoutes = require("./routes/bannerOffer.routes");
const horoscopeRoutes = require("./routes/horoscope.routes");
const questionCategoryRoutes = require("./routes/questionCategory.routes");
const ReportsRoutes = require("./routes/reports.routes");
const FeedbacksRoutes = require("./routes/feedback.routes");
app.get("/", (req, res) => {
  res.json({
    message: "hello naman",
  });
});
app.use("/notes", notesRoutes);
app.use("/astro", astroRoutes);
app.use("/bannerOffer", bannerOfferRoutes);
app.use("/horoscope", horoscopeRoutes);
app.use("/questionCategory", questionCategoryRoutes);
app.use("/reports", ReportsRoutes);
app.use("/feedbacks", FeedbacksRoutes);
const PORT = process.env.PORT;

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(PORT, () => {
      console.log("Server listening on:", PORT);
    });
  })
  .catch(console.error);
