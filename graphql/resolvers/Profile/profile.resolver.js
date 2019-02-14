
import Profile from "../../../server/models/Profile";


export default {
  Query: {
    profile: async (parent, { _id }, context, info) => {
      return await Profile.findOne({ _id }).exec();
    },
    profiles: async (parent, args, context, info) => {
      const res = await Profile.find({})
        .exec();

      return res.map(u => ({
        _id: u._id.toString(),
        type: u.type,
        contact: u.contact,
        dob: u.dob,
        educations: u.educations,
        experiences: u.experiences,
        loaction:u.location
      }));
    }
  },
  Mutation: {
    createProfile: async (parent, { profile }, context, info) => {
      const newProfile = await new Profile({
        type: profile.type,
          contact: profile.contact,
          dob: profile.dob,
          educations: profile.educations,
          experiences: profile.experiences,
          loaction: profile.location
      });

      return new Promise((resolve, reject) => {
        newProfile.save((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },
    updateProfile: async (parent, { _id, profile }, context, info) => {
      return new Promise((resolve, reject) => {
        Profile.findByIdAndUpdate(_id, { $set: { ...profile } }, { new: true }).exec(
          (err, res) => {
            err ? reject(err) : resolve(res);
          }
        );
      });
    },
    deleteProfile: (parent, { _id }, context, info) => {
      return new Promise((resolve, reject) => {
        Profile.findByIdAndDelete(_id).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    }
  }
};
