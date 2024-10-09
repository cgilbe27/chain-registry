import { AssetList } from '@chain-registry/types';
const info: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'ton',
  assets: [{
      description: 'Toncoin ($TON) is the native cryptocurrency of the TON (The Open Network) blockchain.',
      extended_description: 'TON (The Open Network) is a decentralized layer-1 blockchain designed for scalability, speed, and efficiency. It was originally conceived by the creators of Telegram but was later handed over to an open-source community to maintain and expand.',
      denom_units: [{
          denom: 'nanoton',
          exponent: 0,
          aliases: ['nanoTon']
        }, {
          denom: 'ton',
          exponent: 9
        }],
      type_asset: 'unknown',
      base: 'nanoton',
      name: 'Toncoin',
      display: 'ton',
      symbol: 'TON',
      coingecko_id: 'the-open-network',
      images: [{
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ton/images/ton.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ton/images/ton.png',
          theme: {
            circle: true,
            primary_color_hex: '#0088CC',
            background_color_hex: '#0088CC'
          }
        }],
      socials: {
        website: 'https://ton.tg/',
        twitter: 'https://x.com/ton_blockchain'
      }
    }]
};
export default info;