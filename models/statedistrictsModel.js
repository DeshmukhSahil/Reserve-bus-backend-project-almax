import mongoose from "mongoose";

const statesdistrictsSchema = new mongoose.Schema({
 
 state: {
    type: String
    
  },
  districts: {
    type: [String]
    
  }

});

export default mongoose.model('state_districts', statesdistrictsSchema);
