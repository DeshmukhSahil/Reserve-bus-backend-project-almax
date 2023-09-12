// Importing the mongoose library for MongoDB interactions
import mongoose from "mongoose";

// Defining a function that establishes a connection to the database
const connection = (url) => {
  // Using the mongoose.connect() method to connect to the specified URL
  mongoose
    .connect(url)
    .then(() => console.log("MongoDB is connected")) // Logging a message if the connection is successful
    .catch((err) => console.log(err)); // Logging any connection errors if they occur
};

// Exporting the 'connection' function so it can be used elsewhere
export default connection;
