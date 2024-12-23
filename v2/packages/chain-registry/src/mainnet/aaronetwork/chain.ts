import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'aaronetwork',
  status: 'live',
  networkType: 'mainnet',
  chainType: 'cosmos',
  website: 'https://aaronetwork.xyz',
  prettyName: 'Aaron Network',
  chainId: 'aaronetwork',
  bech32Prefix: 'aaron',
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uaaron',
        fixedMinGasPrice: 0,
        lowGasPrice: 0,
        averageGasPrice: 0,
        highGasPrice: 0.001
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uaaron'
      }],
    lockDuration: {
      time: '86400s'
    }
  },
  codebase: {
    gitRepo: 'https://github.com/aaronetwork/aaronetwork-chain',
    recommendedVersion: 'v1.0.0',
    compatibleVersions: ['v1.0.0'],
    genesis: {
      genesisUrl: 'https://raw.githubusercontent.com/aaronetwork/chain-genesis/refs/heads/main/genesis.json'
    }
  },
  apis: {
    rpc: [
      {
        address: 'https://mainnet-rpc.aaronetwork.xyz',
        provider: 'Aaron Network Foundation'
      },
      {
        address: 'https://aaronetwork_mainnet_rpc.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      },
      {
        address: 'https://aaron.rpc.nodeshub.online',
        provider: 'NodesHub'
      }
    ],
    rest: [
      {
        address: 'https://mainnet-api.aaronetwork.xyz',
        provider: 'Aaron Network Foundation'
      },
      {
        address: 'https://aaronetwork_mainnet_api.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      },
      {
        address: 'https://aaron.api.nodeshub.online',
        provider: 'NodesHub'
      }
    ]
  },
  explorers: [
    {
      kind: 'Ping.pub',
      url: 'https://ping.pub/Aaron%20Network',
      txPage: 'https://ping.pub/Aaron%20Network/tx/${txHash}',
      accountPage: 'https://ping.pub/Aaron%20Network/account/${accountAddress}'
    },
    {
      kind: 'Aaron Network',
      url: 'https://explorer.aaronetwork.xyz',
      txPage: 'https://explorer.aaronetwork.xyz/hash/${txHash}',
      accountPage: 'https://explorer.aaronetwork.xyz/address/${accountAddress}'
    },
    {
      kind: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥',
      url: 'https://explorer.whenmoonwhenlambo.money/aaronetwork',
      txPage: 'https://explorer.whenmoonwhenlambo.money/aaronetwork/tx/${txHash}',
      accountPage: 'https://explorer.whenmoonwhenlambo.money/aaronetwork/account/${accountAddress}'
    },
    {
      kind: 'NodesHub',
      url: 'https://explorer.nodeshub.online/aaron',
      txPage: 'https://explorer.nodeshub.online/aaron/tx/${txHash}',
      accountPage: 'https://explorer.nodeshub.online/aaron/${accountAddress}'
    }
  ],
  keywords: [
    'social',
    'chat',
    'reputation',
    'score',
    'messaging'
  ]
};
export default info;