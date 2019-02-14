import { mergeTypes } from "merge-graphql-schemas";

import User from "./User/user.type";
import Profile from "./Profile/profile.type";
import College from "./College/college.type";
import State from "./State/state.type";
import Lab from "./Lab/lab.type";
import Talk from "./Talk/talk.type";
import Calendar from "./Calendar/calendar.type";

const typeDefs = [User, College, Calendar, Talk, Lab, State, Profile];

// NOTE: 2nd param is optional, and defaults to false
// Only use if you have defined the same type multiple times in
// different files and wish to attempt merging them together.
export default mergeTypes(typeDefs, { all: true });
