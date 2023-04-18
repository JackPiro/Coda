require('dotenv').config();
const express = require('express');
const cors = require('cors');
require('./config/mongoose.config'); // Import the mongoose.config.js file

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

const connection = require('mongoose').connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully :)');
});

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});

// Register the routes
require('./routes/userRoutes')(app);
require('./routes/artistRoutes')(app);
require('./routes/artistSubscriptionGroupRoutes')(app);
require('./routes/musicRoutes')(app);



