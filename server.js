const { GraphQLServer } = require('graphql-yoga');
const DataStore = require('nedb'),
db = new DataStore({
    filename: 'db.json',
    autoload: true
});

const people = {
    find: (query) => new Promise((resolve, reject) =>
        db.find(query)
        .exec((err, docs) => {
            if (err) reject(err);
            return resolve(docs);
        })
    )
}

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
    info: () => `This is the API of Persons`,
    people: () => people.find({})
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