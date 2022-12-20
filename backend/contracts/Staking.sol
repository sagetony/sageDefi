// //SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Staking is ReentrancyGuard{
    // @dev State Variables
    IERC20 immutable public StakingToken;
    IERC20 immutable public RewardToken;
    address private s_owner;
    uint256 private constant s_rewardRate = 100;
    uint256 private lastUpdatedtime;
    uint256 private s_totalSupply;
    mapping (address => uint256) private s_balances;
    mapping (address => uint256) private s_rewards;
    mapping (address => uint256) private s_userRewardPerToken;
    
    constructor(address _stakingaddress, address _rewardaddress){
        StakingToken = IERC20(_stakingaddress);
        RewardToken = IERC20(_rewardaddress);
        s_owner = msg.sender;
    }

    // @dev Stake Function
    // Function shoud be able to add to total supply
    // Add to the user balance
    // transfer to the contract
    // Emit the amount staked and the address

    // @dev Withdraw Function
    // Function should be able to minus from the total supply
    // Minus from the user balance
    // transfer to the user
    // Emit the amount withdrawed and the address


    // @dev Claim Function
    // user reward will go to zero
    // transfer the reward to the user
    // Emit the amount token and the address
}