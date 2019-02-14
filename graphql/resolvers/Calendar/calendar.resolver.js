
import Calendar from "../../../server/models/Calendar";

export default {
  Query: {
    calendar: async (parent, { _id }, context, info) => {
      return await Calendar.find({ _id });
    },
    calendars: async (parent, args, context, info) => {
      const res = await Calendar.find({})
        .exec();

      return res.map(u => ({
        _id: u._id.toString(),
        event: u.event,
        date: u.date,
      }));
    }
  },
  Mutation: {
    createCalendar: async (parent, { calendar }, context, info) => {
      const newCalendar = await new Calendar({
        event: calendar.event,
        date: calendar.date
      });

      return new Promise((resolve, reject) => {
        newCalendar.save((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },
    updateCalendar: async (parent, { _id, calendar }, context, info) => {
      return new Promise((resolve, reject) => {
        Calendar.findByIdAndUpdate(
          _id,
          { $set: { ...calendar } },
          { new: true }
        ).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },
    deleteCalendar: async (parent, { _id }, context, info) => {
      return new Promise((resolve, reject) => {
        Calendar.findByIdAndDelete(_id).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    }
  }
};
