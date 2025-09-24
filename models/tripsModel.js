// models/tripsModel.js
import mongoose from "mongoose";
const { Schema } = mongoose;

console.log("Loading tripsModel schema"); // quick sanity-print when file is imported

const tripsSchema = new Schema(
  {
    date: { type: Date, required: true },
    from: { type: String, required: true },
    to: { type: String, required: true },

    // keep busOwnerID as string (you said you use strings)
    busOwnerID: { type: String, required: true },

    startTime: { type: String, required: true },
    EndTime: { type: String, required: true },

    // category optional
    category: { type: String },

    // SeatBooked as an array of seat identifiers (strings)
    SeatBooked: { type: [String], default: [] },

    bus_no: { type: String },

    amenities_list: { type: [String], default: [] },

    busFare: { type: Number, default: 0 },
    busName: { type: String }
  },
  { timestamps: true }
);

export default mongoose.models.trips || mongoose.model("trips", tripsSchema);
