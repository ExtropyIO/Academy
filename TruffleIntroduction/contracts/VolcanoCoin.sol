// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "../node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "../node_modules/@openzeppelin/contracts/access/Ownable.sol";

contract VolcanoCoin is ERC20("Volcano", "VLC"), Ownable {
    uint256 tokenSupply = 100;
    event tokenSupplyChange(uint256);
    mapping(address => uint256) public balances;
    mapping(address => Payment[]) public paymentsRecord;

    struct Payment {
        uint256 amount;
        address recipient;
    }

    constructor() {
        _mint(msg.sender, tokenSupply);
    }

    function getTokenSupply() public view returns (uint256) {
        return tokenSupply;
    }

    function changeTokenSupply() public onlyOwner {
        tokenSupply = 300;
        emit tokenSupplyChange(tokenSupply);
    }

    function mintTokens() public onlyOwner {
        _mint(msg.sender, tokenSupply);
    }

    function makeTransfer(address _recipient, uint256 _amount) public {
        _transfer(msg.sender, _recipient, _amount);
        balances[msg.sender] -= _amount;
        addPaymentRecord(_recipient, _amount);
    }

    function addPaymentRecord(address _recipient, uint256 _amount) internal {
        Payment memory newPayment = Payment(_amount, _recipient);
        paymentsRecord[msg.sender].push(newPayment);
    }
}
