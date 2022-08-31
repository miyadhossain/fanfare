const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const MONGODB = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.ube8o.mongodb.net/?retryWrites=true&w=majority`;

const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

mongoose
  .connect(MONGODB, { useNewUrlParser: true })
  .then(() => {
    console.log("MongoDb connection successfull");
    return server.listen({ port: 5000 });
  })
  .then((res) => {
    console.log(`server running at ${res.url}`);
  });
