import busOwnerModel from "../models/busOwnerModel.js";

// Post bus
export const busController = async (req, res) => {
try {
     const {name, category, totalSeats, totalWindowSeatsAvailable, rating, animeties} = req.body; 

  //  here we are creating a new instance of the booking schema with the help of  data
  const myData = new busOwnerModel({name, category, totalSeats, totalWindowSeatsAvailable, rating, animeties});

  // now we saving the new booking data to database
  const saved = await myData.save();

 
    // when the booking is successull the success message with the data is send
    res.status(200).json({ data: myData, message: "Bus Data Added Successfully!" });

    
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Something went wrong!. Please try again.",
      error,
    });
  }


    
}
// Get all buses
export const getbusController = async (req, res) => {
    const Data = await busOwnerModel.find(); // finding the most recent booking from database
    if (Data.length === 0) {
      // if no booking data is found send a response with a null data and a message
      res.status(200).json({ data: null, message: "No buses found" });
    } else {
      // if booking data is found send a success response with the booking data
      res.status(200).json({ data: Data });
    }
  
  }


//get buses by query


export const queryBusController = async (req, res) => {
    try {
    const { category, totalSeats, rating} = req.query;

    const filter = {};

    if (category) {
      filter.category = category;
    }

    if (totalSeats) {
      filter.totalSeats = totalSeats;
    }

    if (rating) {
      filter.rating = rating;
    }


    const buses = await busOwnerModel.find(filter);

    
     if(buses.length === 0){
       return res.status(200).json({ data: null, message: "No bus data found" });
    }

    res.status(200).json({
      success: true,
      message: 'Bus data fetched successfully',
      data: buses,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Something went wrong!. Please try again.",
      error,
    });
  }

};
