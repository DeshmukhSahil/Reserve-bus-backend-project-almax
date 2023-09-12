import mongoose from "mongoose";

const tripsSchema = new mongoose.Schema(
  {
    date: { type: Date, required: true },
    from: { type: String, required: true },
    to: { type: String, required: true },
    busOwnerID: { type: Number, required: true },
    startTime: { type: String, required: true },
    EndTime: { type: String, required: true },
    category: { type: String, required: true },
    SeatBooked: { type: Number, required: true },
    bus_no: { type: String },
    amenities_list: { type: [String], required: true },
    busFare: { type: Number, required: true },
    busName: { type: String, required: true }
  },
);

export default mongoose.model("trips", tripsSchema);
