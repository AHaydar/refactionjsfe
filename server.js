const { GraphQLServer } = require('graphql-yoga');

const data = require('./db/index');

const typeDefs = `
    type Query {
        info: String!
        people: [Person!]!
    }

    type Person {
        id: ID!
        name: String!
        age: Int!
    }
`;

const resolvers = {
  Query: {
    info: () => 'This is the API of Persons',
    people: () => data.find(),
  },
  Person: {
    id: parent => parent.id,
    name: parent => parent.name,
    age: parent => parent.age,
  },
};

const server = new GraphQLServer({
  typeDefs,
  resolvers,
});

server.start(() => console.log('GraphQL Server is running on http://localhost:4000'));
