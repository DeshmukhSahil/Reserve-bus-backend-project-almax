import mongoose from "mongoose";

const busownerSchema = new mongoose.Schema(
{
    name: {type:String,
        required: true},
    category: {type:String,
        required:true},
    totalSeats: {type:Number,
        required:true},
    totalWindowSeatsAvailable:{type:Number,
        required:true},
    rating: {type:Number,
        required:true},
    animeties: {type:Array,
        required:true}
});
export default mongoose.model("bus_owners", busownerSchema);