const { network } = require("hardhat")
const { networkConfig, developmentChain } = require("../helper")
const { verify } = require("../utils/verify")

module.exports = async (hre) => {
    const { getNamedAccounts, deployments } = hre
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = network.config.chainId

    const depositAddress = networkConfig[chainId]["depositAddress"]
    args = [depositAddress]

    const sageICO = await deploy("SageIco", {
        from: deployer,
        args: args,
        log: true,
        waitConfirmation: network.config.blockConfirmation || 1,
    })
    if (!developmentChain.includes(network.name) && process.env.ETHERSCAN_API_KEY) {
        await verify(sageICO.address, args)
    }

    log("Successful Deployed")
}

module.exports.tags = ["all", "sageICO"]
