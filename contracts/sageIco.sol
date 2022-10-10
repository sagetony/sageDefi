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
contract SageToken is ERC20Interface{
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
}
// Secondly create an ICO functionality

contract SageIco is SageToken{
    // define state variable
    // * accounts, ethAmount, hardcap, tokenAmount, maximumAmount, adminAddress, stateofContract, icoStartTime, icoEndTime/
    enum IcoState {
        NEVERSTART, START, STOP, END
    }

    mapping(address => uint256) private s_userBalances;
    address [] private s_accounts;
    uint256 private i_ethAmount;
    uint256 private i_hardcap;
    uint256 private s_tokenAmount;
    uint256 private s_maximumAmount;
    address private s_adminAddress;
    IcoState private s_icostate;
    uint256 private s_icoStartTime;
    uint256 private s_icoEndTime;
    address private s_owner;

    event ethAmount(uint256 indexed amount);
    event tokenAmount(uint256 indexed tokens);

    constructor(){
        i_ethAmount = 0.001 ether;
        i_hardcap = 200 ether;
        s_maximumAmount = 1 ether;
        s_icostate = IcoState.NEVERSTART;
        s_icoStartTime = block.timestamp + 86400 ;
        s_icoEndTime = block.timestamp + 604800;
        s_owner = msg.sender;
    }

    modifier onlyOwner(){
        require(msg.sender == s_owner);
        _;
    } 

    function addpaymentAddress(address adminAddress) public onlyOwner view returns (address) {
        adminAddress = s_adminAddress;
        return adminAddress;
    }
    
    function getowner() public view returns (address){
        return s_owner;
    }

    function getEthAmount() public view returns (uint256){
        return i_ethAmount;
    }

    function gethardcap() public view returns (uint256){
        return i_hardcap;
    }

    function gettokenAmount() public view returns (uint256){
        return s_tokenAmount;
    }
    function getmaximumAmount() public view returns (uint256){
        return s_maximumAmount;
    }
    function getadminAddress() public view returns (address){
        return s_adminAddress;
    }

     function geticostate () public view returns (IcoState){
        return  s_icostate ;
     }

     
}