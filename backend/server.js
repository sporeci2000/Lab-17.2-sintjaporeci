require('dotenv').config();
require('./config/db-connection');
const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

// Get our server running
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});