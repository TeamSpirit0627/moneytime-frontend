import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [

  {
    uuid: 0,
    pId: 1,
    stakingToken: tokens.wbnb,
    earningToken: tokens.money,
    contractAddress: {
      97: '0x3A63BE1979503b74B707aFCd213512b9a95711BA',
      56: '',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 0,
    tokenPerBlock: '3',
  },
  {
    uuid: 1,
    pId: 2,
    stakingToken: tokens.glto,
    earningToken: tokens.money,
    contractAddress: {
      97: '0x3A63BE1979503b74B707aFCd213512b9a95711BA',
      56: '',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 2,
    tokenPerBlock: '3',
  },
  {
    uuid: 2,
    pId: 0,
    stakingToken: tokens.busd,
    earningToken: tokens.money,
    contractAddress: {
      97: '0x3A63BE1979503b74B707aFCd213512b9a95711BA',
      56: '',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '2',
    sortOrder: 4,
    isFinished: false,
  },
  {
    uuid: 3,
    pId: 3,
    stakingToken: tokens.btcb,
    earningToken: tokens.money,
    contractAddress: {
      97: '0x3A63BE1979503b74B707aFCd213512b9a95711BA',
      56: '',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 6,
    tokenPerBlock: '2',
  },
  {
    uuid: 4,
    pId: 4,
    stakingToken: tokens.eth,
    earningToken: tokens.money,
    contractAddress: {
      97: '0x3A63BE1979503b74B707aFCd213512b9a95711BA',
      56: '',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 8,
    tokenPerBlock: '2',
  },
  {
    uuid: 5,
    pId: 5,
    stakingToken: tokens.dot,
    earningToken: tokens.money,
    contractAddress: {
      97: '0x3A63BE1979503b74B707aFCd213512b9a95711BA',
      56: '',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 10,
    tokenPerBlock: '2',
  },
  {
    uuid: 6,
    pId: 6,
    stakingToken: tokens.dai,
    earningToken: tokens.money,
    contractAddress: {
      97: '0x3A63BE1979503b74B707aFCd213512b9a95711BA',
      56: '',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 12,
    tokenPerBlock: '1',
  },
  {
    uuid: 7,
    pId: 7,
    stakingToken: tokens.usdc,
    earningToken: tokens.money,
    contractAddress: {
      97: '0x3A63BE1979503b74B707aFCd213512b9a95711BA',
      56: '',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 14,
    tokenPerBlock: '1',
  },
  {
    uuid: 8,
    pId: 9,
    stakingToken: tokens.cake,
    earningToken: tokens.money,
    contractAddress: {
      97: '0x3A63BE1979503b74B707aFCd213512b9a95711BA',
      56: '',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 16,
    tokenPerBlock: '1',
  },
  {
    uuid: 9,
    pId: 8,
    stakingToken: tokens.usdt,
    earningToken: tokens.money,
    contractAddress: {
      97: '0x3A63BE1979503b74B707aFCd213512b9a95711BA',
      56: '',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 18,
    tokenPerBlock: '1',
  },
  {
    uuid: 10,
    pId: 10,
    stakingToken: tokens.wbnb,
    earningToken: tokens.time,
    contractAddress: {
      97: '0x16a5f09684C906197753b05C9A50C402aff7733C',
      56: '',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 1,
    tokenPerBlock: '6',
  },
  {
    uuid: 11,
    pId: 11,
    stakingToken: tokens.glto,
    earningToken: tokens.time,
    contractAddress: {
      97: '0x16a5f09684C906197753b05C9A50C402aff7733C',
      56: '',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 3,
    tokenPerBlock: '6',
  },
  {
    uuid: 12,
    pId: 12,
    stakingToken: tokens.busd,
    earningToken: tokens.time,
    contractAddress: {
      97: '0x16a5f09684C906197753b05C9A50C402aff7733C',
      56: '',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 5,
    tokenPerBlock: '4',
  },
  {
    uuid: 13,
    pId: 13,
    stakingToken: tokens.btcb,
    earningToken: tokens.time,
    contractAddress: {
      97: '0x16a5f09684C906197753b05C9A50C402aff7733C',
      56: '',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 7,
    tokenPerBlock: '4',
  },
  {
    uuid: 14,
    pId: 14,
    stakingToken: tokens.eth,
    earningToken: tokens.time,
    contractAddress: {
      97: '0x16a5f09684C906197753b05C9A50C402aff7733C',
      56: '',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 9,
    tokenPerBlock: '4',
  },
  {
    uuid: 15,
    pId: 15,
    stakingToken: tokens.dot,
    earningToken: tokens.time,
    contractAddress: {
      97: '0x16a5f09684C906197753b05C9A50C402aff7733C',
      56: '',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 11,
    tokenPerBlock: '4',
  },
  {
    uuid: 16,
    pId: 16,
    stakingToken: tokens.cake,
    earningToken: tokens.time,
    contractAddress: {
      97: '0x16a5f09684C906197753b05C9A50C402aff7733C',
      56: '',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 17,
    tokenPerBlock: '4',
  },
  {
    uuid: 17,
    pId: 17,
    stakingToken: tokens.dai,
    earningToken: tokens.time,
    contractAddress: {
      97: '0x16a5f09684C906197753b05C9A50C402aff7733C',
      56: '',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 13,
    tokenPerBlock: '3',
  },
  {
    uuid: 18,
    pId: 18,
    stakingToken: tokens.usdt,
    earningToken: tokens.time,
    contractAddress: {
      97: '0x16a5f09684C906197753b05C9A50C402aff7733C',
      56: '',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 19,
    tokenPerBlock: '3',
  },
  {
    uuid: 19,
    pId: 19,
    stakingToken: tokens.usdc,
    earningToken: tokens.time,
    contractAddress: {
      97: '0x16a5f09684C906197753b05C9A50C402aff7733C',
      56: '',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 15,
    tokenPerBlock: '3',
  }
]

export default pools
