const express = require('express')
const router = express.Router()
const fetchUser = require('../middleware/fetchUser')
const { body, validationResult } = require('express-validator');
const Note = require("../model/Note")

// ROUTE 1 : get all the notes using GET : "/api/auth/fetchallnotes" login required
router.get('/fetchallnotes', fetchUser, async (req, res) => {

    try {
        const notes = await Note.find({ user: req.user.id })
        res.json(notes)
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal server error");
    }
})

// ROUTE 2 : add a new note using POST : "/api/auth/addnote" login required
router.post('/addnote', fetchUser, [
    body('title', 'title must be minimum 3 character').isLength({ min: 3 }),
    body('description', 'Description must be minimum 5 character').isLength({ min: 5 }),
], async (req, res) => {

    try {

        const { title, description, tag } = req.body;

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const note = new Note({
            title, description, tag, user: req.user.id
        })

        const saveNote = await note.save()
        res.json(saveNote)


    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal server error");
    }

})

// ROUTE 3 : update an existing note using PUT : "/api/auth/addnote" login required
router.put('/updatenote/:id', fetchUser, [
    body('title', 'Description must be minimum 5 character').isLength({ min: 3 }),
    body('description', 'Description must be minimum 5 character').isLength({ min: 5 }),
], async (req, res) => {

    try {

        const { title, description, tag } = req.body;
        const newNote = {};
        if (title) { newNote.title = title };
        if (description) { newNote.description = description };
        if (tag) { newNote.tag = tag };

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        // Find a note to be updated and update it
        let note = await Note.findById(req.params.id);

        if (!note) {
            return res.status(404).send("not found")
        }
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("not allowed")
        }

        note = await Note.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })
        res.json(note)


    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal server error");
    }

})

// ROUTE 4 : delete an existing note using DELETE : "/api/auth/deletenote" login required
router.delete('/deletenote/:id', fetchUser, [
], async (req, res) => {

    try {

        // Find a note to be updated and update it
        let note = await Note.findById(req.params.id);

        if (!note) {
            return res.status(404).send("not found")
        }
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("not allowed")
        }

        note = await Note.findByIdAndDelete(req.params.id)
        res.json({ "success": "note has been deleted", "note": note })


    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal server error");
    }

})


module.exports = router