const noteModel = require("../models/note.model");

async function createNoteController(req, res) {
  const { title, description } = req.body;

  const note = await noteModel.create({
    title,
    description,
      userId: req.userId,
  });

  res.status(200).json({ message: "Note Created Successfully", note });
}

async function getNotesController(req, res) {
const notes = await noteModel.find({ userId: req.userId });

  res.status(200).json({ message: "Notes Fetched Successfully",notes });
}

async function deleteNoteController(req, res) {
  const noteId = req.params.id;

const note = await noteModel.findOneAndDelete({ _id: noteId, userId: req.userId });
  res.status(200).json({ message: "Note Deleted Successfully", note });
}

async function updateNoteController(req, res) {
  const noteId = req.params.id;
  const {title,description} = req.body

 const note = await noteModel.findOneAndUpdate(
  { _id: noteId, userId: req.userId },  // ensure only owner can update
  { title, description },
  { new: true }  // return updated note
);

  res.status(200).json({ message: "Note Updated Successfully", note });
}

module.exports = {
  createNoteController,
  getNotesController,
  deleteNoteController,
  updateNoteController,
};
