import { gql } from '@urql/vue'

const discoverBridgesFast = gql`
query {
  discoverBridgesFast {
    ... on BridgeDiscoverySuccess {
      name
      ip
    }
    ... on BridgeDiscoveryError {
      message
    }
  }
}`

const discoverBridgesSlow = gql`
query {
  discoverBridgesSlow {
    name
    ip
  }
}`

export {
  discoverBridgesFast,
  discoverBridgesSlow
}