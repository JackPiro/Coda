// Import the mongoose library
const mongoose = require('mongoose');

// Define an asynchronous function to connect to the MongoDB instance
const connectDB = async () => {
    try {
    // Attempt to establish a connection to the MongoDB instance using the provided connection string
    await mongoose.connect('mongodb://localhost:27017/coda-database', {
      useNewUrlParser: true,            // Use the new URL string parser
      useUnifiedTopology: true,         // Use the new server discovery and monitoring engine
      useFindAndModify: false,          // Do not use the deprecated `findAndModify` function
      useCreateIndex: true,             // Use `createIndex` instead of the deprecated `ensureIndex`
    });
    // If the connection is successful, log a message to the console
    console.log('MongoDB connected...');
    } catch (err) {
    // If there is an error during the connection, log the error message and exit the process with a failure code
    console.error(err.message);
    process.exit(1);
    }
};

// Export the connectDB function so it can be used in other files
module.exports = connectDB;


//Footnote
/*The connectDB function uses the mongoose.connect() method to establish a connection to your MongoDB instance.
The options passed to the connect() method help ensure that your code uses the latest
features and avoids deprecated functionality. If the connection is successful, a message is logged to the console.
If there's an error, the error message is logged, and the process exits with a failure code.
*/
