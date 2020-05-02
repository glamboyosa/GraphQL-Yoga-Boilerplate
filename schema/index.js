const typeDefs = `
type Test {
    name: String!
    lastName: String!
    phoneNumber: String!
}
type Query {
    test: [Test!]!
}
type Mutation {
    addUserDetails(name: String!, lastName: String!, phoneNumber: String!): Test!
}
`;
module.exports = typeDefs;
