import { Chain } from '@chain-registry/v2-types';
const info: Chain = {
  $schema: '../chain.schema.json',
  chainName: 'quicksilver',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://quicksilver.zone/',
  prettyName: 'Quicksilver',
  chainType: 'cosmos',
  chainId: 'quicksilver-2',
  daemonName: 'quicksilverd',
  nodeHome: '$HOME/.quicksilverd',
  bech32Prefix: 'quick',
  slip44: 118,
  fees: {
    feeTokens: [{
        denom: 'uqck',
        fixedMinGasPrice: 0.0001,
        lowGasPrice: 0.0001,
        averageGasPrice: 0.0001,
        highGasPrice: 0.00025
      }]
  },
  staking: {
    stakingTokens: [{
        denom: 'uqck'
      }]
  },
  codebase: {
    gitRepo: 'https://github.com/ingenuity-build/quicksilver',
    recommendedVersion: 'v1.6.3',
    compatibleVersions: ['v1.6.3'],
    binaries: {
      "linux/amd64": 'https://github.com/ingenuity-build/quicksilver/releases/download/v1.6.3/quicksilverd-v1.6.3-amd64'
    },
    consensus: {
      type: 'cometbft',
      version: 'v0.34.33'
    },
    genesis: {
      genesisUrl: 'https://github.com/ingenuity-build/mainnet/raw/main/genesis.json'
    },
    sdk: {
      type: 'cosmos',
      version: 'v0.46.16'
    },
    ibc: {
      type: 'go',
      version: 'v6.3.1'
    }
  },
  logoURIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qck.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qck.svg'
  },
  description: 'Liquid Stake your Cosmos assets with your preferred validator and receive liquid staked assets (qASSETs) that you can use for swapping, pooling, lending, and more, all while your original stake earns staking APY from securing the network.',
  apis: {
    rpc: [
      {
        address: 'https://rpc-quicksilver.takeshi.team:443',
        provider: 'TAKESHI'
      },
      {
        address: 'https://rpc.quicksilver.zone:443',
        provider: 'Quicksilver'
      },
      {
        address: 'https://rpc-quicksilver-ia.cosmosia.notional.ventures:443',
        provider: 'Notional'
      },
      {
        address: 'https://rpc.lavenderfive.com:443/quicksilver',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://rpc-quicksilver.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'https://m-quicksilver.rpc.utsa.tech',
        provider: '𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀'
      },
      {
        address: 'http://quick.rpc.m.stavr.tech:21027',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://quicksilver-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://quicksilver-rpc.ibs.team:443',
        provider: 'Inter Blockchain Services'
      },
      {
        address: 'https://quicksilver.rpc.kjnodes.com',
        provider: 'kjnodes'
      },
      {
        address: 'https://rpc-quicksilver.architectnodes.com',
        provider: 'Architect Nodes'
      },
      {
        address: 'https://rpc.quicksilver.indonode.net',
        provider: 'Indonode'
      },
      {
        address: 'https://quicksilver-rpc.staketab.org:443',
        provider: 'Staketab'
      },
      {
        address: 'https://quicksilver-rpc.theamsolutions.info',
        provider: 'AM Solutions'
      },
      {
        address: 'https://quicksilver-rpc.w3coins.io',
        provider: 'w3coins'
      },
      {
        address: 'https://rpc-quicksilver.mms.team/',
        provider: 'MMS'
      },
      {
        address: 'https://quicksilver-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://quicksilver-rpc.stake-town.com',
        provider: 'StakeTown'
      },
      {
        address: 'https://mainnet-quicksilver-rpc.konsortech.xyz',
        provider: 'KonsorTech'
      },
      {
        address: 'https://quicksilver.tdrsys.com:2053',
        provider: 'TdrSys'
      },
      {
        address: 'https://rpc.quicksilver.validatus.com',
        provider: 'Validatus'
      },
      {
        address: 'https://quicksilver-rpc.noders.services',
        provider: '[NODERS]TEAM'
      }
    ],
    rest: [
      {
        address: 'https://api-quicksilver.takeshi.team:443',
        provider: 'TAKESHI'
      },
      {
        address: 'https://api-quicksilver-ia.cosmosia.notional.ventures:443',
        provider: 'Notional'
      },
      {
        address: 'https://rest.lavenderfive.com:443/quicksilver',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'https://api-quicksilver.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'https://quicksilver-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'https://m-quicksilver.api.utsa.tech',
        provider: '𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀'
      },
      {
        address: 'https://quick.api.m.stavr.tech',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'https://quicksilver.api.kjnodes.com',
        provider: 'kjnodes'
      },
      {
        address: 'https://rest-quicksilver.architectnodes.com',
        provider: 'Architect Nodes'
      },
      {
        address: 'https://api.quicksilver.indonode.net',
        provider: 'Indonode'
      },
      {
        address: 'https://quicksilver-rest.staketab.org',
        provider: 'Staketab'
      },
      {
        address: 'https://quicksilver-api.theamsolutions.info',
        provider: 'AM Solutions'
      },
      {
        address: 'https://quicksilver-api.w3coins.io',
        provider: 'w3coins'
      },
      {
        address: 'https://api-quicksilver.mms.team',
        provider: 'MMS'
      },
      {
        address: 'https://quicksilver-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'https://quicksilver-api.stake-town.com',
        provider: 'StakeTown'
      },
      {
        address: 'https://mainnet-quicksilver-api.konsortech.xyz',
        provider: 'KonsorTech'
      },
      {
        address: 'https://quicksilver.tdrsys.com',
        provider: 'TdrSys'
      },
      {
        address: 'https://api.quicksilver.validatus.com',
        provider: 'Validatus'
      },
      {
        address: 'https://quicksilver-api.noders.services',
        provider: '[NODERS]TEAM'
      }
    ],
    grpc: [
      {
        address: 'grpc-quicksilver.takeshi.team:443',
        provider: 'TAKESHI'
      },
      {
        address: 'grpc-quicksilver-ia.cosmosia.notional.ventures:443',
        provider: 'Notional'
      },
      {
        address: 'quicksilver.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝'
      },
      {
        address: 'quicksilver.grpc.nodersteam.com:9161',
        provider: '[NODERS]TEAM'
      },
      {
        address: 'grpc-quicksilver.cosmos-spaces.cloud:3300',
        provider: 'Cosmos Spaces'
      },
      {
        address: 'quicksilver-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected'
      },
      {
        address: 'quicksilver.grpc.kjnodes.com:11190',
        provider: 'kjnodes'
      },
      {
        address: 'quick.grpc.m.stavr.tech:9113',
        provider: '🔥STAVR🔥'
      },
      {
        address: 'grpc-quicksilver.architectnodes.com:1443',
        provider: 'Architect Nodes'
      },
      {
        address: 'archive-grpc-quicksilver.huginn.tech:9090',
        provider: 'Huginn'
      },
      {
        address: 'https://grpc.quicksilver.indonode.net:28090',
        provider: 'Indonode'
      },
      {
        address: 'services.staketab.com:9034',
        provider: 'Staketab'
      },
      {
        address: 'https://quicksilver-grpc.theamsolutions.info:9797',
        provider: 'AM Solutions'
      },
      {
        address: 'quicksilver-grpc.w3coins.io:11190',
        provider: 'w3coins'
      },
      {
        address: 'grpc-quicksilver.mms.team:443',
        provider: 'MMS'
      },
      {
        address: 'quicksilver-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking'
      },
      {
        address: 'quicksilver-grpc.stake-town.com:443',
        provider: 'StakeTown'
      },
      {
        address: 'mainnet-quicksilver.konsortech.xyz:46090',
        provider: 'KonsorTech'
      },
      {
        address: 'https://quicksilver.tdrsys.com:2083',
        provider: 'TdrSys'
      },
      {
        address: 'grpc.quicksilver.validatus.com',
        provider: 'Validatus'
      },
      {
        address: 'quicksilver-grpc.noders.services:16090',
        provider: '[NODERS]TEAM'
      }
    ]
  },
  explorers: [
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/quicksilver',
      txPage: 'https://www.mintscan.io/quicksilver/transactions/${txHash}',
      accountPage: 'https://www.mintscan.io/quicksilver/accounts/${accountAddress}'
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/quicksilver',
      txPage: 'https://ezstaking.app/quicksilver/txs/${txHash}',
      accountPage: 'https://ezstaking.app/quicksilver/account/${accountAddress}'
    },
    {
      kind: 'staking-explorer.com',
      url: 'https://staking-explorer.com/explorer/quicksilver',
      txPage: 'https://staking-explorer.com/transaction.php?chain=quicksilver&tx=${txHash}',
      accountPage: 'https://staking-explorer.com/account.php?chain=quicksilver&addr=${accountAddress}'
    },
    {
      kind: '𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀 explorer',
      url: 'https://exp.utsa.tech/quicksilver',
      txPage: 'https://exp.utsa.tech/quicksilver/tx/${txHash}'
    },
    {
      kind: '🔥STAVR🔥 explorer',
      url: 'https://explorer.stavr.tech/quicksilver-mainnet',
      txPage: 'https://explorer.stavr.tech/quicksilver-mainnet/tx/${txHash}'
    },
    {
      kind: 'Stake-Take',
      url: 'https://explorer.stake-take.com/quicksilver',
      txPage: 'https://explorer.stake-take.com/quicksilver/tx/${txHash}'
    },
    {
      kind: 'AM Solutions Explorers',
      url: 'https://explorer.theamsolutions.info/quicksilver-main/staking',
      txPage: 'https://explorer.theamsolutions.info/quicksilver-main/tx/${txHash}'
    },
    {
      kind: 'KonsorTech',
      url: 'https://explorer.konsortech.xyz/quicksilver/staking',
      txPage: 'https://explorer.konsortech.xyz/quicksilver/tx/${txHash}'
    }
  ],
  images: [{
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qck.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quicksilver/images/qck.svg',
      theme: {
        primaryColorHex: '#b2b2b2'
      }
    }]
};
export default info;