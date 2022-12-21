async function main() {
    const [deployer, address1, address2] = await ethers.getSigners()

    // console.log("Deploying contracts with the account:", address2.address)
    // console.log("Account balance:", (await deployer.getBalance()).toString())
    // console.log("Account balance:", (await address1.getBalance()).toString())
    // 0x70997970C51812dc3A010C7d01b50e0d17dc79C8 0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC
    // Get the ContractFactories and Signers here.
    const Token = await ethers.getContractFactory("SageToken")
    const SageICO = await ethers.getContractFactory("SageExchange")
    const Staking = await ethers.getContractFactory("Staking")

    // deploy contracts
    const token = await Token.deploy()
    const sageico = await SageICO.deploy("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266")
    const staking = await Staking.deploy(token.address, token.address)

    console.log("Deploying contracts with the Token account:", token.address)
    console.log("Deploying contracts with the Sageico account:", sageico.address)
    console.log("Deploying contracts with the Staking account:", staking.address)

    // Save copies of each contracts abi and address to the frontend.
    // saveFrontendFiles(token, "Token")
    // saveFrontendFiles(sageico, "SageICO")
}

function saveFrontendFiles(contract, name) {
    const fs = require("fs")
    const contractsDir = process.cwd() + "/src/abis/contractsData"

    if (!fs.existsSync(contractsDir)) {
        fs.mkdirSync(contractsDir)
    }

    fs.writeFileSync(
        contractsDir + `/${name}-address.json`,
        JSON.stringify({ address: contract.address }, undefined, 2)
    )

    const contractArtifact = artifacts.readArtifactSync(name)

    fs.writeFileSync(contractsDir + `/${name}.json`, JSON.stringify(contractArtifact, null, 2))
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
