import tripsModel from "../models/tripsModel.js";

// Controller for retrieving all trips
export const gettripsController = async (req, res) => {
  const Data = await tripsModel.find();
  if (Data.length === 0) {
    res.status(200).json({ data: null, message: "No trips are found" });
  } else {
    res.status(200).json({ data: Data });
  }
}

// Controller for retrieving trips by date
export const dateTripsController = async (req, res) => {
  try {
    // Destructure query parameters from the request
    const { date } = req.query;

    // Query the database to find all trips matching the given date
    const trips = await tripsModel.find({ date: date });
    if (trips.length === 0) {
      res.status(200).json({ data: null, message: "No trips are found" });
    }
    res.status(200).json({ data: trips, message: "Trips found successfully" });

  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Something went wrong! Please try again.",
      error,
    });
  }
}

// Controller for querying trips based on various criteria
export const queryTripsController = async (req, res) => {
  try {
    // Destructure query parameters from the request
    const { date, from, to, startTime, EndTime, busName } = req.query;

    // Initialize an empty filter object
    const filter = {};

    // Populate the filter object based on the provided query parameters
    if (date) {
      filter.date = date;
    }

    if (from) {
      filter.from = from;
    }

    if (to) {
      filter.to = to;
    }

    if (EndTime) {
      filter.EndTime = EndTime;
    }

    if (startTime) {
      filter.startTime = startTime;
    }

    if (busName) {
      filter.busName = busName;
    }

    // Query the tripsModel with the constructed filter
    const trips = await tripsModel.find(filter);

    if (trips.length === 0) {
      return res.status(200).json({ data: null, message: "No trips are found" });
    }

    res.status(200).json({
      success: true,
      message: 'Trip details fetched successfully',
      data: trips
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Something went wrong! Please try again.",
      error,
    });
  }
}
