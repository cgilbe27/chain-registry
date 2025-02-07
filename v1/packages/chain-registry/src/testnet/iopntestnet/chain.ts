import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'iopntestnet',
  status: 'live',
  website: 'https://iopn.tech/',
  network_type: 'testnet',
  chain_type: 'cosmos',
  pretty_name: 'Iopn',
  chain_id: 'iopn_984-1',
  bech32_prefix: 'gwei',
  daemon_name: 'iopnd',
  node_home: '$HOME/.iopnd',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'gwei',
        fixed_min_gas_price: 0,
        low_gas_price: 0,
        average_gas_price: 0.025,
        high_gas_price: 0.04
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'gwei'
      }],
    lock_duration: {
      time: '1209600s'
    }
  },
  codebase: {

  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/iopntestnet/images/iopn_Dark.png'
    }],
  apis: {
    rpc: [{
        address: 'https://testnet-rpc.iopn.tech/',
        provider: 'iopn'
      }],
    rest: [{
        address: 'https://testnet-rpc2.iopn.tech/',
        provider: 'iopn'
      }]
  },
  explorers: [{
      kind: 'explorer',
      url: 'https://testnet.iopn.tech/'
    }],
  keywords: ['dex']
};
export default info;