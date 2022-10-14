const networkConfig = {
    5: {
        name: "Goerli",
        depositAddress: "0xc2CC1aA7cBF1CDE3E3ee9ab0C21F312913C6B65E",
    },
    31337: {
        name: "hardhat",
        depositAddress: "0xc2CC1aA7cBF1CDE3E3ee9ab0C21F312913C6B65E",
    },
}

const developmentChain = ["hardhat", "localhost"]

module.exports = { networkConfig, developmentChain }
