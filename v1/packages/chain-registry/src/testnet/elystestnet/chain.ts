import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'elystestnet',
  status: 'live',
  network_type: 'testnet',
  pretty_name: 'Elys Network',
  chain_type: 'cosmos',
  chain_id: 'elysicstestnet-1',
  bech32_prefix: 'elys',
  daemon_name: 'elysd',
  node_home: '$HOME/.elys',
  key_algos: ['secp256k1'],
  slip44: 118,
  staking: {
    staking_tokens: [{
        denom: 'uelys'
      }],
    lock_duration: {
      time: '1209600s'
    }
  },
  fees: {
    fee_tokens: [{
        denom: 'uelys',
        fixed_min_gas_price: 0.01,
        low_gas_price: 0.01,
        average_gas_price: 0.025,
        high_gas_price: 0.03
      }]
  },
  codebase: {

  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.testnet.elys.network',
        provider: 'Elys Network'
      },
      {
        address: 'https://elys-testnet-rpc.itrocket.net:443',
        provider: 'itrocket'
      },
      {
        address: 'https://elys-testnet-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://elys-testnet-rpc.ibs.team:443',
        provider: 'Inter Blockchain Services'
      }
    ],
    rest: [
      {
        address: 'https://api.testnet.elys.network',
        provider: 'Elys Network'
      },
      {
        address: 'https://elys-testnet-api.itrocket.net',
        provider: 'itrocket'
      },
      {
        address: 'https://elys-testnet-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://elys-testnet-api.ibs.team:443',
        provider: 'Inter Blockchain Services'
      }
    ],
    grpc: []
  },
  explorers: [{
      kind: 'ping.pub',
      url: 'https://testnet.ping.pub/elys',
      tx_page: 'https://testnet.ping.pub/elys/tx/${txHash}',
      account_page: 'https://testnet.ping.pub/elys/account/${accountAddress}'
    }, {
      kind: 'itrocket',
      url: 'https://testnet.itrocket.net/elys',
      tx_page: 'https://testnet.itrocket.net/elys/staking/tx/${txHash}',
      account_page: 'https://testnet.itrocket.net/elys/account/${accountAddress}'
    }]
};
export default info;