import { Chain } from '@chain-registry/types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'self',
  status: 'live',
  website: 'https://selfchain.xyz',
  network_type: 'mainnet',
  pretty_name: 'Self Chain',
  chain_type: 'cosmos',
  chain_id: 'self-1',
  bech32_prefix: 'self',
  daemon_name: 'selfchaind',
  node_home: '$HOME/.selfchain',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [{
        denom: 'uslf',
        fixed_min_gas_price: 0.005,
        low_gas_price: 0.005,
        average_gas_price: 0.025,
        high_gas_price: 0.03
      }]
  },
  staking: {
    staking_tokens: [{
        denom: 'uslf'
      }]
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/self/images/self.png'
  },
  description: 'Self Chain Is The First Modular Intent-Centric Access Layer L1 Blockchain And Keyless Wallet Infrastructure Service That Uses MPC-TSS/AA For Multi-Chain Web3 Access.',
  apis: {
    rpc: [
      {
        address: 'https://rpc.selfchain.io:26657',
        provider: 'Self Chain'
      },
      {
        address: 'https://rpc.selfchain.roomit.xyz',
        provider: 'Roomit'
      },
      {
        address: 'https://selfchain_mainnet_rpc.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      },
      {
        address: 'https://selfchain.rpc.nodeshub.online:443',
        provider: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️'
      },
      {
        address: 'https://selfchain-mainnet.rpc.stakevillage.net:443',
        provider: 'Stake Village'
      },
      {
        address: 'https://selfchain-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://rpc.selfchain.nodestake.org',
        provider: 'NodeStake'
      },
      {
        address: 'https://selfchain.rpc.m.stavr.tech:443',
        provider: '🔥STAVR🔥'
      }
    ],
    rest: [
      {
        address: 'https://api.selfchain.io',
        provider: 'Self Chain'
      },
      {
        address: 'https://selfchain.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://api.selfchain.roomit.xyz',
        provider: 'Roomit'
      },
      {
        address: 'https://selfchain_mainnet_api.chain.whenmoonwhenlambo.money',
        provider: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥'
      },
      {
        address: 'https://selfchain.api.nodeshub.online',
        provider: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️'
      },
      {
        address: 'https://selfchain-mainnet.api.stakevillage.net',
        provider: 'Stake Village'
      },
      {
        address: 'https://selfchain-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://api.selfchain.nodestake.org',
        provider: 'NodeStake'
      }
    ],
    grpc: [
      {
        address: 'grpc.selfchain.roomit.xyz:8443',
        provider: 'Roomit'
      },
      {
        address: 'selfchain.grpc.nodeshub.online',
        provider: 'Nodes Hub'
      },
      {
        address: 'selfchain-mainnet.grpc.stakevillage.net:443',
        provider: 'Stake Village'
      },
      {
        address: 'selfchain-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://grpc.selfchain.nodestake.org:443',
        provider: 'NodeStake'
      }
    ]
  },
  explorers: [
    {
      kind: 'Self Chain',
      url: 'https://explorer.selfchain.xyz/selfchain',
      tx_page: 'https://explorer.selfchain.xyz/selfchain/tx/${txHash}',
      account_page: 'https://explorer.selfchain.xyz/selfchain/account/${accountAddress}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/self',
      tx_page: 'https://staking-explorer.com/transaction.php?chain=self&tx=${txHash}',
      account_page: 'https://staking-explorer.com/account.php?chain=self&addr=${accountAddress}'
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Selfchain-Mainnet',
      tx_page: 'https://explorer.stavr.tech/Selfchain-Mainnet/tx/${txHash}',
      account_page: 'https://explorer.stavr.tech/Selfchain-Mainnet/account/${accountAddress}'
    },
    {
      kind: 'Roomit',
      url: 'https://explorer.tendermint.roomit.xyz/selfchain-mainnet',
      tx_page: 'https://explorer.tendermint.roomit.xyz/selfchain-mainnet/tx/${txHash}',
      account_page: 'https://explorer.tendermint.roomit.xyz/selfchain-mainnet/account/${accountAddress}'
    },
    {
      kind: '🚀 WHEN MOON 🌕 WHEN LAMBO 🔥',
      url: 'https://explorer.whenmoonwhenlambo.money/self',
      tx_page: 'https://explorer.whenmoonwhenlambo.money/self/tx/${txHash}',
      account_page: 'https://explorer.whenmoonwhenlambo.money/self/account/${accountAddress}'
    },
    {
      kind: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️',
      url: 'https://explorer.nodeshub.online/selfchain/',
      tx_page: 'https://explorer.nodeshub.online/selfchain/tx/${txHash}',
      account_page: 'https://explorer.nodeshub.online/selfchain/accounts/${accountAddress}'
    },
    {
      kind: 'Stake Village',
      url: 'https://exp.stakevillage.net/selfchain-mainnet',
      tx_page: 'https://exp.stakevillage.net/selfchain-mainnet/tx/${txHash}',
      account_page: 'https://exp.stakevillage.net/selfchain-mainnet/accounts/${accountAddress}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/self/images/self.png',
      theme: {
        primary_color_hex: '#9454f1'
      }
    }]
};
export default info;