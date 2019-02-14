import { makeExecutableSchema } from "graphql-tools";
import GraphQLJSON from 'graphql-type-json';
import typeDefs from "./types";
import resolvers from "./resolvers";

const resolveFunctions = {
  JSON: GraphQLJSON
};
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
  resolveFunctions
});

export default schema;
