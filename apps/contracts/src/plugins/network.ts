export const checkInNetworkList = (list: string[]): boolean => {
  return list.includes(hre.network.name);
};

export const isNetworkStaging = (): boolean => {
  return checkInNetworkList(['polygonAmoy', 'goerli']);
};

export const isNetworkLocal = (): boolean => {
  return checkInNetworkList(['localhost', 'hardhat']);
};

export const isNetworkProduction = (): boolean => {
  return checkInNetworkList(['mainnet', 'polygon']);
};
