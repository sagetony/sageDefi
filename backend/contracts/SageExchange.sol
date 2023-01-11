//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;
import "./SageToken.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract SageExchange is SageToken, ReentrancyGuard{
    // Ico
    IERC20 immutable public StakingToken;

    enum ICOState{
        START, END, PAUSE, NEVERSTART
    }

    ICOState private s_icostate;
    mapping (address => uint256) public s_userBalances;
    mapping (address => uint256) public s_adminaddress;
    uint256 public s_timestart;
    uint256 public s_timeend;
    address payable public s_admin;
    uint256 private s_tokenprice;
    uint256 private s_hardcap;
    uint256 private s_minimum;
    uint256 private s_maximum;
    uint256 private s_totaltokenpurchase;
    uint256 private s_totalamountdeposited;

    // Events
    event UpdatedadminAdress(address indexed adminaddress);
    event Invest(uint256 amount, uint256 tokens, address indexed buyer);

    constructor (address payable _admin, address _stakingaddress){
        StakingToken = IERC20(_stakingaddress);
        s_admin = _admin;
        s_tokenprice = 0.001 ether;
        s_hardcap = 5 ether;
        s_minimum = 0.001 ether;
        s_maximum = 1 ether;
        s_timestart = block.timestamp + 60;
        s_timeend = block.timestamp + 3600;
        s_icostate = ICOState.NEVERSTART;
        s_totalamountdeposited = 0;
        s_totaltokenpurchase = 0;
        s_adminaddress[_admin] = 0;
    }
    // modifiers
    // modifier Onlyadmin() {
    //     require(msg.sender == s_admin,"Only Admin has permission");
    //     _;  
    // }

    // Admin change wallet address
    function changeAdminAdress(address payable _adminaddress) public Onlyadmin returns(bool){
        s_adminaddress[s_admin] = s_totalamountdeposited;
        s_adminaddress[_adminaddress] = 0;
        s_admin = _adminaddress;

        emit UpdatedadminAdress(_adminaddress);
        return true;
    }

    // Change State of the ICO
    function changeICOState(ICOState _status) public Onlyadmin returns(bool){
        s_icostate = _status;
        return true;
    }
    

    // ICO Timing
    function ICOStatus() public {
        if(block.timestamp < s_timestart){
            s_icostate = ICOState.NEVERSTART;
        }else if(block.timestamp >= s_timestart && block.timestamp < s_timeend) {
            s_icostate = ICOState.START;
        }else if(block.timestamp >= s_timeend) {
            s_icostate = ICOState.END;
        }else{
            s_icostate = ICOState.PAUSE;
        }
    }


        function tokenBalance() public view returns(uint256){
                return StakingToken.balanceOf(address(this));

        }
        
   
    function ICOInvest() payable external  nonReentrant returns(bool){
        uint256 amount = msg.value;
        require(amount >= s_minimum, "Enter a Valid Amount, Minimum amount is 0.001 ETH");
        require(amount <= s_maximum, "Enter a Valid Amount, Maximum amount is 0.001 ETH");
        require(s_userBalances[msg.sender] < s_maximum, "Exceed you limit for the ICO");
        require(s_hardcap >= s_totalamountdeposited, "ICO has Closed");
        // require( s_icostate == ICOState.START, "ICO has not started");

        uint256 numberoftokens = amount/ s_tokenprice * (10*8);
        balances[msg.sender] += numberoftokens;
        balances[owner] -= numberoftokens;
        s_totaltokenpurchase += numberoftokens;
        s_totalamountdeposited += amount;
        s_userBalances[msg.sender] +=amount;
        (bool success, ) = s_admin.call{value: amount}("");

        bool done = StakingToken.transferFrom(owner, msg.sender, numberoftokens);

        if(!done){
            revert("Failed");
        }
        if(!success){
            revert("Failed");
        }
        emit Invest(amount, numberoftokens, msg.sender);

        return true;
    }

     function getowner() public view returns (address){
        return s_admin;
    }

    function getTokenAmount() public view returns (uint256){
        return s_tokenprice;
    }

    function gethardcap() public view returns (uint256){
        return s_hardcap;
    }

    function getminimumAmount() public view returns (uint256){
        return  s_minimum;
    }
    function getmaximumAmount() public view returns (uint256){
        return s_maximum;
    }
    function getAmountDeposit() public view returns (uint256){
        return s_totalamountdeposited ;
    }
    function getTokenPurchase() public view returns (uint256){
        return s_totaltokenpurchase  ;
    }
     function geticostate () public view returns (ICOState){
        return  s_icostate ;
     }


    // Send and Receive Token 

    // Borrow

    // Stake/Compounding
}