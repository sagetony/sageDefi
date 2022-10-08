//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.9;

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
    uint256 public name;
    uint256 public symbol;
    uint256 public decimals;
    uint256 public override totalSupply;
    address private _founder;
    mapping(address => uint) public balances;

    constructor(){
        _owner = msg.sender;
        totalSupply = 
    }
    
    // Secondly create an ICO functionality
}