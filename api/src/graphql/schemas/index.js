const { GraphQLObjectType, GraphQLSchema } = require('graphql')
const { query: BridgeQuery } = require('./bridge.schema')

const query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    ...BridgeQuery
  }
})

module.exports = new GraphQLSchema({
  query
})