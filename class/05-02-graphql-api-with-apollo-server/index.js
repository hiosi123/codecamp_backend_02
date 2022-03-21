import {ApolloServer, gql} from 'apollo-server'


// The GraphQL schema
const typeDefs = gql`
  type Query {
    "A simple type for getting started!"
    hello: Int
    fetchBoardsCount: Int!
  }
`;

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    hello: () => 3,
  },
};


//서버
const server = new ApolloServer({
  typeDefs, //shorthand property 
  resolvers,
});

server.listen(3001).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});