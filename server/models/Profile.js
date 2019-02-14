import mongoose from "mongoose";
import { ObjectID } from "mongodb";

const Schema = mongoose.Schema;

ObjectID.prototype.valueOf = function() {
  return this.toString();
};

const ProfileSchema = new Schema({
         type: {
             type: String,
             enum: ['Student', 'Professional', 'Faculty']
           },
           contact: Number,
           dob: Date,
           educations: [{
             college: String,
             yearOfPassing: Date,
             branch: String,
             degree: String
           }],
           experiences: [{
             designation: String,
             department: String,
             role: String,
             company: String,
             joined: Date,
             left: Date
           }],
           location: {
             address1: String,
             address2: String,
             district: String,
             pincode: String,
             state: String
           }
});

export default mongoose.model("Profile", ProfileSchema);
