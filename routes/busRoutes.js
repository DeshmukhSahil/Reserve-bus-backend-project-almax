import express from "express";
import { busController,getbusController} from "../controllers/busOwnerController.js";

//router object
const router = express.Router();

//routing post booked Tickets

 router.post("/addbus", busController);
 router.get("/getbus", getbusController);
 
export default router;