import mongoose from "mongoose";
import { ObjectID } from "mongodb";

const Schema = mongoose.Schema;

ObjectID.prototype.valueOf = function() {
  return this.toString();
};

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  userid: {
    type: String,
    unique:true
  },
  password:{
    type: String
  },
  imageurl:{
    type: String
  },
  profile: 
    {
      type: Schema.Types.ObjectId,
      ref: "Profile"
    }
});

export default mongoose.model("User", UserSchema);
