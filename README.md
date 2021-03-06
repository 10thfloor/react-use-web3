# react-use-web3

React hook for using the Web3 object in your DApps.<br/>
🦊 [Web3 Documentation](https://web3js.readthedocs.io/en/1.0/)


### Install:
```bash
npm i react-use-web3
```

### Ensure you have the correct `peerDependencies` in your project.
```json
"dependencies": {
  "react": "^16.8.6",
  "react-dom": "^16.8.6",
  "web3": "^1.0.0-beta.51"
}
```


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
import useWeb3 from 'react-use-web3';

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

