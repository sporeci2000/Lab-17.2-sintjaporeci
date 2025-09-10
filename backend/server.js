require('dotenv').config();
require('./config/db-connection');
const express = require('express');
const noteRouter = require('./routes/notes-router')

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/notes, noteRouter');

// Get our server running
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});