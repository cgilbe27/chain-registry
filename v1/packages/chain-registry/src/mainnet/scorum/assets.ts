import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'scorum',
  assets: [{
      description: 'The native token of Scorum',
      extended_description: 'Scorum is a dynamic Layer-1 blockchain powered by Cosmos, designed to redefine the gaming and entertainment industries. Currently, it supports Aviatrix, a compelling crash game that not only leverages blockchain technology for secure and transparent gaming outcomes but also utilizes it for the integration of Non-Fungible Tokens (NFTs). Central to Scorum’s ecosystem is the SCR token, which supports both Aviatrix and future applications set to expand the platform’s offerings. The adoption of the Inter-Blockchain Communication protocol significantly enhances Scorum’s interoperability and scalability, paving the way for its ongoing expansion and the development of innovative, blockchain-powered entertainment solutions.',
      denom_units: [{
          denom: 'nscr',
          exponent: 0
        }, {
          denom: 'scr',
          exponent: 9
        }],
      base: 'nscr',
      name: 'Scorum',
      display: 'scr',
      symbol: 'SCR',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/scorum/images/scr.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/scorum/images/scr.svg'
      },
      coingecko_id: 'scorum',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/scorum/images/scr.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/scorum/images/scr.svg',
          theme: {
            primary_color_hex: '#0bc47e'
          }
        }],
      socials: {
        website: 'https://scorum.network',
        twitter: 'https://twitter.com/scorum_en'
      },
      type_asset: 'sdk.coin'
    }, {
      description: 'Virtual(non-transferable) coin used to pay gas',
      denom_units: [{
          denom: 'gas',
          exponent: 0
        }],
      base: 'gas',
      name: 'GAS',
      display: 'gas',
      symbol: 'GAS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/scorum/images/gas.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/scorum/images/gas.svg'
      },
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/scorum/images/gas.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/scorum/images/gas.svg',
          theme: {
            primary_color_hex: '#555555'
          }
        }],
      type_asset: 'sdk.coin'
    }]
};
export default info;