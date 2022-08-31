const Video = require("../models/Video");

module.exports = {
  Query: {
    async video(_, { ID }) {
      return await Video.findById(ID);
    },
    async getVideos() {
      return await Video.find();
    },
  },

  Mutation: {
    async createVideo(_, { videoInput: { title, src } }) {
      const createdVideo = new Video({
        title: title,
        src: src,
        createdAt: new Date().toISOString(),
      });
      const res = await createdVideo.save(); // MondoDb saving
      // console.log(res._doc)
      return {
        id: res.id,
        ...res._doc,
      };
    },
    async deleteVideo(_, { ID }) {
      const wasDeleted = (await Video.deleteOne({ _id: ID })).deletedCount;
      return wasDeleted; // 1 if something was deleted, 0 if noting was deleted
    },
    async editVideo(_, { ID, videoInput: { title, src } }) {
      const wasEdited = (
        await Video.updateOne({ _id: ID }, { title: title, src: src })
      ).modifiedCount;
      return wasEdited; // 1 if something was edited, 0 if noting was edited
    },
  },
};
