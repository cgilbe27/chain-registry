import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'bitcannadevnet2',
  assets: [{
      description: 'The BCNA coin is the transactional token within the BitCanna network, serving the legal cannabis industry through its payment network, supply chain and trust network.',
      denom_units: [{
          denom: 'ubcna',
          exponent: 0
        }, {
          denom: 'bcna',
          exponent: 6
        }],
      base: 'ubcna',
      display: 'bcna',
      name: 'BitCanna',
      symbol: 'BCNA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/bitcannadevnet2/images/bcna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/bitcannadevnet2/images/bcna.svg'
      },
      coingecko_id: 'bitcanna',
      images: [{
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/bitcannadevnet2/images/bcna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/bitcannadevnet2/images/bcna.svg'
        }],
      type_asset: 'sdk.coin'
    }]
};
export default info;