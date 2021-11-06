const hue = require('node-hue-api')
const { discoverBridgesFast } = require('./bridge.service')

jest.mock('node-hue-api')

describe('Bridge service', () => {
  describe('discover bridges', () => {
    test('when bridge is found, return array with bridge data', () => {
      const data = [{ ipaddress: '192.168.0.1', config: { name: 'Philips hue' } }]
      hue.discovery.nupnpSearch.mockResolvedValue(data)
    
      const result = data.map(entry => {
        return {
          ip: entry.ipaddress,
          name: entry.config.name
        }
      })
      return expect(discoverBridgesFast()).resolves.toEqual(result)
    })

    test('when no bridge is found, return empty array', () => {
      hue.discovery.nupnpSearch.mockResolvedValue([])

      return expect(discoverBridgesFast()).resolves.toEqual([])
    })

    test('when a bridge was found but is offline, return array with error data', () => {
      const data = [{
        'error': {
          'message': 'An error message',
          'description': 'Failed to connect and load configuration from the bridge at ip address xxx.xxx.xxx.xxx',
          'ipaddress': 'xxx.xxx.xxx.xxx',
          'id': 'xxxxxxxxxxxxxxxx'
        }
      }]
      hue.discovery.nupnpSearch.mockResolvedValue(data)
    
      const result = data.map(entry => {
        return {
          message: entry.error.message,
          description: entry.error.description
        }
      })
      return expect(discoverBridgesFast()).resolves.toEqual(result)
    })
  })
})
