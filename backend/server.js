// Import the necessary modules
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


// Create an Express app
const app = express();
// Set the port to either an environment variable or a default value (5000)
const PORT = process.env.PORT || 5001;

// Use CORS middleware to allow cross-origin requests
app.use(cors());
// Use express.json() middleware to parse JSON request bodies
app.use(express.json());

// Connect to MongoDB using the Mongoose module
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true });


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


//This code makes your user routes accessible at the /api/users path.
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

//This code makes artist user routes accessible at the /api/artists path.
const artistRoutes = require('./routes/artistRoutes');
app.use('/api/artists', artistRoutes);

const artistSubscriptionGroupRoutes = require('./routes/artistSubscriptionGroupRoutes');
app.use('/api/artist-subscription-groups', artistSubscriptionGroupRoutes);

// Add this line at the top of the file with other imports
const musicRoutes = require('./routes/musicRoutes');

// Add this line after registering userRoutes
const musicRoutes = require('./routes/musicRoutes');
app.use('/api/music', musicRoutes);



