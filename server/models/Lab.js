import mongoose from "mongoose";
import { ObjectID } from "mongodb";

const Schema = mongoose.Schema;

ObjectID.prototype.valueOf = function() {
  return this.toString();
};

const LabSchema = new Schema({
      college: String,
        latitude: String,
        longitude: String
});

export default mongoose.model("Lab", LabSchema);
