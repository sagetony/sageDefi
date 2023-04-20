//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
// import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract SageToken is IERC20{
    
    // Define the name of token, symbol and total Suppply
    // define the owner of the token
    // see balance, transfer, approve, transfer from, allowance.

    // Define Variables
    address public owner;
    string public name;
    string public symbol;
    uint256 public decimals;
    uint256 public override totalSupply;
    mapping (address => uint256) public balances;
    mapping(address => mapping(address => uint256)) allowed;
 
    mapping (address => bool) public blacklist;

    // Events
    // event Transfer(address indexed from, address indexed to, uint256 value);
    
    constructor(){
        owner =  msg.sender;
        name = 'SAGE';
        symbol = 'NSAG';
        decimals = 10;
        totalSupply =  10000000 * 10**18;
        balances[owner] = totalSupply;
    }
     // modifiers
    modifier Onlyadmin(){
        require(msg.sender == owner, "Only Admin has permission");
        _;  
    }
    modifier validAddress(address _address){
        require(_address != address(0));
        _;
    }
    // functions
    function balanceOf(address tokenAddress) public override view returns (uint256){
            return balances[tokenAddress];    
    }
    function transfer(address to, uint256 tokens) validAddress(to) public override returns (bool){
       require(balances[msg.sender] >= tokens, "Insufficient Token Amount");
        balances[to] += tokens;
        balances[msg.sender] -=  tokens;
        emit Transfer(msg.sender, to, tokens);
        return true;
    }

    function allowance(address _owner, address spender) validAddress(spender) public override  view returns (uint256){
        return allowed[_owner][spender];
    }

    function approve(address spender, uint256 amount) validAddress(spender) public override returns (bool){
        require(balances[msg.sender] >= amount,"Insufficient Token");
        allowed[msg.sender][spender] += amount;
        emit Approval(msg.sender, spender, amount);

        return true;

    }
    function transferFrom(
        address from,
        address to,
        uint256 amount
    )  validAddress(to) public  override returns (bool){
        require(allowed[from][msg.sender] >= amount, "Insufficient Amount");
        require(balances[from] >= amount, "Insufficient Token Amount");

        balances[from] -= amount;
        allowed[from][msg.sender] -= amount;
        balances[to] += amount;
        emit Transfer(from, to, amount);
        return true;
    }

    function mint(address to, uint256 amount) public validAddress(msg.sender) Onlyadmin {
        balances[to] += amount;
        totalSupply += amount;
    }
    
    function burn(uint256 amount) public validAddress(msg.sender) Onlyadmin {
        totalSupply -= amount;
        balances[msg.sender] -= amount;
    }
    
    function blacklistAddress(address _user) external validAddress( _user) Onlyadmin {
        blacklist[_user] = true;
    }
    
    function unBlacklistAddress(address _user) external validAddress( _user)  Onlyadmin {
        blacklist[_user] = false;
    }

}