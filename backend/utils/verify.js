const { run } = require("hardhat")

const verify = async (contractAddress, args) => {
    console.log("contract verifying .......")

    try {
        await run("verify:verify", {
            address: contractAddress,
            constructorArguments: args,
        })
    } catch (e) {
        if (e.message.toLowerCase().includes("already verified")) {
            console.log("Already verified")
        } else {
            console.log(e)
        }
    }
}

module.exports = { verify }
