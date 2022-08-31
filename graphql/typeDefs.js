const { gql } = require("apollo-server");

module.exports = gql`
  type Video {
    title: String
    src: String
    createdAt: String
  }

  input VideoInput {
    title: String
    src: String
  }

  type Query {
    video(ID: ID!): Video!
    getVideos: [Video]
  }

  type Mutation {
    createVideo(videoInput: VideoInput): Video!
    deleteVideo(ID: ID!): Boolean
    editVideo(ID: ID!, videoInput: VideoInput): Boolean
  }
`;
