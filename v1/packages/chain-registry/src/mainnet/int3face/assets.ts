import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'int3face',
  assets: [
    {
      description: 'Int3face blockchain native token',
      denom_units: [{
          denom: 'uint3',
          exponent: 0
        }, {
          denom: 'int3',
          exponent: 6
        }],
      base: 'uint3',
      name: 'Int3face Token',
      display: 'int3',
      symbol: 'INT3',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/int3face/images/int3.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/int3face/images/int3.png',
          theme: {
            primary_color_hex: '#3d3d3d'
          }
        }],
      socials: {
        website: 'https://int3face.io/',
        twitter: 'https://x.com/int3face'
      },
      type_asset: 'sdk.coin'
    },
    {
      description: 'Bitcoin on Int3face',
      denom_units: [{
          denom: 'factory/int31zlefkpe3g0vvm9a4h0jf9000lmqutlh99h7fsd/bitcoin-btc',
          exponent: 0
        }, {
          denom: 'btc',
          exponent: 8
        }],
      base: 'factory/int31zlefkpe3g0vvm9a4h0jf9000lmqutlh99h7fsd/bitcoin-btc',
      name: 'Bitcoin',
      display: 'btc',
      symbol: 'BTC',
      traces: [{
          type: 'bridge',
          counterparty: {
            chain_name: 'bitcoin',
            base_denom: 'sat'
          },
          provider: 'Int3face'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/int3face/images/int3btc.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/int3face/images/int3btc.png',
          theme: {
            primary_color_hex: '#3d3d3d'
          }
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Bitcoin-Cash on Int3face',
      denom_units: [{
          denom: 'factory/int31zlefkpe3g0vvm9a4h0jf9000lmqutlh99h7fsd/bitcoin-cash-bch',
          exponent: 0
        }, {
          denom: 'bch',
          exponent: 8
        }],
      base: 'factory/int31zlefkpe3g0vvm9a4h0jf9000lmqutlh99h7fsd/bitcoin-cash-bch',
      name: 'Bitcoin Cash',
      display: 'bch',
      symbol: 'BCH',
      traces: [{
          type: 'bridge',
          counterparty: {
            chain_name: 'bitcoincash',
            base_denom: 'sat'
          },
          provider: 'Int3face'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/int3face/images/int3bch.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/int3face/images/int3bch.png',
          theme: {
            primary_color_hex: '#3d3d3d'
          }
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Dogecoin on Int3face',
      denom_units: [{
          denom: 'factory/int31zlefkpe3g0vvm9a4h0jf9000lmqutlh99h7fsd/dogecoin-doge',
          exponent: 0
        }, {
          denom: 'doge',
          exponent: 8
        }],
      base: 'factory/int31zlefkpe3g0vvm9a4h0jf9000lmqutlh99h7fsd/dogecoin-doge',
      name: 'Dogecoin',
      display: 'doge',
      symbol: 'DOGE',
      traces: [{
          type: 'bridge',
          counterparty: {
            chain_name: 'dogecoin',
            base_denom: 'shibe'
          },
          provider: 'Int3face'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/int3face/images/int3doge.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/int3face/images/int3doge.png',
          theme: {
            primary_color_hex: '#3d3d3d'
          }
        }],
      type_asset: 'sdk.coin'
    },
    {
      description: 'Litecoin on Int3face',
      denom_units: [{
          denom: 'factory/int31zlefkpe3g0vvm9a4h0jf9000lmqutlh99h7fsd/litecoin-ltc',
          exponent: 0
        }, {
          denom: 'ltc',
          exponent: 8
        }],
      base: 'factory/int31zlefkpe3g0vvm9a4h0jf9000lmqutlh99h7fsd/litecoin-ltc',
      name: 'Litecoin',
      display: 'ltc',
      symbol: 'LTC',
      traces: [{
          type: 'bridge',
          counterparty: {
            chain_name: 'litecoin',
            base_denom: 'litoshi'
          },
          provider: 'Int3face'
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/int3face/images/int3ltc.png'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/int3face/images/int3ltc.png',
          theme: {
            primary_color_hex: '#3d3d3d'
          }
        }],
      type_asset: 'sdk.coin'
    }
  ]
};
export default info;