import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'neutron',
  assets: [
    {
      description: 'The native token of Neutron chain.',
      denom_units: [
        {
          denom: 'untrn',
          exponent: 0
        },
        {
          denom: 'ntrn',
          exponent: 6
        }
      ],
      base: 'untrn',
      name: 'Neutron',
      display: 'ntrn',
      symbol: 'NTRN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.svg'
      },
      coingecko_id: 'neutron-3',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.svg'
        }
      ]
    },
    {
      description: 'IBC uatom through cosmoshub-4 transfer/channel-1',
      denom_units: [
        {
          denom:
            'ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9',
          exponent: 0,
          aliases: ['uatom']
        },
        {
          denom: 'atom',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9',
      name: 'IBC atom',
      display: 'atom',
      symbol: 'ATOM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'cosmoshub',
            base_denom: 'uatom',
            channel_id: 'channel-569'
          },
          chain: {
            channel_id: 'channel-1',
            path: 'transfer/channel-1/uatom'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'cosmoshub',
            base_denom: 'uatom'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
      }
    },
    {
      description: 'IBC Axelar uusdc through axelar-dojo-1 transfer/channel-2',
      denom_units: [
        {
          denom:
            'ibc/F082B65C88E4B6D5EF1DB243CDA1D331D002759E938A0F5CD3FFDC5D53B3E349',
          exponent: 0,
          aliases: ['uusdc']
        },
        {
          denom: 'usdc',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/F082B65C88E4B6D5EF1DB243CDA1D331D002759E938A0F5CD3FFDC5D53B3E349',
      name: 'IBC usdc',
      display: 'usdc',
      symbol: 'USDC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'axelar',
            base_denom: 'uusdc',
            channel_id: 'channel-78'
          },
          chain: {
            channel_id: 'channel-2',
            path: 'transfer/channel-2/uusdc'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'axelar',
            base_denom: 'uusdc'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg'
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg'
      }
    },
    {
      description: 'Tia on Neutron',
      denom_units: [
        {
          denom:
            'ibc/773B4D0A3CD667B2275D5A4A7A2F0909C0BA0F4059C0B9181E680DDF4965DCC7',
          exponent: 0,
          aliases: ['utia']
        },
        {
          denom: 'tia',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/773B4D0A3CD667B2275D5A4A7A2F0909C0BA0F4059C0B9181E680DDF4965DCC7',
      name: 'Celestia TIA',
      display: 'tia',
      symbol: 'TIA',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'celestia',
            base_denom: 'utia',
            channel_id: 'channel-8'
          },
          chain: {
            channel_id: 'channel-35',
            path: 'transfer/channel-35'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'celestia',
            base_denom: 'utia'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg'
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg'
      }
    },
    {
      description: 'Astropepe meme coin',
      denom_units: [
        {
          denom:
            'factory/neutron14henrqx9y328fjrdvz6l6d92r0t7g5hk86q5nd/uastropepe',
          exponent: 0
        },
        {
          denom: 'ASTROPEPE',
          exponent: 6
        }
      ],
      base: 'factory/neutron14henrqx9y328fjrdvz6l6d92r0t7g5hk86q5nd/uastropepe',
      name: 'AstroPepe',
      display: 'ASTROPEPE',
      symbol: 'ASTROPEPE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/astropepe.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/astropepe.png'
        }
      ]
    },
    {
      description: 'wstETH on Neutron',
      denom_units: [
        {
          denom:
            'factory/neutron1ug740qrkquxzrk2hh29qrlx3sktkfml3je7juusc2te7xmvsscns0n2wry/wstETH',
          exponent: 0
        },
        {
          denom: 'wstETH',
          exponent: 18
        }
      ],
      base: 'factory/neutron1ug740qrkquxzrk2hh29qrlx3sktkfml3je7juusc2te7xmvsscns0n2wry/wstETH',
      name: 'wstETH',
      display: 'wstETH',
      symbol: 'wstETH',
      traces: [
        {
          type: 'additional-mintage',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0'
          },
          provider: 'Lido'
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wsteth.svg'
        }
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wsteth.svg'
      }
    },
    {
      description: 'NBTC on Neutron',
      denom_units: [
        {
          denom:
            'ibc/DDC3C60EE82BF544F1A0C6A983FF500EF1C14DE20071A5E1E7C0FB470E36E920',
          exponent: 0,
          aliases: ['usat']
        },
        {
          denom: 'sat',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/DDC3C60EE82BF544F1A0C6A983FF500EF1C14DE20071A5E1E7C0FB470E36E920',
      name: 'Nomic NBTC',
      display: 'sat',
      symbol: 'SAT',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'nomic',
            base_denom: 'usat',
            channel_id: 'channel-2'
          },
          chain: {
            channel_id: 'channel-42',
            path: 'transfer/channel-42/usat'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'nomic',
            base_denom: 'usat'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nbtc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nbtc.svg'
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nbtc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nbtc.svg'
      }
    },
    {
      description: 'DYDX on Neutron',
      denom_units: [
        {
          denom:
            'ibc/2CB87BCE0937B1D1DFCEE79BE4501AAF3C265E923509AEAC410AD85D27F35130',
          exponent: 0,
          aliases: ['adydx']
        },
        {
          denom: 'dydx',
          exponent: 18
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/2CB87BCE0937B1D1DFCEE79BE4501AAF3C265E923509AEAC410AD85D27F35130',
      name: 'DYDX',
      display: 'dydx',
      symbol: 'DYDX',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'dydx',
            base_denom: 'adydx',
            channel_id: 'channel-11'
          },
          chain: {
            channel_id: 'channel-48',
            path: 'transfer/channel-48/adydx'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'dydx',
            base_denom: 'adydx'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg'
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg'
      }
    },
    {
      description: 'The cutest NEWT token on Neutron chain.',
      denom_units: [
        {
          denom: 'factory/neutron1p8d89wvxyjcnawmgw72klknr3lg9gwwl6ypxda/newt',
          exponent: 0,
          aliases: ['unewt']
        },
        {
          denom: 'newt',
          exponent: 6
        }
      ],
      base: 'factory/neutron1p8d89wvxyjcnawmgw72klknr3lg9gwwl6ypxda/newt',
      name: 'Newt',
      display: 'newt',
      symbol: 'NEWT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/newt.png'
      },
      coingecko_id: 'newt',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/newt.png'
        }
      ]
    },
    {
      description: 'ASTRO on Neutron',
      denom_units: [
        {
          denom:
            'ibc/5751B8BCDA688FD0A8EC0B292EEF1CDEAB4B766B63EC632778B196D317C40C3A',
          exponent: 0,
          aliases: ['uastro']
        },
        {
          denom: 'astro',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/5751B8BCDA688FD0A8EC0B292EEF1CDEAB4B766B63EC632778B196D317C40C3A',
      name: 'Astroport token',
      display: 'astro',
      symbol: 'ASTRO',
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'terra2',
            base_denom:
              'cw20:terra1nsuqsk6kh58ulczatwev87ttq2z6r3pusulg9r24mfj2fvtzd4uq3exn26',
            channel_id: 'channel-167',
            port: 'wasm.terra1jhfjnm39y3nn9l4520mdn4k5mw23nz0674c4gsvyrcr90z9tqcvst22fce'
          },
          chain: {
            channel_id: 'channel-5',
            path: 'transfer/channel-5/cw20:terra1nsuqsk6kh58ulczatwev87ttq2z6r3pusulg9r24mfj2fvtzd4uq3exn26',
            port: 'transfer'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'terra2',
            base_denom:
              'cw20:terra1nsuqsk6kh58ulczatwev87ttq2z6r3pusulg9r24mfj2fvtzd4uq3exn26'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/astro.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/astro.svg'
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/astro.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/astro.svg'
      }
    },
    {
      description: 'Baby Corgi is the real doggo of Neutron!',
      denom_units: [
        {
          denom: 'factory/neutron1tklm6cvr2wxg8k65t8gh5ewslnzdfd5fsk0w3f/corgi',
          exponent: 0,
          aliases: ['ucorgi']
        },
        {
          denom: 'corgi',
          exponent: 6
        }
      ],
      base: 'factory/neutron1tklm6cvr2wxg8k65t8gh5ewslnzdfd5fsk0w3f/corgi',
      name: 'Baby Corgi',
      display: 'corgi',
      symbol: 'CORGI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/babycorgi.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/babycorgi.png'
        }
      ]
    },
    {
      description: 'clownmaxxed store of value',
      denom_units: [
        {
          denom:
            'factory/neutron170v88vrtnedesyfytuku257cggxc79rd7lwt7q/ucircus',
          exponent: 0,
          aliases: ['ucircus']
        },
        {
          denom: 'circus',
          exponent: 6
        }
      ],
      base: 'factory/neutron170v88vrtnedesyfytuku257cggxc79rd7lwt7q/ucircus',
      name: 'AtomEconomicZone69JaeKwonInu',
      display: 'circus',
      symbol: 'CIRCUS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/circus.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/circus.png'
        }
      ]
    },
    {
      description: 'Jimmy Neutron Finance',
      denom_units: [
        {
          denom: 'factory/neutron108x7vp9zv22d6wxrs9as8dshd3pd5vsga463yd/JIMMY',
          exponent: 0,
          aliases: ['ujimmy']
        },
        {
          denom: 'jimmy',
          exponent: 6
        }
      ],
      base: 'factory/neutron108x7vp9zv22d6wxrs9as8dshd3pd5vsga463yd/JIMMY',
      name: 'jimmy',
      display: 'jimmy',
      symbol: 'JIMMY',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/jimmy.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/jimmy.png'
        }
      ]
    },
    {
      description: 'Baddest coin on Cosmos',
      denom_units: [
        {
          denom: 'factory/neutron143wp6g8paqasnuuey6zyapucknwy9rhnld8hkr/bad',
          exponent: 0,
          aliases: ['ubad']
        },
        {
          denom: 'bad',
          exponent: 6
        }
      ],
      base: 'factory/neutron143wp6g8paqasnuuey6zyapucknwy9rhnld8hkr/bad',
      name: 'Badcoin',
      display: 'bad',
      symbol: 'BAD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/bad.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/bad.png'
        }
      ]
    },
    {
      description: 'BITCOSMOS',
      denom_units: [
        {
          denom:
            'neutron1fjzg7fmv770hsvahqm0nwnu6grs3rjnd2wa6fvm9unv6vedkzekqpw44qj',
          exponent: 0,
          aliases: ['ubitcosmos']
        },
        {
          denom: 'bitcosmos',
          exponent: 6
        }
      ],
      base: 'neutron1fjzg7fmv770hsvahqm0nwnu6grs3rjnd2wa6fvm9unv6vedkzekqpw44qj',
      name: 'Bitcosmos',
      display: 'bitcosmos',
      symbol: 'BTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/bitcosmos.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/bitcosmos.png'
        }
      ]
    },
    {
      description: 'What the Fuck',
      denom_units: [
        {
          denom:
            'neutron12h09p8hq5y4xpsmcuxxzsn9juef4f6jvekp8yefc6xnlwm6uumnsdk29wf',
          exponent: 0,
          aliases: ['uwtf']
        },
        {
          denom: 'wtf',
          exponent: 6
        }
      ],
      base: 'neutron12h09p8hq5y4xpsmcuxxzsn9juef4f6jvekp8yefc6xnlwm6uumnsdk29wf',
      name: 'wtf',
      display: 'wtf',
      symbol: 'WTF',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/WTF.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/WTF.png'
        }
      ]
    },
    {
      description: 'NLS on Neutron',
      denom_units: [
        {
          denom:
            'ibc/6C9E6701AC217C0FC7D74B0F7A6265B9B4E3C3CDA6E80AADE5F950A8F52F9972',
          exponent: 0,
          aliases: ['unls']
        },
        {
          denom: 'nls',
          exponent: 6
        }
      ],
      type_asset: 'ics20',
      base: 'ibc/6C9E6701AC217C0FC7D74B0F7A6265B9B4E3C3CDA6E80AADE5F950A8F52F9972',
      name: 'Nolus NLS',
      display: 'nls',
      symbol: 'NLS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'nolus',
            base_denom: 'unls',
            channel_id: 'channel-3839'
          },
          chain: {
            channel_id: 'channel-44',
            path: 'transfer/channel-44/unls'
          }
        }
      ],
      images: [
        {
          image_sync: {
            chain_name: 'nolus',
            base_denom: 'unls'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.svg'
        }
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.svg'
      }
    },
    {
      description: 'A Mechanical Canine',
      denom_units: [
        {
          denom:
            'factory/neutron1t5qrjtyryh8gzt800qr5vylhh2f8cmx4wmz9mc/ugoddard',
          exponent: 0,
          aliases: ['ugoddard']
        },
        {
          denom: 'goddard',
          exponent: 6
        }
      ],
      base: 'factory/neutron1t5qrjtyryh8gzt800qr5vylhh2f8cmx4wmz9mc/ugoddard',
      name: 'Goddard',
      display: 'goddard',
      symbol: 'GODRD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/goddardntrn.png'
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/goddardntrn.png'
        }
      ]
    },
    {
      description: 'The deflationary utility token of the Apollo DAO project',
      denom_units: [
        {
          denom:
            'factory/neutron154gg0wtm2v4h9ur8xg32ep64e8ef0g5twlsgvfeajqwghdryvyqsqhgk8e/APOLLO',
          exponent: 0,
          aliases: ['uapollo']
        },
        {
          denom: 'apollo',
          exponent: 6
        }
      ],
      base: 'factory/neutron154gg0wtm2v4h9ur8xg32ep64e8ef0g5twlsgvfeajqwghdryvyqsqhgk8e/APOLLO',
      name: 'Apollo DAO',
      display: 'apollo',
      symbol: 'APOLLO',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/apollo.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/apollo.svg'
        }
      ]
    },
    {
      description: 'NEWTROLL',
      denom_units: [
        {
          denom:
            'factory/neutron1ume2n42r5j0660gegrr28fzdze7aqf7r5cd9y6/newtroll',
          exponent: 0,
          aliases: ['unewtroll']
        },
        {
          denom: 'newtroll',
          exponent: 6
        }
      ],
      base: 'factory/neutron1ume2n42r5j0660gegrr28fzdze7aqf7r5cd9y6/newtroll',
      name: 'Newtroll',
      display: 'newtroll',
      symbol: 'NTRL',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/newtroll.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/newtroll.svg'
        }
      ]
    },
    {
      description: 'Retro Game',
      denom_units: [
        {
          denom:
            'factory/neutron1t24nc7whl77relnu3taxyg3p66pjyuk82png2y/uretro',
          exponent: 0,
          aliases: ['uretro']
        },
        {
          denom: 'retro',
          exponent: 6
        }
      ],
      base: 'factory/neutron1t24nc7whl77relnu3taxyg3p66pjyuk82png2y/uretro',
      name: 'Retro',
      display: 'retro',
      symbol: 'RETRO',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/retro.svg'
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/retro.svg'
        }
      ]
    }
  ]
};
export default info;