// Import the necessary modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Create an Express app
const app = express();
// Set the port to either an environment variable or a default value (5000)
const PORT = process.env.PORT || 5000;

// Use CORS middleware to allow cross-origin requests
app.use(cors());
// Use express.json() middleware to parse JSON request bodies
app.use(express.json());

// Connect to MongoDB using the Mongoose module
mongoose.connect('mongodb://localhost:27017/coda-database', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
});

// Get the connection object from Mongoose
const connection = mongoose.connection;
// Log a message when the connection to MongoDB is successfully established
connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

// Start the Express server on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});

