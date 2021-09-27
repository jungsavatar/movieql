/*
// test test 
import { GraphQLServer } from 'graphql-yoga'
const typeDefs = `
  type Query {
    hello(name: String): String!
  }
`

const resolvers = {
  Query: {
    hello: (_, { name }) => `Hello ${name || 'World'}`,
  },
}

const server = new GraphQLServer({ typeDefs, resolvers })
server.start(() => console.log('Server is running on localhost:4000'))
*/


 import { GraphQLServer } from "graphql-yoga";
 import resolvers from "./graphql/resolvers";
 const server = new GraphQLServer({
    typeDefs:"graphql/schema.graphql",
    resolvers
 });

 server.start(() => console.log("GraphQL Server Run ning"));
