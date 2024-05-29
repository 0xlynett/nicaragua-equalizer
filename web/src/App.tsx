import { useState } from "react";
import { formatEther, parseEther } from "viem";
import { useAccount, useBalance, useConnect, useDisconnect } from "wagmi";
import { injected } from "wagmi/connectors";
import {
  useReadEqualizerRedemptionPrice,
  useReadErc20Allowance,
  useReadErc20BalanceOf,
  useWriteEqualizerBuy,
  useWriteEqualizerDeposit,
  useWriteEqualizerRedeem,
  useWriteEqualizerWithdraw,
  useWriteErc20Approve,
} from "../generated";
import config from "./config";

export default function App() {
  const [redemptionAmount, setRedemptionAmount] = useState("0");
  const [nicDepositAmount, setNicDepositAmount] = useState("0");
  const [nicWithdrawAmount, setNicWithdrawAmount] = useState("0");
  const [ethBuyAmount, setEthBuyAmount] = useState("0");

  const { connect } = useConnect();
  const { disconnect } = useDisconnect();
  const account = useAccount();

  const { data: ethBalanceData } = useBalance({ address: account.address });
  const ethBalance = formatEther(ethBalanceData?.value ?? BigInt(0));

  const { data: nicBalanceData } = useReadErc20BalanceOf({
    address: config.nicToken,
    args: [account.address],
  });
  const nicBalance = formatEther((nicBalanceData as bigint) ?? BigInt(0));

  const { data: eNicBalanceData } = useReadErc20BalanceOf({
    address: config.eNicToken,
    args: [account.address],
  });
  const eNicBalance = formatEther((eNicBalanceData as bigint) ?? BigInt(0));

  const { data: nicAllowanceData } = useReadErc20Allowance({
    address: config.nicToken,
    args: [account.address, config.eq],
  });

  const { data: redemptionPriceData } = useReadEqualizerRedemptionPrice({
    address: config.eq,
    args: [redemptionAmount],
  });
  const redemptionEth = formatEther(
    (redemptionPriceData as bigint) ?? BigInt(0)
  );

  const { writeContract: approve } = useWriteErc20Approve();
  const { writeContract: buy } = useWriteEqualizerBuy();
  const { writeContract: deposit } = useWriteEqualizerDeposit();
  const { writeContract: withdraw } = useWriteEqualizerWithdraw();
  const { writeContract: redeem } = useWriteEqualizerRedeem();

  /*useEffect(() => {
    console.error(buyError);
  }, [buyError]);
  useEffect(() => {
    console.error(depositError);
  }, [depositError]);
  useEffect(() => {
    console.error(withdrawError);
  }, [withdrawError]);*/

  return (
    <div className="min-h-screen p-8">
      <div className="border p-4 font-serif h-full">
        <h1 className="font-bold text-3xl">NICCA ORCHESTRA</h1>

        <p className="text-xl">
          "hodl your nicaragua, my niccas" -unknown nicaraguan, 2024
        </p>
        <p className="py-2">
          sells all the nicaragua tokens after the nuke. we are derisking
          Nicaragua for the Nicaragua Plan. (lyn is not responsible for anything
          that goes wrong with the use of this service. absolutely nothing.
          nada. zilch. the nicca orchestra takes zero fees, btw)
        </p>
        <ul className="list-disc list-inside">
          <li>
            <a href="https://worldpvp.co" className="underline text-blue-700">
              worldpvp
            </a>{" "}
            (this is the game we're playing)
          </li>
          <li>
            <a
              href="https://x.com/NicaraguaCTO"
              className="underline text-blue-700"
            >
              twitter/X (@NicaraguaCTO)
            </a>
          </li>
          <li>
            <a
              href="https://discord.gg/y62pYW5jG7"
              className="underline text-blue-700"
            >
              discord server
            </a>
          </li>
          <li>
            orchestra contract:{" "}
            <a
              href="https://basescan.org/address/0x584b4d1e63892b1ad238b25db9f0d02ecd4c8a57"
              className="underline text-blue-700"
            >
              <code>0x584b4d1e63892b1ad238b25db9f0d02ecd4c8a57</code>
            </a>
          </li>
          <li>
            nicaragua token:{" "}
            <a
              href="https://basescan.org/address/0xBDF7f7da57658A7d02c51bEC3fC427e4627ACA6f"
              className="underline text-blue-700"
            >
              <code>0xBDF7f7da57658A7d02c51bEC3fC427e4627ACA6f</code>
            </a>{" "}
            <a
              href="https://app.uniswap.org/swap?outputCurrency=0xBDF7f7da57658A7d02c51bEC3fC427e4627ACA6f"
              className="underline text-pink-500"
            >
              (also see on uniswap)
            </a>
          </li>
        </ul>

        <iframe
          id="dextools-widget"
          className="w-full h-60"
          title="DEXTools Trading Chart"
          src="https://www.dextools.io/widget-chart/en/base/pe-light/0x8bC3878e628E11c81a027860130ee4cBF655041C?theme=dark&chartType=1&chartResolution=10&drawingToolbars=false&output=embed"
        ></iframe>

        <button
          className="button text-xl my-4 font-bold"
          onClick={() => {
            if (!account.isConnected) {
              connect({ connector: injected() });
            } else {
              disconnect();
            }
          }}
        >
          {!account.isConnected && <>connect wallet</>}
          {account.isConnected && <>disconnect wallet</>}
        </button>

        {account.isConnected && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 text-left">
              <div className="border p-4">
                <label className="block font-bold">Buy eNIC</label>
                <p>
                  use your ETH to buy NICARAGUA directly and have it wrapped for
                  you. saves some of the token tax
                </p>
                <input
                  type="number"
                  min="0"
                  value={ethBuyAmount}
                  onChange={(e) => setEthBuyAmount(e.target.value)}
                />
                <button
                  className="button"
                  onClick={() => {
                    try {
                      buy({
                        address: config.eq,
                        value: parseEther(ethBuyAmount),
                      });
                    } catch (e) {
                      console.log(e);
                    }
                  }}
                >
                  buy
                </button>
                <button
                  className="block underline text-pink-600"
                  onClick={() => {
                    setEthBuyAmount(ethBalance);
                  }}
                >
                  you have {ethBalance} ETH
                </button>
              </div>
              <div className="border p-4">
                <label className="block font-bold">
                  Deposit NICARAGUA &rarr; eNIC
                </label>
                <p>(2.5% fee on transfer, we can't change this)</p>
                <input
                  type="number"
                  value={nicDepositAmount}
                  min="0"
                  onChange={(e) => setNicDepositAmount(e.target.value)}
                />

                <button
                  className="button"
                  onClick={() => {
                    try {
                      if (
                        (nicAllowanceData as bigint) >=
                        parseEther(nicDepositAmount)
                      ) {
                        deposit({
                          address: config.eq,
                          args: [parseEther(nicDepositAmount)],
                        });
                      } else {
                        approve({
                          address: config.nicToken,
                          args: [
                            config.eq,
                            BigInt(
                              "115792089237316195423570985008687907853269984665640564039457584007913129639935"
                            ),
                          ],
                        });
                      }
                    } catch (e) {
                      console.log(e);
                    }
                  }}
                >
                  {(nicAllowanceData as bigint) >=
                  parseEther(nicDepositAmount) ? (
                    <>deposit</>
                  ) : (
                    <>approve</>
                  )}
                </button>
                <button
                  className="block underline text-pink-600"
                  onClick={() => {
                    setNicDepositAmount(nicBalance);
                  }}
                >
                  you have {nicBalance} NIC
                </button>
              </div>
              <div className="border p-4">
                <label className="block font-bold">
                  Withdraw eNIC &rarr; NICARAGUA
                </label>
                <p>(2.5% fee on transfer, we can't change this)</p>
                <input
                  type="number"
                  min="0"
                  value={nicWithdrawAmount}
                  onChange={(e) => setNicWithdrawAmount(e.target.value)}
                />

                <button
                  className="button"
                  onClick={() => {
                    try {
                      withdraw({
                        address: config.eq,
                        args: [parseEther(nicWithdrawAmount)],
                      });
                    } catch (e) {
                      console.log(e);
                    }
                  }}
                >
                  withdraw
                </button>
                <button
                  className="block underline text-pink-600"
                  onClick={() => {
                    setNicWithdrawAmount(eNicBalance);
                  }}
                >
                  you have {eNicBalance} eNIC
                </button>
              </div>
            </div>
            <div className="border p-4">
              <label className="block font-bold">Redeem eNIC &rarr; ETH</label>
              <p>
                Coins can only be redeemed after the admins have called{" "}
                <code>sellAll()</code>.
              </p>
              <input
                type="number"
                min="0"
                value={redemptionAmount}
                onChange={(e) => setRedemptionAmount(e.target.value)}
              />

              <button
                className="button"
                onClick={() => {
                  try {
                    redeem({
                      address: config.eq,
                      args: [parseEther(redemptionAmount)],
                    });
                  } catch (e) {
                    console.log(e);
                  }
                }}
              >
                redeem for {redemptionEth} ETH
              </button>
              <button
                className="block underline text-pink-600"
                onClick={() => {
                  setRedemptionAmount(eNicBalance);
                }}
              >
                you have {eNicBalance} eNIC
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
