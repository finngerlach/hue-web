const { discoverBridgesFast, discoverBridgesSlow } = require('../../services/bridge.service')
const { BridgeDiscoveryResult, BridgeDiscoverySuccess } = require('../types/bridge.type')
const { GraphQLNonNull, GraphQLList } = require('graphql')

module.exports = {
  query: {
    discoverBridgesFast: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(BridgeDiscoveryResult))),
      resolve: async () => {
        return discoverBridgesFast()
      }
    },
    discoverBridgesSlow: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(BridgeDiscoverySuccess))),
      resolve: async () => {
        return discoverBridgesSlow()
      }
    }
  }
}