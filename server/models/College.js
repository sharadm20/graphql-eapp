import mongoose from "mongoose";
import { ObjectID } from "mongodb";

const Schema = mongoose.Schema;

ObjectID.prototype.valueOf = function() {
  return this.toString();
};

const CollegeSchema = new Schema({
    clg_code: {
          type:String,
          unique:true
      },
      clg_name: String,
      state: String,
      district: String,
      city: String,
      pincode: Number,
      address: String,
      clg_type: Number,
      website: String
});

export default mongoose.model("College", CollegeSchema,'college_list');
