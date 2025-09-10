const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    title: { type: String, require: true },
    content: { type: String, require: true }
}, {
    timestamps: true //created at
});

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;