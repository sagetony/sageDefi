const { expect, assert } = require("chai")
const { ethers } = require("hardhat")
const { moveBlocks } = require("../../utils/move-blocks")
const { moveTime } = require("../../utils/move-time")
const SECONDS_IN_A_DAY = 86400
const SECONDS_IN_A_YEAR = 31449600

describe("SageToken", function () {
    let SageToken,
        sagetoken,
        address1,
        address2,
        address3,
        deployer,
        sageICO,
        sageico,
        Staking,
        staking
    beforeEach(async function () {
        // Get the ContractFactories and Signers here.
        SageToken = await ethers.getContractFactory("SageToken")
        ;[deployer, address1, address2, address3] = await ethers.getSigners()
        sageICO = await ethers.getContractFactory("SageExchange")
        Staking = await ethers.getContractFactory("Staking")

        // deploy contract
        sagetoken = await SageToken.deploy()
        sageico = await sageICO.deploy("0x90F79bf6EB2c4f870365E785982E1f101E93b906")
        staking = await Staking.deploy(sagetoken.address, sagetoken.address)

        // Deployer Address
        // deployer = sagetoken.address
    })
    describe("Constructor for SageICO", function () {
        const supply = 10000000 * 10 ** 18
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

            // My ICOInvest Test
            expect(await sageico.connect(address1).ICOInvest({ value: amount }))
                .to.emit(sageico, "Invest")
                .withArgs(amount, numberoftokens, address1.address)
            numberoftokens = amount / (await sageico.getTokenAmount()).toString()
            // console.log((await sageico.balances(address1.address)).toString())
            expect((await sageico.balances(deployer.address)).toString()).to.not.equal(
                (await sagetoken.totalSupply()).toString()
            )
            expect((await sageico.balances(address1.address)).toString()).to.be.equal(
                numberoftokens.toString()
            )
        })
    })

    describe("Constructor For Staking", function () {
        it("Verify That the addresses are from the token and the owner is valid", async function () {
            expect(await staking.StakingToken()).to.be.equal(sagetoken.address)
            expect(await staking.RewardToken()).to.be.equal(sagetoken.address)
            expect(await staking.s_owner()).to.be.equal(deployer.address)
        })
    })

    describe("Staking Contract Functions", function () {
        it("reward Per Token", async function () {
            let amount = ethers.utils.parseEther("100000")
            await sagetoken.approve(staking.address, amount)

            await staking.Stake(amount)

            await moveTime(SECONDS_IN_A_DAY)
            await moveBlocks(1)
            const reward = await staking.rewardPerToken()
            const expectedReward = 86
            assert.equal(reward.toString(), expectedReward)

            await moveTime(SECONDS_IN_A_YEAR)
            await moveBlocks(1)
            const rewardYear = await staking.rewardPerToken()
            const expectedRewardYear = "31536"
            assert.equal(rewardYear.toString(), expectedRewardYear)
        })
        it("Stake Function", async function () {
            let amount = ethers.utils.parseEther("100000")
            await sagetoken.approve(staking.address, amount)
            // await staking.Stake(amount)
            expect(await staking.Stake(amount))
                .to.emit(staking, "Stake")
                .withArgs(amount, deployer.address)
            await moveTime(SECONDS_IN_A_DAY)
            await moveBlocks(1)
            const reward = await staking.rewardPerToken()
            const expectedReward = 86
            assert.equal(reward.toString(), expectedReward)

            await moveTime(SECONDS_IN_A_YEAR)
            await moveBlocks(1)
            const rewardYear = await staking.rewardPerToken()
            const expectedRewardYear = "31536"
            assert.equal(rewardYear.toString(), expectedRewardYear)
        })

        it("Withdraw Function", async function () {
            let amount = ethers.utils.parseEther("100000")
            await sagetoken.approve(staking.address, amount)
            await staking.Stake(amount)
            await moveTime(SECONDS_IN_A_DAY)
            await moveBlocks(1)
            const earning = await staking.earned(deployer.address)
            const expectedReward = 86
            const beforeStaking = await sagetoken.balanceOf(deployer.address)
            await staking.Withdraw(amount)
            const afterWithdraw = await sagetoken.balanceOf(deployer.address)
            expect(earning.toString(), expectedReward).to.be.equal
            assert.equal(afterWithdraw.toString(), beforeStaking.add(amount).toString())
        })
        it("Claiming Function", async function () {
            let amount = ethers.utils.parseEther("100000")
            await sagetoken.approve(staking.address, amount)
            await staking.Stake(amount)
            await moveTime(SECONDS_IN_A_DAY)
            await moveBlocks(1)
            const reward = await staking.rewardPerToken()
            const expectedReward = 86
            assert.equal(reward.toString(), expectedReward)
            await staking.Claim()
            assert.equal((await staking.s_rewards(deployer.address)).toString(), 0)
        })
    })
})
