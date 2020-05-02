const { GraphQLServer } = require('graphql-yoga');
const typeDefs = require('./schema/index');
const resolvers = require('./resolvers/rootResolver');
const server = new GraphQLServer({
  typeDefs,
  resolvers,
});
server.start(() => console.log(`server has started on port 4000 `));
