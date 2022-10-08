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

    
    // Secondly create an ICO functionality
}