const path = require('path');
const { GraphQLServer } = require('graphql-yoga');

const data = require('./db/index');

const resolvers = {
  Query: {
    info: () => `This is the API of Persons`,
    people: (root, args, context) => {
      const argsJSON = JSON.parse(JSON.stringify(args));

      //transform the passed graphql age input to a json object that is understandable by nedb to filter by age
      if (argsJSON.age) {
        switch(argsJSON.age.operator) {
          case "LT":
            argsJSON.age = {
              $lt: args.age.value
            }
            break;
          case "LTE":
            argsJSON.age = {
              $lte: args.age.value
            }
            break;
          case "GT":
            argsJSON.age = {
              $gt: args.age.value
            }
            break;
          case "GTE":
            argsJSON.age = {
              $gte: args.age.value
            }
            break;
          case "EQ":
            argsJSON.age = args.age.value
            break;
        }
      }
      return data.find(argsJSON);
    }
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