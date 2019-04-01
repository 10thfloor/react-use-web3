# react-use-web3

React hook for using the Web3 object in your DApps.<br/>
🦊 [Web3 Documentation](https://web3js.readthedocs.io/en/1.0/)


### Set an httpProvider url: 
Use the default Web3 provider (Usually MetaMask):
```js
 const { web3, network } = useWeb3();
```
Or, pass an httpProvider URL to the hook: 

```js
 const { web3, network } = useWeb3("https://rinkeby.infura.io/<your-token>");
```


### Simple Example: Use with `React.Context`

```js
import React, { createContext } from 'react';
import useWeb3 from 'use-web3';

export const Web3Context = createContext();

export default ({ children }) => {
  const { web3, network } = useWeb3();

  return (
    <Web3Context.Provider value={{ web3, network }}>
      {children}
    </Web3Context.Provider>
  );
};
```

