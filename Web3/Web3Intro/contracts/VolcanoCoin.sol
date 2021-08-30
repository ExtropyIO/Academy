// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "../node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "../node_modules/@openzeppelin/contracts/access/Ownable.sol";

contract VolcanoCoin is ERC20("Volcano", "VLC"), Ownable {
    uint256 tokenSupply = 10000;
    event tokenSupplyChange(uint256);
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
        tokenSupply = tokenSupply += 1000;
        emit tokenSupplyChange(tokenSupply);
    }

    function mintTokens() public onlyOwner {
        _mint(msg.sender, tokenSupply);
    }

    function makeTransfer(address _recipient, uint256 _amount) public {
        _transfer(msg.sender, _recipient, _amount);
        addPaymentRecord(msg.sender, _recipient, _amount);
    }

    function addPaymentRecord(
        address _sender,
        address _recipient,
        uint256 _amount
    ) internal {
        Payment memory newPayment = Payment(_amount, _recipient);
        paymentsRecord[_sender].push(newPayment);
    }
}
