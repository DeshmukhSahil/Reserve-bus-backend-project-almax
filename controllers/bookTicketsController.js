import ticketBookingModel from "../models/ticketBookingModel.js";

// Controller for handling ticket bookings
export const TicketsbookingController = async (req, res) => {
  try {
    // Destructure data from the request body
    const {
      passengerName,
      age,
      sex,
      mobileNumber,
      email,
      busName,
      from,
      to,
      date,
      startTime,
      EndTime
    } = req.body;

    // Create a new instance of the ticketBookingModel with the provided data
    const myData = new ticketBookingModel({
      passengerName,
      age,
      sex,
      mobileNumber,
      email,
      busName,
      from,
      to,
      date,
      startTime,
      EndTime
    });

    // Save the data to the database
    const saved = await myData.save();

    // Send a success response with the saved data and a message
    res.status(200).json({ data: myData, message: "Booking successful!" });
  } catch (error) {
    console.log(error);
    // Handle errors and send an error response
    res.status(500).send({
      success: false,
      message: "Something went wrong! Please try again.",
      error
    });
  }
};
