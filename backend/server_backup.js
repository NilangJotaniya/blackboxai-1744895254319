const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Import routes
const routes = require('./routes/index'); // Updated to point to the new routes file
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
