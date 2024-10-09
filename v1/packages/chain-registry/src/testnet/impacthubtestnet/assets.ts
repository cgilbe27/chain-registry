import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'impacthubtestnet',
  assets: [{
      description: 'The native token of IXO Chain',
      denom_units: [{
          denom: 'uixo',
          exponent: 0
        }, {
          denom: 'ixo',
          exponent: 6
        }],
      base: 'uixo',
      name: 'IXO',
      display: 'ixo',
      symbol: 'IXO',
      traces: [{
          type: 'test-mintage',
          counterparty: {
            chain_name: 'impacthub',
            base_denom: 'uixo'
          },
          provider: 'impacthub'
        }],
      images: [{
          image_sync: {
            chain_name: 'impacthub',
            base_denom: 'uixo'
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.svg',
          theme: {
            primary_color_hex: '#2c4484'
          }
        }],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/impacthub/images/ixo.svg'
      },
      type_asset: 'sdk.coin'
    }]
};
export default info;