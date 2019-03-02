const path = require('path');
const { GraphQLServer } = require('graphql-yoga');

const data = require('./db/index');

const resolvers = {
  Query: {
    info: () => `This is the API of Persons`,
    people: (root, args, context) => data.find(args)
  },
  Person: {
    id: (parent) => parent._id,
  }
};

const server = new GraphQLServer({
    typeDefs: path.resolve('src','schema.graphql'),
    resolvers,
})

server.start(() => console.log(`GraphQL Server is running on http://localhost:4000`));