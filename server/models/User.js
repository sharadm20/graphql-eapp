import mongoose from "mongoose";
import { ObjectID } from "mongodb";

const Schema = mongoose.Schema;

ObjectID.prototype.valueOf = function() {
  return this.toString();
};

const UserSchema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String,
    unique: true,
    sparse: true,
    required: true
  },
  userid: {
    type: String,
    unique:true,
    sparse: true
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
