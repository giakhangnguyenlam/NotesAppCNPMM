const express = require('express');
const router = express.Router();
const {updateUser} = require('../services/UserService');
const {createNote, deleteNote, getNotesByUserId, getStatusFinishedNote, updateNode, updateStatusNote} = require('../services/NoteService')

router.put('/username/:username', updateUser);
router.post('/note', createNote);
router.delete('/note/:id', deleteNote);
router.get('/note/:id', getNotesByUserId);
router.get('/note/finished/:id', getStatusFinishedNote);
router.put('/note/:id', updateNode);
router.put('/note/status/:id', updateStatusNote);

module.exports = router;