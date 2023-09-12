// Import the Express library
import express from "express";

// Import the controller functions from their respective controller files
import { createtripsController } from "../controllers/createTripsController.js";
import {
  gettripsController,
  dateTripsController,
  queryTripsController,
} from "../controllers/gettripsController.js";

// Create an Express router
const router = express.Router();

// Define routes for getting, posting, and querying trips
router.get("/gettrips", gettripsController); // Route for getting all trips
router.get("/tripsbydate", dateTripsController); // Route for getting trips by date
router.get("/tripsbyquery", queryTripsController); // Route for querying trips by various criteria
router.post("/posttrips", createtripsController); // Route for creating a new trip

// Export the router to use in your application
export default router;
