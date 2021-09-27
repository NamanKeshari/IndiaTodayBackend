const NoteModel = require("../models/note.model");

module.exports = {
  getNotes: async (req, res) => {
    const notes = await NoteModel.find();
    res.json({
      notes,
    });
  },
  createNote: async (req, res) => {
    const { text } = req.body;
    const note = new NoteModel({
      text,
    });
    await note.save();
    res.json({
      note,
    });
  },
  updateNote: async (req, res) => {
    const { text } = req.body;
    const { id } = req.params;
    const note = await NoteModel.findById(id);

    if (!note) {
      return res.json({
        message: "no note with given id",
      });
    }
    note.text = text;
    await note.save();
    res.json({
      note,
    });
  },
  deleteNote: async (req, res) => {
    const { id } = req.params;
    const note = await NoteModel.findById(id);
    if (!note) {
      return res.json({
        message: "no note with given id",
      });
    }
    await note.delete();
    res.json({
      message: "note deleted",
    });
  },
};
