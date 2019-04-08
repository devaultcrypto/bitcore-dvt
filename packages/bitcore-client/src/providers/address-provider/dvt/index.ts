const BitcoreLibCash = require('bitcore-lib-dvt');
import { AbstractBitcoreLibDeriver } from '../btc';
export class BchDeriver extends AbstractBitcoreLibDeriver {
  bitcoreLib = BitcoreLibCash;
}
