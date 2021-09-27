const mongoose = require("mongoose");
const { model, Schema } = mongoose;
const NoteSchema = new Schema(
  {
    text: String,
  },
  {
    timestamps: true,
  }
);
const NoteModel = model("Note", NoteSchema);
module.exports = NoteModel;
