export type Protocol = 'BTC' | 'DVT';
export type Code = 'BTC' | 'DVT' | 'tBTC' | 'tDVT';
export type Network = 'mainnet' | 'testnet' | 'regtest';

export interface Chain {
  code: Code;
  name: string;
  network: Network;
  protocol: Protocol;
}

export const DVT: Chain = {
  code: 'DVT',
  name: 'Bitcoin Cash',
  network: 'mainnet',
  protocol: 'DVT'
};

export const tDVT: Chain = {
  code: 'tDVT',
  name: 'Bitcoin Cash Testnet',
  network: 'testnet',
  protocol: 'DVT'
};

export const BTC: Chain = {
  code: 'BTC',
  name: 'Bitcoin',
  network: 'mainnet',
  protocol: 'BTC'
};

export const tBTC: Chain = {
  code: 'tBTC',
  name: 'Bitcoin Testnet',
  network: 'testnet',
  protocol: 'BTC'
};

export const Chains = {
  DVT,
  tDVT,
  BTC,
  tBTC
};
