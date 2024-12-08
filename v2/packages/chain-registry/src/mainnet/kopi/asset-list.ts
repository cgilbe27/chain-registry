import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'kopi',
  assets: [
    {
      description: 'The native token of kopi',
      denomUnits: [{
          denom: 'ukopi',
          exponent: 0
        }, {
          denom: 'XKP',
          exponent: 6
        }],
      base: 'ukopi',
      name: 'XKP',
      display: 'XKP',
      symbol: 'XKP',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kopi/images/kopi.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kopi/images/kopi.svg'
        }],
      keywords: [
        'dex',
        'mm',
        'staking',
        'automations'
      ],
      socials: {
        twitter: 'https://x.com/kopi_money',
        discord: 'https://discord.gg/kopi-money'
      },
      typeAsset: 'sdk.coin'
    },
    {
      description: 'A Stablecoin native to the Kopi blockchain',
      denomUnits: [{
          denom: 'ukusd',
          exponent: 0
        }, {
          denom: 'kUSD',
          exponent: 6
        }],
      base: 'ukusd',
      name: 'kUSD',
      display: 'kUSD',
      symbol: 'kUSD',
      traces: [{
          type: 'synthetic',
          counterparty: {
            chainName: 'forex',
            baseDenom: 'USD'
          },
          provider: 'Kopi'
        }],
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kopi/images/kusd.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kopi/images/kusd.svg'
        }],
      keywords: [
        'dex',
        'mm',
        'automations',
        'arbitrage'
      ],
      socials: {
        twitter: 'https://x.com/kopi_money',
        discord: 'https://discord.gg/kopi-money'
      },
      typeAsset: 'sdk.coin'
    },
    {
      description: 'A MM deposit receipt of the Stablecoin native to the Kopi blockchain',
      denomUnits: [{
          denom: 'uckusd',
          exponent: 0
        }, {
          denom: 'ckUSD',
          exponent: 6
        }],
      base: 'uckusd',
      name: 'ckUSD',
      display: 'ckUSD',
      symbol: 'CKUSD',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kopi/images/kusd.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kopi/images/kusd.svg'
        }],
      keywords: ['dex', 'mm'],
      socials: {
        twitter: 'https://x.com/kopi_money',
        discord: 'https://discord.gg/kopi-money'
      },
      typeAsset: 'sdk.coin'
    },
    {
      description: 'A MM deposit receipt of the Stablecoin USDC from noble Chain',
      denomUnits: [{
          denom: 'ucusdc',
          exponent: 0
        }, {
          denom: 'cUSDC',
          exponent: 6
        }],
      base: 'ucusdc',
      name: 'cUSDC',
      display: 'cUSDC',
      symbol: 'CUSDC',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
        }],
      keywords: ['dex', 'mm'],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'A MM deposit receipt of the Stablecoin USDT from Injective Chain',
      denomUnits: [{
          denom: 'ucusdtinj',
          exponent: 0
        }, {
          denom: 'cUSDT.inj',
          exponent: 6
        }],
      base: 'ucusdtinj',
      name: 'cUSDT.inj',
      display: 'cUSDT.inj',
      symbol: 'CUSDT.inj',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
        }],
      keywords: ['dex', 'mm'],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'USDC from Noble Chain',
      denomUnits: [{
          denom: 'ibc/8E27BA2D5493AF5636760E354E46004562C46AB7EC0CC4C1CA14E9E20E2545B5',
          exponent: 0
        }, {
          denom: 'USDC',
          exponent: 6
        }],
      base: 'ibc/8E27BA2D5493AF5636760E354E46004562C46AB7EC0CC4C1CA14E9E20E2545B5',
      name: 'USDC',
      display: 'USDC',
      symbol: 'USDC',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
        }],
      keywords: ['dex', 'mm'],
      typeAsset: 'ics20',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'noble',
            baseDenom: 'uusdc',
            channelId: 'channel-109'
          },
          chain: {
            channelId: 'channel-0',
            path: 'transfer/channel-0/uusdc'
          }
        }]
    },
    {
      description: 'USDT from injective Chain',
      denomUnits: [{
          denom: 'ibc/D8A36AE90F20FE4843A8D249B1BCF0CCDDE35C4B605C8DED57BED20C639162D0',
          exponent: 0
        }, {
          denom: 'USDT.inj',
          exponent: 6
        }],
      base: 'ibc/D8A36AE90F20FE4843A8D249B1BCF0CCDDE35C4B605C8DED57BED20C639162D0',
      name: 'USDT.inj',
      display: 'USDT.inj',
      symbol: 'USDT.inj',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
        }],
      keywords: ['dex', 'mm'],
      typeAsset: 'ics20',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'injective',
            baseDenom: 'peggy0xdAC17F958D2ee523a2206206994597C13D831ec7',
            channelId: 'channel-376'
          },
          chain: {
            channelId: 'channel-1',
            path: 'transfer/channel-1/peggy0xdAC17F958D2ee523a2206206994597C13D831ec7'
          }
        }]
    },
    {
      description: 'injective from injective Chain',
      denomUnits: [{
          denom: 'ibc/DE63D8AC34B752FB7D4CAA7594145EDE1C9FC256AC6D4043D0F12310EB8FC255',
          exponent: 0
        }, {
          denom: 'INJ',
          exponent: 18
        }],
      base: 'ibc/DE63D8AC34B752FB7D4CAA7594145EDE1C9FC256AC6D4043D0F12310EB8FC255',
      name: 'Injective',
      display: 'INJ',
      symbol: 'INJ',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/injective/images/inj.svg'
        }],
      keywords: ['dex', 'mm'],
      typeAsset: 'ics20',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'injective',
            baseDenom: 'inj',
            channelId: 'channel-376'
          },
          chain: {
            channelId: 'channel-1',
            path: 'transfer/channel-1/inj'
          }
        }]
    },
    {
      description: 'Luna from Terra2 Chain',
      denomUnits: [{
          denom: 'ibc/DA59C009A0B3B95E0549E6BF7B075C8239285989FF457A8EDDBB56F10B2A6986',
          exponent: 0
        }, {
          denom: 'Luna',
          exponent: 6
        }],
      base: 'ibc/DA59C009A0B3B95E0549E6BF7B075C8239285989FF457A8EDDBB56F10B2A6986',
      name: 'Luna',
      display: 'Luna',
      symbol: 'LUNA',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/luna.svg'
        }],
      keywords: ['dex', 'mm'],
      typeAsset: 'ics20',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'terra2',
            baseDenom: 'uluna',
            channelId: 'channel-586'
          },
          chain: {
            channelId: 'channel-5',
            path: 'transfer/channel-5/uluna'
          }
        }]
    },
    {
      description: 'Osmosis from Osmosis Chain',
      denomUnits: [{
          denom: 'ibc/646315E3B0461F5FA4C5C8968A88FC45D4D5D04A45B98F1B8294DD82F386DD85',
          exponent: 0
        }, {
          denom: 'osmo',
          exponent: 6
        }],
      base: 'ibc/646315E3B0461F5FA4C5C8968A88FC45D4D5D04A45B98F1B8294DD82F386DD85',
      name: 'OSMO',
      display: 'osmo',
      symbol: 'OSMO',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
        }],
      keywords: ['dex', 'mm'],
      typeAsset: 'ics20',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'osmosis',
            baseDenom: 'uosmo',
            channelId: 'channel-88475'
          },
          chain: {
            channelId: 'channel-6',
            path: 'transfer/channel-6/uosmo'
          }
        }]
    },
    {
      description: 'Atom from cosmoshub Chain',
      denomUnits: [{
          denom: 'ibc/25418646C017D377ADF3202FF1E43590D0DAE3346E594E8D78176A139A928F88',
          exponent: 0
        }, {
          denom: 'Atom',
          exponent: 6
        }],
      base: 'ibc/25418646C017D377ADF3202FF1E43590D0DAE3346E594E8D78176A139A928F88',
      name: 'ATOM',
      display: 'Atom',
      symbol: 'ATOM',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
        }],
      keywords: ['dex', 'mm'],
      typeAsset: 'ics20',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'cosmoshub',
            baseDenom: 'uatom',
            channelId: 'channel-1253'
          },
          chain: {
            channelId: 'channel-7',
            path: 'transfer/channel-7/uatom'
          }
        }]
    },
    {
      description: 'arbitrage receipt token of cUSDT',
      denomUnits: [{
          denom: 'uasusdtinj',
          exponent: 0
        }, {
          denom: 'asusdtinj',
          exponent: 6
        }],
      base: 'uasusdtinj',
      name: 'asUSDT.inj',
      display: 'asusdtinj',
      symbol: 'ASUSDT.inj',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
        }],
      keywords: ['dex', 'mm'],
      typeAsset: 'sdk.coin'
    },
    {
      description: 'arbitrage receipt token of cUSDC',
      denomUnits: [{
          denom: 'uasusdc',
          exponent: 0
        }, {
          denom: 'asUSDC',
          exponent: 6
        }],
      base: 'uasusdc',
      name: 'asUSDC',
      display: 'asUSDC',
      symbol: 'ASUSDC',
      logoURIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
      },
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg'
        }],
      keywords: ['dex', 'mm'],
      typeAsset: 'sdk.coin'
    }
  ]
};
export default info;