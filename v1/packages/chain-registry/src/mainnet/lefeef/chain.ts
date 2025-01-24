import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'lefeef',
  chain_type: 'cosmos',
  chain_id: 'lefeef-mainnet',
  website: 'https://lefeef.net/',
  pretty_name: 'lefeef',
  status: 'live',
  network_type: 'mainnet',
  bech32_prefix: 'lefeef',
  daemon_name: 'lefeefd',
  node_home: '$HOME/..lefeef',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'ulefeef',
        fixed_min_gas_price: 0.01,
        low_gas_price: 0.01,
        average_gas_price: 0.025,
        high_gas_price: 0.03
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'ulefeef'
      }]
  },
  codebase: {

  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lefeef/images/chain.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lefeef/images/chain.svg'
  },
  description: 'A secure, scalable blockchain empowering seamless dApps and efficient token transactions.',
  apis: {
    rpc: [{
        address: 'https://rpc.lefeef.network:2443/',
        provider: 'LEFEEF Chain'
      }],
    rest: [{
        address: 'https://rest.lefeef.network:3443/',
        provider: 'LEFEEF Chain'
      }],
    grpc: [{
        address: '85.209.95.59:9090',
        provider: 'LEFEEF Chain'
      }]
  },
  explorers: [{
      kind: 'bigdipper',
      url: 'https://mainnet.lefeef.network/lefeef',
      tx_page: 'https://mainnet.lefeef.network/lefeef/transactions/${txHash}',
      account_page: 'https://mainnet.lefeef.network/lefeef/accounts/${accountAddress}',
      validator_page: 'https://mainnet.lefeef.network/lefeef/validators/${validatorAddress}',
      proposal_page: 'https://mainnet.lefeef.network/lefeef/proposals/${proposalId}',
      block_page: 'https://mainnet.lefeef.network/lefeef/blocks/${blockHeight}'
    }],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lefeef/images/chain.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/lefeef/images/chain.svg',
      theme: {
        primary_color_hex: '#6439ff'
      }
    }]
};
export default info;