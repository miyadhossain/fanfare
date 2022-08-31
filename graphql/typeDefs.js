const { gql } = require("apollo-server");
//Queries
const typeDefs = gql`
  type Video {
    id: ID
    title: String
    src: String
  }
  type Query {
    hello: String
    getAllVideos: [Video]
  }
  input VideoInput {
    title: String
    src: String
  }
  type Mutation {
    createVideo(video: VideoInput): Video
    updateVideo(id: String, video: VideoInput): Video
    deleteVideo(id: String): String
  }
`;

module.exports = typeDefs;
