// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console} from "forge-std/Script.sol";
import "../src/Equalizer.sol";

contract EqualizerScript is Script {
    ERC20 public nic =
        ERC20(address(0xBDF7f7da57658A7d02c51bEC3fC427e4627ACA6f));
    IUniswapV2Router02 public router =
        IUniswapV2Router02(address(0x4752ba5DBc23f44D87826276BF6Fd6b1C372aD24));

    function setUp() public {}

    function run() public {
        vm.broadcast();
        Equalizer eq = new Equalizer(address(nic), address(router));

        console.log(address(eq));
    }
}
