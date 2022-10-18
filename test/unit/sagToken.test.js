const { assert, expect } = require("chai")
const { getNamedAccounts, deployments, ethers, network } = require("hardhat")
const { developmentChain, networkConfig } = require("../../helper")

!developmentChain.includes(network.name)
    ? describe.skip
    : describe("sageICO", function () {
          let deployer, sageICO, getEthAmount, getowner, geticostate
          beforeEach(async function () {
              deployer = (await getNamedAccounts()).deployer
              await deployments.fixture("all")
              sageICO = await ethers.getContract("SageIco", deployer)
          })

          describe("Contructor", function () {
              it("Init variables relating to the contract", async function () {
                  getEthAmount = await sageICO.getEthAmount()
                  geticostate = await sageICO.geticostate()
                  getowner = await sageICO.getowner()

                  assert.equal(getEthAmount.toString(), "10000000000000000")
                  assert.equal(geticostate.toString(), "0")
                  assert.equal(getowner.toString(), deployer)
              })
          })
          describe("Payment Address", function () {
              it("add payment addresss", async function () {
                  await sageICO.addpaymentAddress(deployer)
              })
          })
          describe("Invest", function () {
              it("Participate on Sage Ico", async function () {
                  const amount = "100000000000000000"
                  await expect(sageICO.invest(amount)).to.be.reverted

                  //   await expect(sageICO.invest(amount )).to.emit(sageICO, "ICOInvest")
              })
          })
      })
