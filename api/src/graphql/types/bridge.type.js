const { GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLUnionType } = require('graphql')

let BridgeDiscoverySuccess = new GraphQLObjectType({
  name: 'BridgeDiscoverySuccess',
  fields: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    ip: { type: new GraphQLNonNull(GraphQLString) }
  }
})

let BridgeDiscoveryError = new GraphQLObjectType({
  name: 'BridgeDiscoveryError',
  fields: {
    message: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: new GraphQLNonNull(GraphQLString) }
  }
})

let BridgeDiscoveryResult = new GraphQLUnionType({
  name: 'BridgeDiscoveryResult',
  types: [BridgeDiscoverySuccess, BridgeDiscoveryError],
  resolveType(value) {
    if (value.name) return BridgeDiscoverySuccess.name
    else return BridgeDiscoveryError.name
  }
})

module.exports = {
  BridgeDiscoveryResult,
  BridgeDiscoverySuccess
}