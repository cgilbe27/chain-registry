import { AssetList } from '@chain-registry/v2-types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chainName: 'akash',
  assets: [{
      description: 'Akash Network is a decentralized cloud computing marketplace that connects users with unused computing resources, offering a cost-effective alternative to traditional cloud providers.',
      extendedDescription: 'Akash Network is revolutionizing the cloud computing industry with its decentralized marketplace that leverages underutilized computing resources. By connecting users with providers offering unused computational capacity, Akash provides a more affordable and flexible alternative to conventional cloud services. This decentralized approach not only reduces costs but also enhances security and resilience, as data and applications are distributed across multiple nodes rather than centralized servers.\n\nThe Akash Network utilizes its native token, AKT, to facilitate transactions and incentivize participants within the ecosystem. Users can pay for cloud services using AKT, while providers earn AKT by offering their computing resources. The network\'s open-source nature and compatibility with major cloud platforms further enhance its appeal, enabling seamless integration and broad adoption. Akash Network\'s innovative model is poised to disrupt the traditional cloud computing landscape, offering a decentralized, efficient, and cost-effective solution for developers and enterprises.',
      denomUnits: [{
          denom: 'uakt',
          exponent: 0
        }, {
          denom: 'akt',
          exponent: 6
        }],
      base: 'uakt',
      name: 'Akash Network',
      display: 'akt',
      symbol: 'AKT',
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.svg'
      },
      coingeckoId: 'akash-network',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/akash/images/akt.svg',
          theme: {
            primaryColorHex: '#bc342c'
          }
        }],
      socials: {
        website: 'https://akash.network/',
        twitter: 'https://twitter.com/akashnet_'
      },
      typeAsset: 'sdk.coin'
    }, {
      description: 'Tether USDt on Akash',
      denomUnits: [{
          denom: 'ibc/05DB6975261B805B6F6A157A4386C627F8A70BF8118D411655EFEDCA82BFABA5',
          exponent: 0
        }, {
          denom: 'usdt',
          exponent: 6
        }],
      typeAsset: 'ics20',
      base: 'ibc/05DB6975261B805B6F6A157A4386C627F8A70BF8118D411655EFEDCA82BFABA5',
      name: 'Tether USDt',
      display: 'usdt',
      symbol: 'USDt',
      traces: [{
          type: 'ibc',
          counterparty: {
            chainName: 'kava',
            baseDenom: 'erc20/tether/usdt',
            channelId: 'channel-5'
          },
          chain: {
            channelId: 'channel-37',
            path: 'transfer/channel-37/erc20/tether/usdt'
          }
        }],
      images: [{
          imageSync: {
            chainName: 'kava',
            baseDenom: 'erc20/tether/usdt'
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.png',
          theme: {
            circle: true,
            primaryColorHex: '#009393',
            backgroundColorHex: '#009393'
          }
        }],
      logoURIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg'
      }
    }]
};
export default info;