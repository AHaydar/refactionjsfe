const { GraphQLServer } = require('graphql-yoga');
const DataStore = require('nedb'),
db = new DataStore({
    filename: 'db.json',
    autoload: true
});

let persons;
db.find({}, (err, docs) => {
     persons = docs;
});

const typeDefs = `
    type Query {
        info: String!
        persons: [Person!]!
    }

    type Person {
        id: ID!
        name: String!
        age: Int!
    }
`;

const resolvers = {
  Query: {
    info: () => `This is the API of Persons`,
    persons: () => persons,
  },
  Person: {
    id: (parent) => parent._id,
    name: (parent) => parent.name,
    age: (parent) => parent.age,
  }
};

const server = new GraphQLServer({
    typeDefs,
    resolvers,
})

server.start(() => console.log(`GraphQL Server is running on http://localhost:4000`));