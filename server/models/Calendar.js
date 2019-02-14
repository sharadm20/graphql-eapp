import mongoose from "mongoose";
import { ObjectID } from "mongodb";

const Schema = mongoose.Schema;

ObjectID.prototype.valueOf = function() {
  return this.toString();
};

const CalendarSchema = new Schema({
     event: String,
       date: Date
});

export default mongoose.model("Calendar", CalendarSchema);
