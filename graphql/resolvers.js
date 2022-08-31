const Video = require("../models/Video");

//Resolvers
const resolvers = {
  Query: {
    hello: () => {
      return "Hello World";
    },
    getAllVideos: async () => {
      return await Video.find();
    },
  },
  Mutation: {
    createVideo: async (parent, args, context, info) => {
      const { title, src } = args.video;
      const video = await new Video({ title, src }).save();
      return video;
    },
    updateVideo: async (parent, args, context, info) => {
      const { id } = args;
      const { title, src } = args.video;
      const video = await Video.findByIdAndUpdate(
        id,
        { title, src },
        { new: true }
      );
      return video;
    },
    deleteVideo: async (parent, args, context, info) => {
      const { id } = args;
      await Video.findByIdAndDelete(id);
      return "Deleted";
    },
  },
};
module.exports = resolvers;
