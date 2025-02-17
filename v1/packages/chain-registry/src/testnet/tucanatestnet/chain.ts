import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'tucanatestnet',
  status: 'live',
  network_type: 'testnet',
  pretty_name: 'Tucana Testnet',
  chain_type: 'cosmos',
  chain_id: 'tucana_712-1',
  bech32_prefix: 'tuc',
  daemon_name: 'tucanad',
  node_home: '$HOME/.tucanad',
  key_algos: ['ethsecp256k1'],
  extra_codecs: ['ethermint'],
  slip44: 60,
  fees: {
    fee_tokens: [{
        denom: 'atuc',
        fixed_min_gas_price: 5000000000,
        low_gas_price: 10000000000,
        average_gas_price: 25000000000,
        high_gas_price: 30000000000
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'atuc'
      }]
  },
  codebase: {

  },
  apis: {
    rpc: [{
        address: 'https://rpc.birdee-2.tucana.zone/',
        provider: 'Tucana'
      }],
    rest: [{
        address: 'https://lcd.birdee-2.tucana.zone/',
        provider: 'Tucana'
      }],
    grpc: []
  },
  explorers: [{
      kind: 'Blockscout',
      url: 'https://explorer.birdee-2.tucana.zone/',
      tx_page: 'https://explorer.birdee-2.tucana.zone/tx/${txHash}'
    }]
};
export default info;