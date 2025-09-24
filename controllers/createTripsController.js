import mongoose from "mongoose"; // you may keep import if used elsewhere
import tripsModel from "../models/tripsModel.js";

export const createtripsController = async (req, res) => {
  try {
    console.log("POST /api/posttrips - req.body:", JSON.stringify(req.body, null, 2));

    const {
      date,
      from,
      to,
      busOwnerID,
      startTime,
      EndTime,
      category,
      SeatBooked,
      bus_no,
      amenities_list,
      busFare,
      busName
    } = req.body;

    if (!date || !from || !to || !busOwnerID || !startTime || !EndTime) {
      return res.status(400).json({
        data: null,
        message: "Missing required fields: date/from/to/busOwnerID/startTime/EndTime"
      });
    }

    // No ObjectId casting — keep busOwnerID as string
    const tripDoc = new tripsModel({
      date: new Date(date),
      from,
      to,
      busOwnerID: String(busOwnerID),
      startTime,
      EndTime,
      category,
      SeatBooked: Array.isArray(SeatBooked) ? SeatBooked : (SeatBooked ? [String(SeatBooked)] : []),
      bus_no,
      amenities_list: Array.isArray(amenities_list) ? amenities_list : (amenities_list ? [String(amenities_list)] : []),
      busFare: busFare !== undefined ? Number(busFare) : undefined,
      busName
    });

    const saved = await tripDoc.save();
    console.log("Trip saved:", saved._id);
    return res.status(201).json({ data: saved, message: "Booking successful!" });
  } catch (error) {
    console.error("createtripsController ERROR:", error);
    if (error && error.name === "ValidationError") {
      const details = Object.keys(error.errors).reduce((acc, k) => {
        acc[k] = error.errors[k].message;
        return acc;
      }, {});
      return res.status(400).json({ data: null, message: "Validation failed", details });
    }
    if (error && error.name === "CastError") {
      return res.status(400).json({ data: null, message: `Cast error: ${error.message}` });
    }
    return res.status(500).json({ data: null, message: error.message || "Something went wrong!" });
  }
};
