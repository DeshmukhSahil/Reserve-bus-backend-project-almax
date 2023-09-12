// Import the Express library
import express from "express";

// Import the getStatesDistricts function from the controller file
import { getStatesDistricts } from "../controllers/statesdistrictsController.js";

// Create an Express router
const router = express.Router();

// Define a route for getting states and districts data
router.get("/states_districts", getStatesDistricts);

// Export the router to use in your application
export default router;
