import { ApolloServer } from "apollo-server";
import { typeDef as Constants } from "./graphql/constants.graphql";
import { typeDef as Types } from "./graphql/types.graphql";
import { typeDef as Queries } from "./graphql/queries.graphql";
import { resolvers } from "./resolvers";

const server = new ApolloServer({
  typeDefs: [Constants, Types, Queries],
  resolvers,
  mockEntireSchema: false
});

server.listen(4000).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
