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
    address public _founder;
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
        NEVERSTART, START, HALT, END
    }

    mapping(address => uint256) private s_userBalances;
    IcoState private s_icostate;
    address [] private s_accounts;
    uint256 private i_ethAmount;
    uint256 private i_hardcap;
    uint256 private s_tokenAmount;
    uint256 private s_minimum;
    uint256 private s_maximumAmount;
    uint256 private s_raisedAmount;
    uint256 private s_icoStartTime;
    uint256 private s_icoEndTime;
    address private s_adminAddress;
    address private s_owner;
    address payable private s_deposit;
    
    event ethAmount(uint256 indexed amount);
    event tokenAmount(uint256 indexed tokens);
    event ICOInvest(uint256 indexed amount, address indexed sender, uint256 indexed tokens);

    constructor(address payable depositAddress){
        i_ethAmount = 0.01 ether;
        s_raisedAmount = 0;
        i_hardcap = 200 ether;
        s_minimum = 1 ether;
        s_maximumAmount = 6 ether;
        s_icostate = IcoState.NEVERSTART;
        s_icoStartTime = block.timestamp + 86400 ;
        s_icoEndTime = block.timestamp + 604800;
        s_owner = msg.sender;
        s_deposit = depositAddress;
    }

    modifier onlyOwner(){
        require(msg.sender == s_owner);
        _;
    } 

    function addpaymentAddress(address payable adminAddress) public onlyOwner () {
        s_deposit = adminAddress;
    }

    function haltICO() public onlyOwner () {
        s_icostate = IcoState.HALT;
    }

    function endICO() public onlyOwner(){
        s_icostate = IcoState.END;
    }

    function resumeICO() public onlyOwner(){
        s_icostate = IcoState.START;
    }

    function icoCurrentState () public view returns (IcoState){
        if(block.timestamp < s_icoStartTime){
            return IcoState.NEVERSTART;
        }else if(block.timestamp >= s_icoStartTime && block.timestamp < s_icoEndTime ){
            return IcoState.START;
        }else if(s_icostate == IcoState.HALT ){
            return IcoState.HALT;
        }else{
            return IcoState.END;
        }
    }
    function invest(uint256 amount) payable public returns (bool){
        require(amount >= s_minimum, 'Insufficient Amount');
        require(s_icostate == IcoState.START, 'ICO has not start!! Contact Admin');
        require(i_hardcap == 200 ether, 'ICO has ended');
        require(s_userBalances[msg.sender] < s_maximumAmount, 'Exceed Maximum Amount');
        
        uint256 tokens = amount/i_ethAmount;
        balances[msg.sender] += tokens;
        balances[_founder] -=tokens;
        s_deposit.transfer(amount); 
        emit ICOInvest(amount, msg.sender, tokens);

        return true;

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