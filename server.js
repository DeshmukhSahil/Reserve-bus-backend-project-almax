// Import required libraries and modules
import express from "express";
import tripsRoutes from './routes/tripsRoutes.js';
import dotenv from "dotenv";
import morgan from "morgan";
import connection from "./config/database.js";
import busRoutes from './routes/busRoutes.js';
import ticketBookingRoute from './routes/ticketBookingRoute.js';
import statedistrictsRoutes from './routes/statedistrictsRoutes.js';
import cors from 'cors';

// Load environment variables from a .env file
dotenv.config();

// Create an Express application
const app = express();

// Enable CORS middleware
app.use(cors());

// Parse incoming JSON data
app.use(express.json());

// Use Morgan middleware for logging
app.use(morgan("dev"));

// Define routes using imported route modules
app.use("/api", tripsRoutes);
app.use("/api", ticketBookingRoute);
app.use("/api", statedistrictsRoutes);
app.use("/api", busRoutes);

// Define a simple root route
app.get("/", (req, res) => {
  res.send("<h1>Welcome To Reserve-bus</h1>");
});

// Define the port to listen on, using an environment variable or default to 3000
const PORT = process.env.PORT || 4000;

// Start the server
const serverStart = async () => {
  try {
    // Establish a connection to the MongoDB database
    connection(process.env.MONGODB_URI);

    // Start the Express server and listen on the specified port
    app.listen(PORT, () =>
      console.log("Server is running on port 4000"))
  } catch (error) {
    console.log(error)
  }
};

// Call the serverStart function to start the server
serverStart();
