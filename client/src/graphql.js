import { dedupExchange, cacheExchange, fetchExchange, createClient } from '@urql/vue'

export default createClient({
  url: '/api/graphql',
  exchanges: [
    dedupExchange,
    cacheExchange,
    fetchExchange
  ]
})