import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'zenrock',
  assets: [{
      description: 'The native token of zenrock',
      denom_units: [{
          denom: 'urock',
          exponent: 0,
          aliases: []
        }, {
          denom: 'rock',
          exponent: 6,
          aliases: []
        }],
      base: 'urock',
      name: 'Zenrock',
      display: 'rock',
      symbol: 'ROCK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/zenrock/images/zenrock.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/zenrock/images/zenrock.svg'
      },
      keywords: ['mpc'],
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/zenrock/images/zenrock.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/zenrock/images/zenrock.svg'
        }],
      type_asset: 'sdk.coin'
    }]
};
export default info;