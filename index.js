import React from 'react';
import Web3 from 'web3';

const get = httpProvider => {
  return new Promise((resolve, reject) => {
    if (httpProvider) {
      const provider = new Web3.providers.HttpProvider(httpProvider);
      const web3 = new Web3(provider);
      resolve(web3);
      return;
    }

    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      window.ethereum
        .enable()
        .then(() => {
          resolve(web3);
        })
        .catch((error) => {
          reject(error);
        });
    } else if (window.web3) {
      resolve(window.web3);
    }
  });
};

export default function useEthInfo(httpProvider) {
  const [web3Info, setWeb3Info] = React.useState({
    web3: undefined,
    network: undefined,
  });

  React.useEffect(() => {
    const getWeb3 = async () => {
      const web3 = await get(httpProvider);
      const network = await web3.eth.net.getNetworkType();
      return { web3, network };
    };

    getWeb3().then(info => {
      setWeb3Info(info);
    });
  }, [httpProvider]);

  return web3Info;
}
