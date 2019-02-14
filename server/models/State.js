import mongoose from "mongoose";
import { ObjectID } from "mongodb";

const Schema = mongoose.Schema;

ObjectID.prototype.valueOf = function() {
  return this.toString();
};

const StateSchema = new Schema({
  name: String,
    abbvr: String

});

export default mongoose.model("State", StateSchema, 'states');
