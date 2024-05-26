// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

contract Equalizer {
    address public immutable NICARAGUA;
    address public immutable LP;
    address public immutable ROUTER;

    constructor(address token, address lp, address router) {
        NICARAGUA = token;
        LP = lp;
        ROUTER = router;
    }

    function buy() public payable {
        // buy
    }
    function deposit(uint256 amt) public {}
    function withdraw(uint256 amt) public {}
}
