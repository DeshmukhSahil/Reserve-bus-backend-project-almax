import tripsModel from "../models/tripsModel.js";

// Controller for creating trips
export const createtripsController = async (req, res) => {
  try {
    // Destructure data from the request body
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
    
    const Data = new tripsModel({
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
    });

    // Save the data to the database
    const saveData = await Data.save();

    // Send a success response with the saved data and a message
    res.status(200).json({ data: saveData, message: "Booking successful!" });
  } catch (error) {
    // Handle errors and send an error response
    res.status(500).json({ data: null, message: "Something went wrong!" });
  }
};
