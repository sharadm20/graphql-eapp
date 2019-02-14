import { mergeResolvers } from "merge-graphql-schemas";

import User from "./User/user.resolver";
import Profile from "./Profile/profile.resolver";
import College from "./College/college.resolver";
import State from "./State/state.resolver";
import Lab from "./Lab/lab.resolver";
import Talk from "./Talk/talk.resolver";
import Calendar from "./Calendar/calendar.resolver";

const resolvers = [User, College, Calendar, Talk, Lab, State, Profile];

export default mergeResolvers(resolvers);
