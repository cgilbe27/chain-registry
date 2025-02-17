import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'manifestdevnet',
  status: 'live',
  network_type: 'devnet',
  website: 'https://liftedinit.org/',
  pretty_name: 'Manifest Devnet',
  chain_id: 'manifest-ledger-qa',
  chain_type: 'cosmos',
  bech32_prefix: 'manifest',
  daemon_name: 'manifest',
  node_home: '$HOME/.manifest',
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'umfx',
        fixed_min_gas_price: 0.001,
        low_gas_price: 0.01,
        average_gas_price: 0.02,
        high_gas_price: 0.1
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'upoa'
      }]
  },
  codebase: {

  },
  apis: {
    rpc: [{
        address: 'https://nodes.liftedinit.tech/manifest/qa/rpc',
        provider: 'The Lifted Initiative'
      }],
    rest: [{
        address: 'https://nodes.liftedinit.tech/manifest/qa/api',
        provider: 'The Lifted Initiative'
      }],
    grpc: [{
        address: 'https://manifest-qa-grpc.liftedinit.tech',
        provider: 'The Lifted Initiative'
      }]
  },
  explorers: [{
      kind: 'Default Explorer',
      url: 'https://testnet.manifest.explorers.guru/',
      tx_page: 'https://testnet.manifest.explorers.guru/transactions'
    }],
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg'
  },
  images: [{
      image_sync: {
        chain_name: 'manifestdevnet'
      },
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/manifesttestnet/images/manifest.svg',
      theme: {
        primary_color_hex: '#A087FF'
      }
    }]
};
export default info;