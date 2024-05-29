// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console} from "forge-std/Test.sol";
import "../src/Equalizer.sol";
import "solady/tokens/ERC20.sol";
import "./Doer.sol";

contract EqualizerTest is Test {
    Equalizer public eq;
    ERC20 public nic =
        ERC20(address(0xBDF7f7da57658A7d02c51bEC3fC427e4627ACA6f));
    address public lp = address(0x8bC3878e628E11c81a027860130ee4cBF655041C);
    IUniswapV2Router02 public router =
        IUniswapV2Router02(address(0x4752ba5DBc23f44D87826276BF6Fd6b1C372aD24));

    fallback() external payable {}
    receive() external payable {}

    function setUp() public {
        eq = new Equalizer(address(nic), lp, address(router));
    }

    function testBuy() public {
        eq.buy{value: 1 ether}();
        console.log("Balance of eNIC after buy:", eq.balanceOf(address(this)));
    }

    function testRedeemBeforeSell() public {
        eq.buy{value: 1 ether}();
        console.log("Balance of eNIC after buy:", eq.balanceOf(address(this)));
        vm.expectRevert();
        eq.redeem();
    }

    function testRedeemAfterSell() public {
        eq.buy{value: 1 ether}();
        console.log("Balance of eNIC after buy:", eq.balanceOf(address(this)));
        eq.sellAll();
        eq.redeem();
    }

    function testRedeemTwiceAfterSell() public {
        eq.buy{value: 1 ether}();
        console.log("Balance of eNIC after buy:", eq.balanceOf(address(this)));
        eq.sellAll();
        eq.redeem();
        vm.expectRevert();
        eq.redeem();
    }

    function testDepositThenWithdraw() public {
        address[] memory path = new address[](2);
        path[0] = address(0x4200000000000000000000000000000000000006);
        path[1] = address(nic);

        // buy nicaragua
        router.swapExactETHForTokens{value: 1 ether}(
            0,
            path,
            address(this),
            block.timestamp
        );

        uint256 bal = nic.balanceOf(address(this));
        console.log("Balance of NIC:", bal);

        nic.approve(address(eq), bal);
        eq.deposit(bal);

        console.log(
            "Balance of NIC after deposit:",
            nic.balanceOf(address(this))
        );
        console.log(
            "Balance of eNIC after deposit:",
            eq.balanceOf(address(this))
        );

        eq.withdraw(eq.balanceOf(address(this)));

        console.log(
            "Balance of NIC after withdraw:",
            nic.balanceOf(address(this))
        );
        console.log(
            "Balance of eNIC after withdraw:",
            eq.balanceOf(address(this))
        );
    }

    /*
    function testSelloff() public {
        //
        address[] memory path = new address[](2);
        path[0] = address(0x4200000000000000000000000000000000000006);
        path[1] = address(nic);

        // buy nicaragua
        router.swapExactETHForTokens{value: 10 ether}(
            0,
            path,
            address(this),
            block.timestamp
        );

        uint256 nicBal = nic.balanceOf(address(this));

        // distribute the nic
        Doer doer1 = new Doer(eq);
        Doer doer2 = new Doer(eq);
        Doer doer3 = new Doer(eq);

        nic.transfer(address(doer1), nicBal / 3);
        nic.transfer(address(doer2), nicBal / 3);
        // minus five wei for rounding error sake
        nic.transfer(address(doer3), nicBal / 3 - 5);

        payable(address(doer1)).transfer(0.5 ether);
        payable(address(doer2)).transfer(0.4 ether);
        payable(address(doer3)).transfer(0.3 ether);

        doer1.depositNIC();
        doer2.buy();
    }*/
}
