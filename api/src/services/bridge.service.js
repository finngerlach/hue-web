const hue = require('node-hue-api')

module.exports = {
  async discoverBridgesFast() {
    const results = await hue.discovery.nupnpSearch()

    return results.map(entry => {
      if (entry.config) return {
        name: entry.config.name,
        ip: entry.ipaddress
      }
      else return {
        message: entry.error.message,
        description: entry.error.description
      }
    })
  },

  async discoverBridgesSlow() {
    const results = await hue.discovery.upnpSearch()

    return results.map(entry => {
      return {
        name: entry.name,
        ip: entry.ipaddress
      }
    })
  }
}