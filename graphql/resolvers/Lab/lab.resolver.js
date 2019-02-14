
import Lab from "../../../server/models/Lab";

export default {
  Query: {
    lab: async (parent, { _id }, context, info) => {
      return await Lab.find({ _id });
    },
    labs: async (parent, args, context, info) => {
      const res = await Lab.find({})
        .exec();

      return res.map(u => ({
        _id: u._id.toString(),
        college: u.college,
        latitude: u.latitude,
        longitude: u.longitude
      }));
    }
  },
  Mutation: {
    createLab: async (parent, { lab }, context, info) => {
      const newLab = await new Lab({
        college: lab.college,
          latitude: lab.latitude,
          longitude: lab.longitude
      });

      return new Promise((resolve, reject) => {
        newLab.save((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },
    deleteLab: async (parent, { _id }, context, info) => {
      return new Promise((resolve, reject) => {
        Lab.findByIdAndDelete(_id).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    }
  }
};
