
import State from "../../../server/models/State";

export default {
  Query: {

    states: async (parent, args, context, info) => {
      const res = await State.find({})
        .populate()
        .exec();

      return res.map(u => ({
        _id: u._id.toString(),
        name: u.name,
        abbvr: u.abbvr,
      }));
    }
  }
};
