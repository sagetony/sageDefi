// //SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

error Transfer_Failed();

contract Staking is ReentrancyGuard{
    // @dev State Variables
    IERC20 immutable public StakingToken;
    IERC20 immutable public RewardToken;
    address public s_owner;
    uint256 private constant s_rewardRate = 100;
    uint256 private lastUpdatedtime;
    uint256 public s_totalSupply;
    uint256 public s_rewardPerTokenStored;
    mapping (address => uint256) public s_balances;
    mapping (address => uint256) public s_rewards;
    mapping (address => uint256) public s_userRewardPerToken;

    // @dev Events
    event StakingEvent(uint256 _amount, address indexed user);
    event WithdrawEvent(uint256 _amount, address indexed user);
    event ClaimEvent(uint256 amount, address indexed user);

    constructor(address _stakingaddress, address _rewardaddress){
        StakingToken = IERC20(_stakingaddress);
        RewardToken = IERC20(_rewardaddress);
        s_owner = msg.sender;
    }

    //  @dev modifier
    

    // @dev Stake Function
    // Function shoud be able to add to total supply
    // Add to the user balance
    // transfer to the contract
    // Emit the amount staked and the address

    function Stake(uint256 _amount) external nonReentrant{
        if(_amount == 0){
            revert Transfer_Failed();
        }
        s_totalSupply += _amount;
        s_balances[msg.sender] += _amount;

        bool success = StakingToken.transferFrom(msg.sender, address(this), _amount);
        if(!success){
            revert Transfer_Failed();
        }
        emit StakingEvent(_amount, msg.sender);

    }

    // @dev Withdraw Function
    // Function should be able to minus from the total supply
    // Minus from the user balance
    // transfer to the user
    // Emit the amount withdrawed and the address

    function Withdraw(uint _amount) external nonReentrant{
        if(_amount < s_balances[msg.sender]){
            revert Transfer_Failed();
        }
        s_totalSupply -= _amount;
        s_balances[msg.sender] -= _amount;
        bool success = StakingToken.transferFrom(address(this), msg.sender, _amount);

        if(!success){
            revert Transfer_Failed();
        }

        emit WithdrawEvent(_amount, msg.sender);
    }


    // @dev Claim Function
    // user reward will go to zero
    // transfer the reward to the user
    // Emit the amount token and the address

    function Claim() public{
        uint256 amount = s_rewards[msg.sender];
        s_rewards[msg.sender] = 0;
        bool success = RewardToken.transfer(msg.sender, amount);
        if(!success){
            revert Transfer_Failed();
        }

        emit ClaimEvent(amount, msg.sender);
        
    }
}