//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.9;
error Balance_SAGIsNotEnough();

interface ERC20Interface {
    function totalSupply() external view returns (uint256);
    function balanceOf(address _owner) external view returns (uint256 balance);
    function transfer(address _to, uint256 _value) external returns (bool success);

    function transferFrom(address _from, address _to, uint256 _value) external returns (bool success);
    function approve(address _spender, uint256 _value) external returns (bool success);
    function allowance(address _owner, address _spender) external view returns (uint256 remaining);

    event Transfer(address indexed _from, address indexed _to, uint256 _value);
    event Approval(address indexed _owner, address indexed _spender, uint256 _value);
}
contract SageIco is ERC20Interface{
    // First create SAGE ERC20 Token
   
    // Define state variables
    string public name;
    string public symbol;
    uint256 public decimals;
    uint256 public override totalSupply;
    address private _founder;
    mapping(address => uint) public balances;
    mapping(address => mapping(address => uint)) allowed;

    constructor(){
        _founder = msg.sender;
        name = "SAGECOIN";
        symbol = "SAG";
        decimals = 10;
        totalSupply = 100000000000;
        balances[_founder] = totalSupply;
    }

    function balanceOf(address tokenOwner) public override view returns (uint256 balance){
            return balances[tokenOwner];
    }

    function transfer(address to, uint256 tokens) public override returns (bool success){
        if(balances[msg.sender] < tokens){
            revert Balance_SAGIsNotEnough();
        }
        balances[to] += tokens;
        balances[_founder] -=tokens;
        emit Transfer(msg.sender, to, tokens);
        return true;
    }
    function allowance(address owner, address spender) public override view returns (uint256 remaining){
            return allowed[owner][spender];
    }

    function approve(address spender, uint256 tokens) public override returns (bool success){
        if(balances[msg.sender] < tokens && balances[msg.sender] == 0){
            revert Balance_SAGIsNotEnough();
        }
        allowed[msg.sender][spender] += tokens;
        emit Approval(msg.sender, spender, tokens);
        return true;
    }

    function transferFrom(address from, address to, uint256 tokens) public override returns (bool success){
        if(balances[msg.sender] < tokens && balances[msg.sender] == 0){
            revert Balance_SAGIsNotEnough();
        }
        balances[to] += tokens;
        allowed[from][msg.sender] -= tokens;
        balances[from] -=tokens;

        emit Transfer(from, to, tokens);
        return true;
    }



    
    // Secondly create an ICO functionality
}