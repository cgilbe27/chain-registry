import { IBCInfo } from '@chain-registry/types';
const info: IBCInfo[] = [{
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'osmosistestnet',
      client_id: '07-tendermint-3902',
      connection_id: 'connection-3027'
    },
    chain_2: {
      chain_name: 'symphonytestnet',
      client_id: '07-tendermint-1',
      connection_id: 'connection-3393'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-8686',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-0',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live',
          preferred: true,
          dex: 'osmosis'
        }
      }]
  }, {
    $schema: '../ibc_data.schema.json',
    chain_1: {
      chain_name: 'stargazetestnet',
      client_id: '07-tendermint-949',
      connection_id: 'connection-944'
    },
    chain_2: {
      chain_name: 'symphonytestnet',
      client_id: '07-tendermint-6',
      connection_id: 'connection-5'
    },
    channels: [{
        chain_1: {
          channel_id: 'channel-638',
          port_id: 'transfer'
        },
        chain_2: {
          channel_id: 'channel-2',
          port_id: 'transfer'
        },
        ordering: 'unordered',
        version: 'ics20-1',
        tags: {
          status: 'live'
        }
      }]
  }];
export default info;