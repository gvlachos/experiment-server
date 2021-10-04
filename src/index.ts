import { ApolloServer } from "apollo-server";
import { typeDefs } from "./typedefs";
import { resolvers } from "./resolvers";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  mockEntireSchema: false
});

server.listen(4001).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
