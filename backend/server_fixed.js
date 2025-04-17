const express = require('express');
const cors = require('cors'); // Importing cors
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());
app.use(cors()); // Enabling CORS

// Import routes
const routes = require('./routes/index');
app.use('/api', routes); // Fixed missing comma

// Start the server
app.listen(port, () => { // Fixed missing comma
    console.log(`Server is running on http://localhost:${port}`);
});

// Error handling
app.use((err, req, res, next) => { // Fixed missing commas
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
