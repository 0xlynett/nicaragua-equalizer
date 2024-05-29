// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "solady/tokens/ERC20.sol";
import "solady/auth/Ownable.sol";

interface IUniswapV2Router01 {
    function factory() external pure returns (address);
    function WETH() external pure returns (address);

    function addLiquidity(
        address tokenA,
        address tokenB,
        uint amountADesired,
        uint amountBDesired,
        uint amountAMin,
        uint amountBMin,
        address to,
        uint deadline
    ) external returns (uint amountA, uint amountB, uint liquidity);
    function addLiquidityETH(
        address token,
        uint amountTokenDesired,
        uint amountTokenMin,
        uint amountETHMin,
        address to,
        uint deadline
    )
        external
        payable
        returns (uint amountToken, uint amountETH, uint liquidity);
    function removeLiquidity(
        address tokenA,
        address tokenB,
        uint liquidity,
        uint amountAMin,
        uint amountBMin,
        address to,
        uint deadline
    ) external returns (uint amountA, uint amountB);
    function removeLiquidityETH(
        address token,
        uint liquidity,
        uint amountTokenMin,
        uint amountETHMin,
        address to,
        uint deadline
    ) external returns (uint amountToken, uint amountETH);
    function removeLiquidityWithPermit(
        address tokenA,
        address tokenB,
        uint liquidity,
        uint amountAMin,
        uint amountBMin,
        address to,
        uint deadline,
        bool approveMax,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) external returns (uint amountA, uint amountB);
    function removeLiquidityETHWithPermit(
        address token,
        uint liquidity,
        uint amountTokenMin,
        uint amountETHMin,
        address to,
        uint deadline,
        bool approveMax,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) external returns (uint amountToken, uint amountETH);
    function swapExactTokensForTokens(
        uint amountIn,
        uint amountOutMin,
        address[] calldata path,
        address to,
        uint deadline
    ) external returns (uint[] memory amounts);
    function swapTokensForExactTokens(
        uint amountOut,
        uint amountInMax,
        address[] calldata path,
        address to,
        uint deadline
    ) external returns (uint[] memory amounts);
    function swapExactETHForTokens(
        uint amountOutMin,
        address[] calldata path,
        address to,
        uint deadline
    ) external payable returns (uint[] memory amounts);
    function swapTokensForExactETH(
        uint amountOut,
        uint amountInMax,
        address[] calldata path,
        address to,
        uint deadline
    ) external returns (uint[] memory amounts);
    function swapExactTokensForETH(
        uint amountIn,
        uint amountOutMin,
        address[] calldata path,
        address to,
        uint deadline
    ) external returns (uint[] memory amounts);
    function swapETHForExactTokens(
        uint amountOut,
        address[] calldata path,
        address to,
        uint deadline
    ) external payable returns (uint[] memory amounts);

    function quote(
        uint amountA,
        uint reserveA,
        uint reserveB
    ) external pure returns (uint amountB);
    function getAmountOut(
        uint amountIn,
        uint reserveIn,
        uint reserveOut
    ) external pure returns (uint amountOut);
    function getAmountIn(
        uint amountOut,
        uint reserveIn,
        uint reserveOut
    ) external pure returns (uint amountIn);
    function getAmountsOut(
        uint amountIn,
        address[] calldata path
    ) external view returns (uint[] memory amounts);
    function getAmountsIn(
        uint amountOut,
        address[] calldata path
    ) external view returns (uint[] memory amounts);
}

interface IUniswapV2Router02 is IUniswapV2Router01 {
    function removeLiquidityETHSupportingFeeOnTransferTokens(
        address token,
        uint liquidity,
        uint amountTokenMin,
        uint amountETHMin,
        address to,
        uint deadline
    ) external returns (uint amountETH);
    function removeLiquidityETHWithPermitSupportingFeeOnTransferTokens(
        address token,
        uint liquidity,
        uint amountTokenMin,
        uint amountETHMin,
        address to,
        uint deadline,
        bool approveMax,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) external returns (uint amountETH);

    function swapExactTokensForTokensSupportingFeeOnTransferTokens(
        uint amountIn,
        uint amountOutMin,
        address[] calldata path,
        address to,
        uint deadline
    ) external;
    function swapExactETHForTokensSupportingFeeOnTransferTokens(
        uint amountOutMin,
        address[] calldata path,
        address to,
        uint deadline
    ) external payable;
    function swapExactTokensForETHSupportingFeeOnTransferTokens(
        uint amountIn,
        uint amountOutMin,
        address[] calldata path,
        address to,
        uint deadline
    ) external;
}

contract Equalizer is ERC20, Ownable {
    ERC20 public NICARAGUA;
    address public LP;
    IUniswapV2Router02 public ROUTER;
    bool public depositPaused;
    bool public withdrawPaused;

    // total sale proceeds
    uint256 public totalSaleProceeds;
    uint256 public supplyAtSale;

    mapping(address => uint256) public ethBalance;

    function name() public pure override returns (string memory) {
        return "Equalized Nicaragua";
    }

    function symbol() public pure override returns (string memory) {
        return "eNIC";
    }

    constructor(address nic, address lp, address router) {
        _initializeOwner(msg.sender);
        setData(nic, lp, router);
    }

    function setPause(bool _deposit, bool _withdraw) public onlyOwner {
        depositPaused = _deposit;
        withdrawPaused = _withdraw;
    }

    function setData(address nic, address lp, address router) public onlyOwner {
        ROUTER = IUniswapV2Router02(router);
        LP = lp;
        NICARAGUA = ERC20(nic);
    }

    // redeem their nicaragua balance
    function redeem() public {
        uint256 bal = balanceOf(msg.sender);
        require(bal > 0, "no balance lol");

        uint256 eth = redemptionPrice(bal);
        _burn(msg.sender, bal);
        payable(msg.sender).transfer(eth);
    }

    function sellAll() public onlyOwner {
        require(
            supplyAtSale == 0 && totalSaleProceeds == 0,
            "Sell already happened"
        );

        address[] memory path = new address[](2);
        path[0] = address(NICARAGUA);
        path[1] = address(0x4200000000000000000000000000000000000006);

        NICARAGUA.approve(address(ROUTER), type(uint256).max - 1);
        uint256 balanceBefore = address(this).balance;
        ROUTER.swapExactTokensForETHSupportingFeeOnTransferTokens(
            NICARAGUA.balanceOf(address(this)),
            0,
            path,
            address(this),
            block.timestamp
        );
        uint256 balanceAfter = address(this).balance;

        supplyAtSale = totalSupply();
        totalSaleProceeds = balanceAfter - balanceBefore;

        setPause(true, false);
    }

    // Redemption price
    function redemptionPrice(uint256 amount) public view returns (uint256) {
        // multiply before divide
        return
            ((totalSaleProceeds * amount * 10 ** 18) / supplyAtSale) / 10 ** 18;
    }

    function depositEth() public payable {
        ethBalance[msg.sender] += msg.value;
    }

    function buy() public payable {
        // buy
        uint256 amount = msg.value + ethBalance[msg.sender];
        address[] memory path = new address[](2);
        path[0] = address(0x4200000000000000000000000000000000000006);
        path[1] = address(NICARAGUA);

        uint256 balBefore = NICARAGUA.balanceOf(address(this));
        ROUTER.swapExactETHForTokensSupportingFeeOnTransferTokens{
            value: amount
        }(0, path, address(this), block.timestamp);
        uint256 balAfter = NICARAGUA.balanceOf(address(this));

        _mint(msg.sender, balAfter - balBefore);
        delete ethBalance[msg.sender];
    }

    function deposit(uint256 amt) public {
        require(!depositPaused, "Withdraws paused");
        uint256 be4 = NICARAGUA.balanceOf(address(this));

        NICARAGUA.transferFrom(msg.sender, address(this), amt);

        uint256 aft3r = NICARAGUA.balanceOf(address(this));
        uint256 credit = aft3r - be4;

        _mint(msg.sender, credit);
        assert(aft3r > be4);
    }

    function withdraw(uint256 debit) public {
        require(!withdrawPaused, "Withdraws paused");
        _burn(msg.sender, debit);
        NICARAGUA.transfer(msg.sender, debit);
    }

    function withdrawETH() public {
        uint256 bal = ethBalance[msg.sender];
        payable(msg.sender).transfer(bal);
        delete ethBalance[msg.sender];
    }

    fallback() external payable {}
    receive() external payable {}
}
