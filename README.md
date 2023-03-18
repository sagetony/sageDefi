# SageDefi
This is a DeFi application built on Hardhat, with smart contracts written in Solidity and the frontend built with React. The application includes an ERC20 token contract, an IOC contract, and a staking contract.

![SageDefi](https://sage-defi.vercel.app/static/media/about_img01.92aec9a4de2f58631598.png)

## Installation and Setup
To install and run the application, follow these steps:

* Clone the repository to your local machine
* Navigate to the root directory of the project
* Run npm install to install the necessary dependencies
* Run npm run compile to compile the smart contracts
* Run npm run deploy to deploy the contracts to the local blockchain
* Navigate to the client directory
* Run npm install to install the necessary dependencies for the frontend
* Run npm start to start the frontend server


## ERC20 Contract
The ERC20 contract is a standard token contract that implements the ERC20 interface. It includes functions for transferring tokens, approving token transfers, and getting the token balance of an address. The contract also includes a function for minting new tokens, which can only be called by the contract owner.

## IOC Contract
The IOC contract implements an "initial offering" for the ERC20 token. It allows users to purchase tokens at a discounted price during a specified time period. The contract includes functions for setting the start and end times of the IOC, as well as the price of the tokens during the offering period.

## Staking Contract
The staking contract allows users to stake their ERC20 tokens in exchange for rewards. The contract includes functions for staking tokens, unstaking tokens, and getting the current reward rate. The reward rate is calculated based on the total number of tokens staked in the contract.

## Frontend
The frontend of the application is built with React and includes components for interacting with the ERC20, IOC, and staking contracts. Users can view their token balance, purchase tokens during the IOC, stake tokens, and view their staking rewards. The frontend also includes a simple UI for interacting with the contracts.

## Testing
To run the tests for the smart contracts, navigate to the root directory of the project and run npm run test. This will run the test suite for the ERC20, IOC, and staking contracts.

## Contributing
If you would like to contribute to the development of this application, please create a pull request with your changes. All contributions are welcome and appreciated!




