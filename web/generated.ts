import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc20Abi = [
  {
    type: 'function',
    inputs: [],
    name: 'DOMAIN_SEPARATOR',
    outputs: [{ name: 'result', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: 'result', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: 'result', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'nonces',
    outputs: [{ name: 'result', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'permit',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: 'result', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  { type: 'error', inputs: [], name: 'AllowanceOverflow' },
  { type: 'error', inputs: [], name: 'AllowanceUnderflow' },
  { type: 'error', inputs: [], name: 'InsufficientAllowance' },
  { type: 'error', inputs: [], name: 'InsufficientBalance' },
  { type: 'error', inputs: [], name: 'InvalidPermit' },
  { type: 'error', inputs: [], name: 'PermitExpired' },
  { type: 'error', inputs: [], name: 'TotalSupplyOverflow' },
]

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Equalizer
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const equalizerAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: 'nic', internalType: 'address', type: 'address' },
      { name: 'router', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  { type: 'fallback', stateMutability: 'payable' },
  { type: 'receive', stateMutability: 'payable' },
  {
    type: 'function',
    inputs: [],
    name: 'DOMAIN_SEPARATOR',
    outputs: [{ name: 'result', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'NICARAGUA',
    outputs: [{ name: '', internalType: 'contract ERC20', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'ROUTER',
    outputs: [
      {
        name: '',
        internalType: 'contract IUniswapV2Router02',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: 'result', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: 'result', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'buy',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'cancelOwnershipHandover',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'pendingOwner', internalType: 'address', type: 'address' },
    ],
    name: 'completeOwnershipHandover',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'amt', internalType: 'uint256', type: 'uint256' }],
    name: 'deposit',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'depositEth',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'depositPaused',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'ethBalance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'nonces',
    outputs: [{ name: 'result', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: 'result', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'pendingOwner', internalType: 'address', type: 'address' },
    ],
    name: 'ownershipHandoverExpiresAt',
    outputs: [{ name: 'result', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'permit',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'redeem',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
    name: 'redemptionPrice',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'requestOwnershipHandover',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'sellAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'nic', internalType: 'address', type: 'address' },
      { name: 'router', internalType: 'address', type: 'address' },
    ],
    name: 'setData',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_deposit', internalType: 'bool', type: 'bool' },
      { name: '_withdraw', internalType: 'bool', type: 'bool' },
    ],
    name: 'setPause',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'supplyAtSale',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSaleProceeds',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: 'result', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [{ name: 'debit', internalType: 'uint256', type: 'uint256' }],
    name: 'withdraw',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'withdrawETH',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'withdrawPaused',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'pendingOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipHandoverCanceled',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'pendingOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipHandoverRequested',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'oldOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  { type: 'error', inputs: [], name: 'AllowanceOverflow' },
  { type: 'error', inputs: [], name: 'AllowanceUnderflow' },
  { type: 'error', inputs: [], name: 'AlreadyInitialized' },
  { type: 'error', inputs: [], name: 'InsufficientAllowance' },
  { type: 'error', inputs: [], name: 'InsufficientBalance' },
  { type: 'error', inputs: [], name: 'InvalidPermit' },
  { type: 'error', inputs: [], name: 'NewOwnerIsZeroAddress' },
  { type: 'error', inputs: [], name: 'NoHandoverRequest' },
  { type: 'error', inputs: [], name: 'PermitExpired' },
  { type: 'error', inputs: [], name: 'TotalSupplyOverflow' },
  { type: 'error', inputs: [], name: 'Unauthorized' },
]

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const useReadErc20 = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"DOMAIN_SEPARATOR"`
 */
export const useReadErc20DomainSeparator = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'DOMAIN_SEPARATOR',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"allowance"`
 */
export const useReadErc20Allowance = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'allowance',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadErc20BalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"decimals"`
 */
export const useReadErc20Decimals = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'decimals',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"name"`
 */
export const useReadErc20Name = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"nonces"`
 */
export const useReadErc20Nonces = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'nonces',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"symbol"`
 */
export const useReadErc20Symbol = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadErc20TotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const useWriteErc20 = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"approve"`
 */
export const useWriteErc20Approve = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"permit"`
 */
export const useWriteErc20Permit = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
  functionName: 'permit',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transfer"`
 */
export const useWriteErc20Transfer = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteErc20TransferFrom = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const useSimulateErc20 = /*#__PURE__*/ createUseSimulateContract({
  abi: erc20Abi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"approve"`
 */
export const useSimulateErc20Approve = /*#__PURE__*/ createUseSimulateContract({
  abi: erc20Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"permit"`
 */
export const useSimulateErc20Permit = /*#__PURE__*/ createUseSimulateContract({
  abi: erc20Abi,
  functionName: 'permit',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateErc20Transfer = /*#__PURE__*/ createUseSimulateContract(
  { abi: erc20Abi, functionName: 'transfer' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateErc20TransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20Abi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20Abi}__
 */
export const useWatchErc20Event = /*#__PURE__*/ createUseWatchContractEvent({
  abi: erc20Abi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20Abi}__ and `eventName` set to `"Approval"`
 */
export const useWatchErc20ApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20Abi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20Abi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchErc20TransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20Abi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link equalizerAbi}__
 */
export const useReadEqualizer = /*#__PURE__*/ createUseReadContract({
  abi: equalizerAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link equalizerAbi}__ and `functionName` set to `"DOMAIN_SEPARATOR"`
 */
export const useReadEqualizerDomainSeparator =
  /*#__PURE__*/ createUseReadContract({
    abi: equalizerAbi,
    functionName: 'DOMAIN_SEPARATOR',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link equalizerAbi}__ and `functionName` set to `"NICARAGUA"`
 */
export const useReadEqualizerNicaragua = /*#__PURE__*/ createUseReadContract({
  abi: equalizerAbi,
  functionName: 'NICARAGUA',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link equalizerAbi}__ and `functionName` set to `"ROUTER"`
 */
export const useReadEqualizerRouter = /*#__PURE__*/ createUseReadContract({
  abi: equalizerAbi,
  functionName: 'ROUTER',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link equalizerAbi}__ and `functionName` set to `"allowance"`
 */
export const useReadEqualizerAllowance = /*#__PURE__*/ createUseReadContract({
  abi: equalizerAbi,
  functionName: 'allowance',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link equalizerAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadEqualizerBalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: equalizerAbi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link equalizerAbi}__ and `functionName` set to `"decimals"`
 */
export const useReadEqualizerDecimals = /*#__PURE__*/ createUseReadContract({
  abi: equalizerAbi,
  functionName: 'decimals',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link equalizerAbi}__ and `functionName` set to `"depositPaused"`
 */
export const useReadEqualizerDepositPaused =
  /*#__PURE__*/ createUseReadContract({
    abi: equalizerAbi,
    functionName: 'depositPaused',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link equalizerAbi}__ and `functionName` set to `"ethBalance"`
 */
export const useReadEqualizerEthBalance = /*#__PURE__*/ createUseReadContract({
  abi: equalizerAbi,
  functionName: 'ethBalance',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link equalizerAbi}__ and `functionName` set to `"name"`
 */
export const useReadEqualizerName = /*#__PURE__*/ createUseReadContract({
  abi: equalizerAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link equalizerAbi}__ and `functionName` set to `"nonces"`
 */
export const useReadEqualizerNonces = /*#__PURE__*/ createUseReadContract({
  abi: equalizerAbi,
  functionName: 'nonces',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link equalizerAbi}__ and `functionName` set to `"owner"`
 */
export const useReadEqualizerOwner = /*#__PURE__*/ createUseReadContract({
  abi: equalizerAbi,
  functionName: 'owner',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link equalizerAbi}__ and `functionName` set to `"ownershipHandoverExpiresAt"`
 */
export const useReadEqualizerOwnershipHandoverExpiresAt =
  /*#__PURE__*/ createUseReadContract({
    abi: equalizerAbi,
    functionName: 'ownershipHandoverExpiresAt',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link equalizerAbi}__ and `functionName` set to `"redemptionPrice"`
 */
export const useReadEqualizerRedemptionPrice =
  /*#__PURE__*/ createUseReadContract({
    abi: equalizerAbi,
    functionName: 'redemptionPrice',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link equalizerAbi}__ and `functionName` set to `"supplyAtSale"`
 */
export const useReadEqualizerSupplyAtSale = /*#__PURE__*/ createUseReadContract(
  { abi: equalizerAbi, functionName: 'supplyAtSale' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link equalizerAbi}__ and `functionName` set to `"symbol"`
 */
export const useReadEqualizerSymbol = /*#__PURE__*/ createUseReadContract({
  abi: equalizerAbi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link equalizerAbi}__ and `functionName` set to `"totalSaleProceeds"`
 */
export const useReadEqualizerTotalSaleProceeds =
  /*#__PURE__*/ createUseReadContract({
    abi: equalizerAbi,
    functionName: 'totalSaleProceeds',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link equalizerAbi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadEqualizerTotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: equalizerAbi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link equalizerAbi}__ and `functionName` set to `"withdrawPaused"`
 */
export const useReadEqualizerWithdrawPaused =
  /*#__PURE__*/ createUseReadContract({
    abi: equalizerAbi,
    functionName: 'withdrawPaused',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link equalizerAbi}__
 */
export const useWriteEqualizer = /*#__PURE__*/ createUseWriteContract({
  abi: equalizerAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link equalizerAbi}__ and `functionName` set to `"approve"`
 */
export const useWriteEqualizerApprove = /*#__PURE__*/ createUseWriteContract({
  abi: equalizerAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link equalizerAbi}__ and `functionName` set to `"buy"`
 */
export const useWriteEqualizerBuy = /*#__PURE__*/ createUseWriteContract({
  abi: equalizerAbi,
  functionName: 'buy',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link equalizerAbi}__ and `functionName` set to `"cancelOwnershipHandover"`
 */
export const useWriteEqualizerCancelOwnershipHandover =
  /*#__PURE__*/ createUseWriteContract({
    abi: equalizerAbi,
    functionName: 'cancelOwnershipHandover',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link equalizerAbi}__ and `functionName` set to `"completeOwnershipHandover"`
 */
export const useWriteEqualizerCompleteOwnershipHandover =
  /*#__PURE__*/ createUseWriteContract({
    abi: equalizerAbi,
    functionName: 'completeOwnershipHandover',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link equalizerAbi}__ and `functionName` set to `"deposit"`
 */
export const useWriteEqualizerDeposit = /*#__PURE__*/ createUseWriteContract({
  abi: equalizerAbi,
  functionName: 'deposit',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link equalizerAbi}__ and `functionName` set to `"depositEth"`
 */
export const useWriteEqualizerDepositEth = /*#__PURE__*/ createUseWriteContract(
  { abi: equalizerAbi, functionName: 'depositEth' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link equalizerAbi}__ and `functionName` set to `"permit"`
 */
export const useWriteEqualizerPermit = /*#__PURE__*/ createUseWriteContract({
  abi: equalizerAbi,
  functionName: 'permit',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link equalizerAbi}__ and `functionName` set to `"redeem"`
 */
export const useWriteEqualizerRedeem = /*#__PURE__*/ createUseWriteContract({
  abi: equalizerAbi,
  functionName: 'redeem',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link equalizerAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useWriteEqualizerRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: equalizerAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link equalizerAbi}__ and `functionName` set to `"requestOwnershipHandover"`
 */
export const useWriteEqualizerRequestOwnershipHandover =
  /*#__PURE__*/ createUseWriteContract({
    abi: equalizerAbi,
    functionName: 'requestOwnershipHandover',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link equalizerAbi}__ and `functionName` set to `"sellAll"`
 */
export const useWriteEqualizerSellAll = /*#__PURE__*/ createUseWriteContract({
  abi: equalizerAbi,
  functionName: 'sellAll',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link equalizerAbi}__ and `functionName` set to `"setData"`
 */
export const useWriteEqualizerSetData = /*#__PURE__*/ createUseWriteContract({
  abi: equalizerAbi,
  functionName: 'setData',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link equalizerAbi}__ and `functionName` set to `"setPause"`
 */
export const useWriteEqualizerSetPause = /*#__PURE__*/ createUseWriteContract({
  abi: equalizerAbi,
  functionName: 'setPause',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link equalizerAbi}__ and `functionName` set to `"transfer"`
 */
export const useWriteEqualizerTransfer = /*#__PURE__*/ createUseWriteContract({
  abi: equalizerAbi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link equalizerAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteEqualizerTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: equalizerAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link equalizerAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useWriteEqualizerTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: equalizerAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link equalizerAbi}__ and `functionName` set to `"withdraw"`
 */
export const useWriteEqualizerWithdraw = /*#__PURE__*/ createUseWriteContract({
  abi: equalizerAbi,
  functionName: 'withdraw',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link equalizerAbi}__ and `functionName` set to `"withdrawETH"`
 */
export const useWriteEqualizerWithdrawEth =
  /*#__PURE__*/ createUseWriteContract({
    abi: equalizerAbi,
    functionName: 'withdrawETH',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link equalizerAbi}__
 */
export const useSimulateEqualizer = /*#__PURE__*/ createUseSimulateContract({
  abi: equalizerAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link equalizerAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulateEqualizerApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: equalizerAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link equalizerAbi}__ and `functionName` set to `"buy"`
 */
export const useSimulateEqualizerBuy = /*#__PURE__*/ createUseSimulateContract({
  abi: equalizerAbi,
  functionName: 'buy',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link equalizerAbi}__ and `functionName` set to `"cancelOwnershipHandover"`
 */
export const useSimulateEqualizerCancelOwnershipHandover =
  /*#__PURE__*/ createUseSimulateContract({
    abi: equalizerAbi,
    functionName: 'cancelOwnershipHandover',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link equalizerAbi}__ and `functionName` set to `"completeOwnershipHandover"`
 */
export const useSimulateEqualizerCompleteOwnershipHandover =
  /*#__PURE__*/ createUseSimulateContract({
    abi: equalizerAbi,
    functionName: 'completeOwnershipHandover',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link equalizerAbi}__ and `functionName` set to `"deposit"`
 */
export const useSimulateEqualizerDeposit =
  /*#__PURE__*/ createUseSimulateContract({
    abi: equalizerAbi,
    functionName: 'deposit',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link equalizerAbi}__ and `functionName` set to `"depositEth"`
 */
export const useSimulateEqualizerDepositEth =
  /*#__PURE__*/ createUseSimulateContract({
    abi: equalizerAbi,
    functionName: 'depositEth',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link equalizerAbi}__ and `functionName` set to `"permit"`
 */
export const useSimulateEqualizerPermit =
  /*#__PURE__*/ createUseSimulateContract({
    abi: equalizerAbi,
    functionName: 'permit',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link equalizerAbi}__ and `functionName` set to `"redeem"`
 */
export const useSimulateEqualizerRedeem =
  /*#__PURE__*/ createUseSimulateContract({
    abi: equalizerAbi,
    functionName: 'redeem',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link equalizerAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useSimulateEqualizerRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: equalizerAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link equalizerAbi}__ and `functionName` set to `"requestOwnershipHandover"`
 */
export const useSimulateEqualizerRequestOwnershipHandover =
  /*#__PURE__*/ createUseSimulateContract({
    abi: equalizerAbi,
    functionName: 'requestOwnershipHandover',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link equalizerAbi}__ and `functionName` set to `"sellAll"`
 */
export const useSimulateEqualizerSellAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: equalizerAbi,
    functionName: 'sellAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link equalizerAbi}__ and `functionName` set to `"setData"`
 */
export const useSimulateEqualizerSetData =
  /*#__PURE__*/ createUseSimulateContract({
    abi: equalizerAbi,
    functionName: 'setData',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link equalizerAbi}__ and `functionName` set to `"setPause"`
 */
export const useSimulateEqualizerSetPause =
  /*#__PURE__*/ createUseSimulateContract({
    abi: equalizerAbi,
    functionName: 'setPause',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link equalizerAbi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateEqualizerTransfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: equalizerAbi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link equalizerAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateEqualizerTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: equalizerAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link equalizerAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useSimulateEqualizerTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: equalizerAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link equalizerAbi}__ and `functionName` set to `"withdraw"`
 */
export const useSimulateEqualizerWithdraw =
  /*#__PURE__*/ createUseSimulateContract({
    abi: equalizerAbi,
    functionName: 'withdraw',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link equalizerAbi}__ and `functionName` set to `"withdrawETH"`
 */
export const useSimulateEqualizerWithdrawEth =
  /*#__PURE__*/ createUseSimulateContract({
    abi: equalizerAbi,
    functionName: 'withdrawETH',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link equalizerAbi}__
 */
export const useWatchEqualizerEvent = /*#__PURE__*/ createUseWatchContractEvent(
  { abi: equalizerAbi },
)

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link equalizerAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchEqualizerApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: equalizerAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link equalizerAbi}__ and `eventName` set to `"OwnershipHandoverCanceled"`
 */
export const useWatchEqualizerOwnershipHandoverCanceledEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: equalizerAbi,
    eventName: 'OwnershipHandoverCanceled',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link equalizerAbi}__ and `eventName` set to `"OwnershipHandoverRequested"`
 */
export const useWatchEqualizerOwnershipHandoverRequestedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: equalizerAbi,
    eventName: 'OwnershipHandoverRequested',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link equalizerAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const useWatchEqualizerOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: equalizerAbi,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link equalizerAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchEqualizerTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: equalizerAbi,
    eventName: 'Transfer',
  })
