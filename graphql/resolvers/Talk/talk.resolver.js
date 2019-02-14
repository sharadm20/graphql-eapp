
import Talk from "../../../server/models/Talk";

export default {
  Query: {
    talk: async (parent, { _id }, context, info) => {
      return await Talk.find({ _id });
    },
    talks: async (parent, args, context, info) => {
      const res = await Talk.find({})
        .populate()
        .exec();

      return res.map(u => ({
        _id: u._id.toString(),
       title: u.title,
         description: u.description,
         link: u.link,
         date_published: u.date_published
      }));
    }
  },
  Mutation: {
    createTalk: async (parent, { talk }, context, info) => {
      const newTalk = await new Talk({
        title: talk.title,
          description: talk.description,
          link: talk.link,
          date_published: talk.date_published
      });

      return new Promise((resolve, reject) => {
        newTalk.save((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },
    updateTalk: async (parent, { _id, talk }, context, info) => {
      return new Promise((resolve, reject) => {
        Talk.findByIdAndUpdate(
          _id,
          { $set: { ...talk } },
          { new: true }
        ).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },
    deleteTalk: async (parent, { _id }, context, info) => {
      return new Promise((resolve, reject) => {
        Talk.findByIdAndDelete(_id).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    }
  }
};
