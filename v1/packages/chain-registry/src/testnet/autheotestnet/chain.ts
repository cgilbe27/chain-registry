import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'autheotestnet',
  status: 'live',
  website: 'https://autheo.com/',
  network_type: 'testnet',
  chain_type: 'cosmos',
  pretty_name: 'Autheo',
  chain_id: 'autheo_785-1',
  bech32_prefix: 'aauth',
  daemon_name: 'autheod',
  node_home: '$HOME/.autheod',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'aauth',
        fixed_min_gas_price: 0,
        low_gas_price: 0,
        average_gas_price: 0.025,
        high_gas_price: 0.04
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'aauth'
      }],
    lock_duration: {
      time: '1209600s'
    }
  },
  codebase: {

  },
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/autheotestnet/images/autheo_logo.png'
    }],
  apis: {
    rpc: [{
        address: 'https://testnet-rpc1.autheo.com/',
        provider: 'autheo'
      }],
    rest: [{
        address: 'https://testnet-rpc2.autheo.com/',
        provider: 'autheo'
      }]
  },
  explorers: [{
      kind: 'explorer',
      url: 'https://testnet-explorer.autheo.com/'
    }],
  keywords: ['dex']
};
export default info;