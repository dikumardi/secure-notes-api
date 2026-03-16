const express = require('express');
const {createNoteController,getNotesController,deleteNoteController,updateNoteController} = require('../controller/notes.controller');
const {notesMiddleware} = require('../middleware/notes.middleware');

const router = express.Router()

router.post('/create', notesMiddleware, createNoteController)
router.get('/', notesMiddleware, getNotesController)
router.delete('/:id', notesMiddleware, deleteNoteController)
router.patch('/:id', notesMiddleware, updateNoteController)



module.exports = router;