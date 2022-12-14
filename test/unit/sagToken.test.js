const { expect, assert } = require("chai")
const { ethers } = require("hardhat")
const toWei = (num) => ethers.utils.parseEther(num.toString())
const fromWei = (num) => ethers.utils.formatEther(num)

describe("SageToken", function () {
    let SageToken, sagetoken, address1, address2, address3, deployer, sageICO, sageico
    beforeEach(async function () {
        // Get the ContractFactories and Signers here.
        SageToken = await ethers.getContractFactory("SageToken")
        ;[deployer, address1, address2, address3] = await ethers.getSigners()

        sageICO = await ethers.getContractFactory("SageExchange")

        // deploy contract
        sagetoken = await SageToken.deploy()
        sageico = await sageICO.deploy("0x90F79bf6EB2c4f870365E785982E1f101E93b906")

        // Deployer Address
        // deployer = sagetoken.address
    })
    describe("Contructor", function () {
        const supply = 100000000000000000000
        const name = "SAGE"
        const symbol = "SAG"
        it("Should be able to know the name, symbol, totalSupply and balance of the founder", async function () {
            expect(await sagetoken.owner()).to.be.equal(deployer.address)
            expect(await sagetoken.name()).to.be.equal(name)
            expect(await sagetoken.symbol()).to.be.equal(symbol)
            assert.equal((await sagetoken.totalSupply()).toString(), supply)
        })
        it("Check the balance of the owner", async function () {
            assert.equal((await sagetoken.balanceOf(deployer.address)).toString(), supply)
        })

        it("transfer tokens", async function () {
            await expect(sagetoken.connect(deployer).transfer(address1.address, 10))
                .to.emit(sagetoken, "Transfer")
                .withArgs(deployer.address, address1.address, 10)
        })

        it("allowance of token for a user", async function () {
            assert.equal(
                (await sagetoken.allowance(deployer.address, address1.address)).toString(),
                0
            )
        })
        it("approve allowance", async function () {
            await expect(sagetoken.connect(deployer).approve(address1.address, 5))
                .to.emit(sagetoken, "Approval")
                .withArgs(deployer.address, address1.address, 5)
        })

        it("transfer from", async function () {
            await sagetoken.connect(deployer).approve(address1.address, 5)
            await expect(
                sagetoken.connect(address1).transferFrom(deployer.address, address2.address, 3)
            )
                .to.emit(sagetoken, "Transfer")
                .withArgs(deployer.address, address2.address, 3)
            assert.equal((await sagetoken.balanceOf(address2.address)).toString(), 3)
        })
        describe("Sage ICO Contract", function () {
            it("Change Admin Adress", async function () {
                await sageico.connect(deployer).changeAdminAdress(address1.address)
                expect(await sageico.s_adminaddress(deployer.address)).to.be.equal(
                    (await sageico.getAmountDeposit()).toString()
                )
                expect(await sageico.s_adminaddress(deployer.address)).to.be.equal(0)
                expect(await sageico.getowner(), address1.address)
                    .to.emit(sageico, "UpdatedadminAdress")
                    .withArgs(address1.address)
            })
            it("ICO Invest", async function () {
                let amount = ethers.utils.parseEther("0.001")
                let numberoftokens
                // await sageico.connect(deployer).changeICOState("START")
                expect((await sageico.balances(deployer.address)).toString()).to.equal(
                    (await sagetoken.totalSupply()).toString()
                )

                console.log(toWei(2))
                console.log(".......")

                // My ICOInvest Test
                expect(await sageico.connect(deployer).ICOInvest(amount))
                    .to.emit(sageico, "Invest")
                    .withArgs(amount, numberoftokens, deployer.address)
                numberoftokens = amount / (await sageico.getTokenAmount()).toString()

                expect((await sageico.balances(deployer.address)).toString()).to.not.equal(
                    (await sagetoken.totalSupply()).toString()
                )
                expect((await sageico.balances(address2.address)).toString()).to.be.equal(
                    numberoftokens.toString()
                )
            })
        })
    })
})
// console.log(amount.toString())
// console.log("............")
// console.log((await sageico.balances(deployer.address)).toString())
