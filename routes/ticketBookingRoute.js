// Import the Express library
import express from "express";

// Import the TicketsbookingController and queryBookedTicketsController functions from the respective controller files
import { TicketsbookingController } from "../controllers/bookTicketsController.js";
import { queryBookedTicketsController } from "../controllers/getBookedTicketsController.js";

// Create an Express router
const router = express.Router();

// Define routes for booking a ticket and querying booked tickets
router.post("/bookticket", TicketsbookingController); // Route for booking a ticket
router.get("/getbookedtickets", queryBookedTicketsController); // Route for querying booked tickets

// Export the router to use in your application
export default router;
