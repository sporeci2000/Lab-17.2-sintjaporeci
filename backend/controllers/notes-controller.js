const Note = require('../models/note-model');

async function seedNotes(req, res) {
    try {
        // Total reset
        await Note.deleteMany({});

        // Create the first note
        await Note.create(
            {
                title: 'Title 1',
                content: 'Content for Title 1'
            },
            {
                title: 'Title 2',
                content: 'Content for Title 2'
            },
            {
                title: 'Title 3',
                content: 'Content for Title 3'
            }
        );

        res.status(201).redirect('/api/notes');
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message });
    }
}

async function getNotes(req, res) {
    try {
        const notes = await Note.find({});
        res.status(200).json(notes);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message });
    }
}

async function deleteNote(req, res) {
    try {
        const note = await Note.findByIdAndDelete(req.params.id);
        res.status(200).json(note);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message });
    }
}

async function updateNote(req, res) {
    try {
        const note = await Note.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(note);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message });
    }
}

async function createNote(req, res) {
    try {
        const note = await Note.create(req.body);
        res.status(201).json(note);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message });
    }
}

async function getNote(req, res) {
    try {
        const note = await Note.findById(req.params.id);
        res.status(200).json(note);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: error.message });
    }
}

module.exports = {
    seedNotes,
    getNotes,
    deleteNote,
    updateNote,
    createNote,
    getNote
};