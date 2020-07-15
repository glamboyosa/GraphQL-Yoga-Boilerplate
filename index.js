const { GraphQLServer } = require('graphql-yoga');
const typeDefs = require('./schema/index');
const resolvers = require('./resolvers/rootResolver');
const middlewareFunction = require('./middleware/middleware');
const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context: ({ request: req, response: res }) => ({ req, res }),
});
// express middleware
server.express.use(middlewareFunction);
server.start(() => console.log(`server has started on port 4000 `));
