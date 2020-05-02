const { testMutation } = require('./mutations/Test');
const { testQuery } = require('./queries/Test');
const index = {
  Query: {
    ...testQuery,
  },
  Mutation: {
    ...testMutation,
  },
};
module.exports = index;
