require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
const notesRoutes = require("./routes/notes.routes");
app.get("/", (req, res) => {
  res.json({
    message: "hello naman",
  });
});
app.use("/notes", notesRoutes);
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
//
