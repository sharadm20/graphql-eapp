import mongoose from "mongoose";
import { ObjectID } from "mongodb";

const Schema = mongoose.Schema;

ObjectID.prototype.valueOf = function() {
  return this.toString();
};

const TalkSchema = new Schema({
    title: String,
     description: String,
     link: String,
     date_published: Date
});

export default mongoose.model("Talk", TalkSchema);
