// //SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

error Transfer_Failed();
error NeedsMoreThanZero();

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
    modifier UpdateReward(address account) {
        s_rewardPerTokenStored = rewardPerToken();
        lastUpdatedtime = block.timestamp;
        s_rewards[account] = earned(account);
        s_userRewardPerToken[account] = s_rewardPerTokenStored;
        _;
    }

      modifier moreThanZero(uint256 _amount) {
        if (_amount == 0) {

            revert NeedsMoreThanZero();
        }
        _;
      }

    // @dev Functions
    function rewardPerToken() public view returns (uint256){
        if(s_totalSupply == 0){
            return s_rewardPerTokenStored;
        }
        return s_rewardPerTokenStored + ((( block.timestamp - lastUpdatedtime) * s_rewardRate * 1e18 ) / s_totalSupply);
    }

    function earned(address account) public view returns (uint256){
        uint256 userBalance = s_balances[account];
        uint256 rewardToken = rewardPerToken();
        uint256 userRewardPerTokenPaid = s_userRewardPerToken[account];
        uint256 rewards =  s_rewards[account];

        return ((userBalance * (rewardToken - userRewardPerTokenPaid))/ 1e18) + rewards;

    }


    // @dev Stake Function
    // Function shoud be able to add to total supply
    // Add to the user balance
    // transfer to the contract
    // Emit the amount staked and the address
//  UpdateReward(msg.sender)
    function Stake(uint256 _amount) external UpdateReward(msg.sender) nonReentrant moreThanZero(_amount){
       
        s_totalSupply += _amount;
        s_balances[msg.sender] += _amount;
        emit StakingEvent(_amount, msg.sender);
        bool success = StakingToken.transferFrom(msg.sender, address(this), _amount);
        
        if(!success){
            revert Transfer_Failed();
        }

    }

    // @dev Withdraw Function
    // Function should be able to minus from the total supply
    // Minus from the user balance
    // transfer to the user
    // Emit the amount withdrawed and the address

    function Withdraw(uint _amount) external nonReentrant UpdateReward(msg.sender){
        if(_amount < s_balances[msg.sender]){
            revert Transfer_Failed();
        }
        s_totalSupply -= _amount;
        s_balances[msg.sender] -= _amount;
        bool success = StakingToken.transfer(msg.sender, _amount);
        
        if(!success){
            revert Transfer_Failed();
        }

        emit WithdrawEvent(_amount, msg.sender);
    }


    // @dev Claim Function
    // user reward will go to zero
    // transfer the reward to the user
    // Emit the amount token and the address

    function Claim() external nonReentrant UpdateReward(msg.sender) {
        uint256 amount = s_rewards[msg.sender];
        s_rewards[msg.sender] = 0;
        bool success = RewardToken.transferFrom(address(this), msg.sender, amount);
        
        if(!success){
            revert Transfer_Failed();
        }

        emit ClaimEvent(amount, msg.sender);
        
    }
}