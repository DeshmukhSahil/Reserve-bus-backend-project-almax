import ticketBookingModel from "../models/ticketBookingModel.js";

//get tickets by query

export const queryBookedTicketsController = async (req, res) => {
    try {
    const { passengerName, age, sex, mobileNumber, email, busName, from, to, date, startTime, EndTime } = req.query;

    // Build the filter object based on the provided parameters
    const filter = {};

    if (passengerName) {
      filter.passengerName = passengerName;
    }

    if (age) {
      filter.age = age;
    }

    if (sex) {
      filter.sex = sex;
    }

    if (mobileNumber) {
      filter.mobileNumber = mobileNumber;
    }

    if (email) {
      filter.email = email;
    }

    if (busName) {
      filter.busName = busName;
    }

    if (from) {
      filter.from=from;
    }

    if (to) {
      filter.to=to;
    }

    if (date) {
      filter.date = date;
    }

    if (startTime) {
      filter.startTime = startTime;
    }

    if (EndTime) {
      filter.EndTime = EndTime;
    }

    // Query the database using the constructed filter object
    const trips = await ticketBookingModel.find(filter);

    
     if(trips.length === 0){
       return res.status(200).json({ data: null, message: "No tickets are found" });
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
      message: "Something went wrong!. Please try again.",
      error,
    });
  }

} 
