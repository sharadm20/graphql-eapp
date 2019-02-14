import College from "../../../server/models/College";

export default {
  Query: {
    college: async (parent, { _id }, context, info) => {
      return await College.find({ _id });
    },
    colleges: async (parent, args, context, info) => {
      const res = await College.find({})
        .exec();

      return res.map(u => ({
        _id: u._id.toString(),
        clg_code: u.clg_code,
        clg_name: u.clg_name,
        state: u.state,
        district: u.district,
        city: u.city,
        pincode: u.pincode,
        address: u.address,
        clg_type: u.clg_type,
        website: u.website
      }));
    },
    collegesByState: async (parent, {state}, context, info) => {
      const res = await College.find({state:state})
        .exec();

      return res.map(u => ({
        _id: u._id.toString(),
        clg_code: u.clg_code,
          clg_name: u.clg_name,
          state: u.state,
          district: u.district,
          city: u.city,
          pincode: u.pincode,
          address: u.address,
          clg_type: u.clg_type,
          website: u.website

      }));
    }
  },
  Mutation: {
    createCollege: async (parent, { college }, context, info) => {
      const newCollege = await new College({
            clg_code: college.clg_code,
              clg_name: college.clg_name,
              state: college.state,
              district: college.district,
              city: college.city,
              pincode: college.pincode,
              address: college.address,
              clg_type: college.clg_type,
              website: college.website
      });

      return new Promise((resolve, reject) => {
        newCollege.save((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },
    updateCollege: async (parent, { _id, college }, context, info) => {
      return new Promise((resolve, reject) => {
        College.findByIdAndUpdate(
          _id,
          { $set: { ...college } },
          { new: true }
        ).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },
    deleteCollege: async (parent, { _id }, context, info) => {
      return new Promise((resolve, reject) => {
        College.findByIdAndDelete(_id).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    }
  },
};
