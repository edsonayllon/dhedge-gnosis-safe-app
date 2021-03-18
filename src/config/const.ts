
import { SynthName, Synths, SynthsAddressesMap } from "types/synths.types";


const SYNTH_ADDRESS_MAP: SynthsAddressesMap = Object.freeze({
  kovan: {
    sUSD: "0x57Ab1ec28D129707052df4dF418D58a2D46d5f51",
    sGBP: "0x41d49b1ac182C9d2c8dDf8b450342DE2Ac03aC19",
    sEUR: "0x57E8Bd85F3d8De4557739bc3C5ee0f4bfC931528",
    sJPY: "0xCcC5c7625c90FC93D2508723e60281E6DE535166",
    sCHF: "0x8E23100f9C9bd442f5bAc6A927f49B284E390Df4",
    sETH: "0x54c4B5cb58C880DD1734123c8b588e49eDf442Fb",
    sBTC: "0x3Aa2d4A15aA7F50158DEEAE0208F862a461f19Cf",
    sDEFI: "0xf91b2d345838922b26c8899483be3f867eeaFAb5",
    sCEX: "0xAE1101551c334Ed0f4c6238E7fD4Fc0fdB2b7C77",
    sBNB: "0x4D5C55a1046725a80B20296D0A98DcE02d8eAAc3",
    sLINK: "0x3a4A90a2D8cBA26F2e32C4a6e6d01ffBfCE8DBB4",
    sEOS: "0x2fc23EfCDc06636DE7f9CFfB70a8a2A10C5b601e",
    sTRX: "0x0754bd514B7b41052777417217655fD7254F4528",
    sXRP: "0x5C59b3eFAE14Bb56c30319fbAF0413b543278382",
    sXMR: "0x4708C998e2979f77766258bE94526BAfa84b1270",
    sLTC: "0xCffb601E31D4f1D967Aac24f742DEEb2459a2e18",
    sXTZ: "0xd39bBa8F8049674152B5439A631eEd691436b92a",
    sADA: "0xBA939808928b7a823D6F1Fc6522FC57A8000694b",
    sDASH: "0xE4bC13C29513e5D0BdD68258325f2D01a4B641A0",
    sETC: "0x2De5Edf295c21FCBA340A4C4fa9F376F24282E73",
    sAAVE: "",
    sCOMP: "",
    sDOT: "",
    sREN: "",
    sUNI: "",
    sYFI: "",
    iETH: "0x498df32429693fE31685Da7fb9B4b65696a5508d",
    iBTC: "0xF418D59792E4bd9ab8cC4b733Ea60edC01abc77c",
    iDEFI: "0x23Db12CF9Ad1fBBdE25650D4AAA6B46AC17EAA80",
    iCEX: "0x5047d4FeD0805632a6d84D16C08E9899d17ef3e2",
    iBNB: "0xdbB1D3B58D7e101588a44E642F8c442165730289",
    iLINK: "0x21dc51Dd8BFfeCe537eFf6FbAB3D1C82340b0A40",
    iEOS: "0xEe2d75e783df7c191012896BFf140fc2Bec08b3a",
    iTRX: "0x4C3213Db129C528D97CBF48f451913071b094Af2",
    iXRP: "0x141A298596a25D86D0E6D4F8cC0eC0223ebaa938",
    iXMR: "0xCE532C4e0de97C43374E0e26D6134Aa33F297dBb",
    iLTC: "0xcC72c855D4d5792938611Ca44Bd3A07860f64dd0",
    iXTZ: "0x022E3dFfDeE42eE5C9d3335c1fbC1100b29Ab9ab",
    iADA: "0x15697a9dc703FfB6dc6AC40f7A144284D3a73bEB",
    iDASH: "0x7A2354508041246F50d527081937C5CB872468c8",
    iETC: "0xe7FcFd693dD77a083d0B38ad399f9b6b8B37A597",
    iAAVE: "",
    iCOMP: "",
    iDOT: "",
    iREN: "",
    iUNI: "",
    iYFI: "",
    sXAG: "0x0Ae5a541ea8FD2e8E3b514D8706ac26e3a30272b",
    sXAU: "0xbc62e250AD0e6759FC104f09C4a7F8b83129346f",
    sOIL: "",
    iOIL: "",
  },
  ropsten: {
    sUSD: "0x21718C0FbD10900565fa57C76e1862cd3F6a4d8E",
    sGBP: "0x3DdF5dAd59F8F8e8f957709B044eE84e87B42e25",
    sEUR: "0x2a27a3113368836b2BE598a4BB9a0d4D7A734305",
    sJPY: "0x406555dbF02e9E4df9AdeAeC9DA76ABeED8C1BC3",
    sCHF: "0x7e5c4C5f54847772690380d5ac50c59a4C374E2f",
    sETH: "0x0Df1B6d92feBCA3B2793AfA3649868991CC4901D",
    sBTC: "0xC1701AbD559FC263829CA3917d03045F95b5224A",
    sDEFI: "0xfc107409aA984e300D5f10530Eef41221FC65B15",
    sCEX: "0x676f87A2122cc0e81443828b0d55A8817656CBc1",
    sBNB: "0x5fF1b87fBfDE943568C533f2a5f78F8d9C00539b",
    sLINK: "0x33D1F1FeAf2Cd3cC46Ca8F04Fb0Ca7BC0A4484Fd",
    sEOS: "0x22C8694a6F68F29b4Df50E94f848ee435FCFba9f",
    sTRX: "0xE403013d6ac402ef5A70A4dE524d5894d0188e25",
    sXRP: "0x4711064E2C2731463570C8C9f6717A1902B346C2",
    sXMR: "0x70287F4abde5AE17A7EF9453761d693B7e4D5539",
    sLTC: "0x69AD82d83c1e11D27473339B8990A6b8C7B8194C",
    sXTZ: "0x2E4D9524dA9Af751E776d361dd2b9bE9b6086b30",
    sADA: "0x44d2402Ed7BcA41Fc32970Fc443Be6eb397CAcAD",
    sDASH: "0xdDB882a06EbC7Dc4Abb93AD4bBbA83644A33dD88",
    sETC: "0x847fA121D289DF87532178B8e600804733386096",
    sAAVE: "",
    sCOMP: "",
    sDOT: "",
    sREN: "",
    sUNI: "",
    sYFI: "",
    iETH: "0x4f8F2f82C50F562A42DED63E182c6094fFBC7485",
    iBTC: "0xdFb8e9bA49737Cd0E235975FF164298Fc625b762",
    iDEFI: "0x5F3fDF19d9358803275E4A8F32CEC96B79d868a9",
    iCEX: "0x546df3DF51979Fdf3eeb2ED2A5bB2d6883B01000",
    iBNB: "0x31ddCB898F22425712A07e98ad2df3bb412774e1",
    iLINK: "0x8AAB981c4E0600eeC73Cce7195E27B134df87df6",
    iEOS: "0xF83D3d413454d75972a061Ae5e8F725A8000F549",
    iTRX: "0x6289fd70d3Dce8DE61896959cdEfcFF3cE46A108",
    iXRP: "0x094a05CaCCF0e3ece5ba5729Ea25d92bE9D673fF",
    iXMR: "0xBc50CE04E64EB3cB5b22EcF3ceFa420E2fc245FC",
    iLTC: "0xE8600a4281a9BEAD448dC3f257722c9743dF6ea7",
    iXTZ: "0x04CFbc89F161EE33f4984490B1B73A2D1548fA3D",
    iADA: "0x3e575de0C160896cAE498e3a64aB3313A21073ef",
    iDASH: "0xA9EaBdef4e0CB5090FF6988AB734038517F0B962",
    iETC: "0xF3C82a1881F5c83B95A4a1B3B96D15775eD94563",
    iAAVE: "",
    iCOMP: "",
    iDOT: "",
    iREN: "",
    iUNI: "",
    iYFI: "",
    sXAG: "0x6b2eF4a920a0AA00298bDABf1FDDb2F1790FaA68",
    sXAU: "0x7aBc1EA6816424E474Ad6efCE5B9153C9B7952b0",
    sOIL: "",
    iOIL: "",
  },
  mainnet: {
    sUSD: "0x57Ab1ec28D129707052df4dF418D58a2D46d5f51",
    sGBP: "0x97fe22E7341a0Cd8Db6F6C021A24Dc8f4DAD855F",
    sEUR: "0xD71eCFF9342A5Ced620049e616c5035F1dB98620",
    sJPY: "0xF6b1C627e95BFc3c1b4c9B825a032Ff0fBf3e07d",
    sCHF: "0x0F83287FF768D1c1e17a42F44d644D7F22e8ee1d",
    sETH: "0x5e74C9036fb86BD7eCdcb084a0673EFc32eA31cb",
    sBTC: "0xfE18be6b3Bd88A2D2A7f928d00292E7a9963CfC6",
    sDEFI: "0xe1aFe1Fd76Fd88f78cBf599ea1846231B8bA3B6B",
    sCEX: "0xeABACD844A196D7Faf3CE596edeBF9900341B420",
    sBNB: "0x617aeCB6137B5108D1E7D4918e3725C8cEbdB848",
    sLINK: "0xbBC455cb4F1B9e4bFC4B73970d360c8f032EfEE6",
    sEOS: "0x88C8Cf3A212c0369698D13FE98Fcb76620389841",
    sTRX: "0xf2E08356588EC5cd9E437552Da87C0076b4970B0",
    sXRP: "0xa2B0fDe6D710e201d0d608e924A484d1A5fEd57c",
    sXMR: "0x5299d6F7472DCc137D7f3C4BcfBBB514BaBF341A",
    sLTC: "0xC14103C2141E842e228FBaC594579e798616ce7A",
    sXTZ: "0x2e59005c5c0f0a4D77CcA82653d48b46322EE5Cd",
    sADA: "0xe36E2D3c7c34281FA3bC737950a68571736880A1",
    sDASH: "0xfE33ae95A9f0DA8A845aF33516EDc240DCD711d6",
    sETC: "0x22602469d704BfFb0936c7A7cfcD18f7aA269375",
    sAAVE: "0xd2dF355C19471c8bd7D8A3aa27Ff4e26A21b4076",
    sCOMP: "0xEb029507d3e043DD6C87F2917C4E82B902c35618",
    sDOT: "0x1715AC0743102BF5Cd58EfBB6Cf2dC2685d967b6",
    sREN: "0xD31533E8d0f3DF62060e94B3F1318137bB6E3525",
    sUNI: "0x30635297E450b930f8693297eBa160D9e6c8eBcf",
    sYFI: "0x992058B7DB08F9734d84485bfbC243C4ee6954A7",
    iETH: "0xA9859874e1743A32409f75bB11549892138BBA1E",
    iBTC: "0xD6014EA05BDe904448B743833dDF07c3C7837481",
    iDEFI: "0x14d10003807AC60d07BB0ba82cAeaC8d2087c157",
    iCEX: "0x336213e1DDFC69f4701Fc3F86F4ef4A160c1159d",
    iBNB: "0xAFD870F32CE54EfdBF677466B612bf8ad164454B",
    iLINK: "0x2d7aC061fc3db53c39fe1607fB8cec1B2C162B01",
    iEOS: "0xF4EebDD0704021eF2a6Bbe993fdf93030Cd784b4",
    iTRX: "0xC5807183a9661A533CB08CbC297594a0B864dc12",
    iXRP: "0x27269b3e45A4D3E79A3D6BFeE0C8fB13d0D711A6",
    iXMR: "0x4AdF728E2Df4945082cDD6053869f51278fae196",
    iLTC: "0x79da1431150C9b82D2E5dfc1C68B33216846851e",
    iXTZ: "0x8deef89058090ac5655A99EEB451a4f9183D1678",
    iADA: "0x8A8079c7149B8A1611e5C5d978DCA3bE16545F83",
    iDASH: "0xCB98f42221b2C251A4E74A1609722eE09f0cc08E",
    iETC: "0xd50c1746D835d2770dDA3703B69187bFfeB14126",
    iAAVE: "0x176C674Ee533C6139B0dc8b458D72A93dCB3e705",
    iCOMP: "0x6345728B1ccE16E6f8C509950b5c84FFF88530d9",
    iDOT: "0x46a97629C9C1F58De6EC18C7F536e7E6d6A6ecDe",
    iREN: "0x0fEd38108bdb8e62ef7b5680E8E0726E2F29e0De",
    iUNI: "0x36A00FF9072570eF4B9292117850B8FE08d96cce",
    iYFI: "0x592244301CeA952d6daB2fdC1fE6bd9E53917306",
    sXAG: "0x6A22e5e94388464181578Aa7A6B869e00fE27846",
    sXAU: "0x261EfCdD24CeA98652B9700800a13DfBca4103fF",
    sOIL: "0x6d16cF3EC5F763d4d99cB0B0b110eefD93B11B56",
    iOIL: "0xA5a5DF41883Cdc00c4cCC6E8097130535399d9a3",
  },
});


const SYNTHS: Synths = Object.freeze({
  sUSD: {
    type: "currency",
    description: "US Dollar",
    displayName: "sUSD",
    link: "https://docs.synthetix.io/tokens/list/#us-dollars-susd",
  },
  sGBP: {
    type: "currency",
    description: "Pound Sterling",
    displayName: "GBP",
    link: "https://docs.synthetix.io/tokens/list/#pound-sterling-sgbp",
  },
  sEUR: {
    type: "currency",
    description: "Euros",
    displayName: "EUR",
    link: "https://docs.synthetix.io/tokens/list/#euros-seur",
  },
  sJPY: {
    type: "currency",
    description: "Japanese Yen",
    displayName: "JPY",
    link: "https://docs.synthetix.io/tokens/list/#japanese-yen-sjpy",
  },
  sCHF: {
    type: "currency",
    description: "Swiss Franc",
    displayName: "CHF",
    link: "https://docs.synthetix.io/tokens/list/#swiss-franc-schf",
  },
  sETH: {
    type: "crypto",
    description: "Ethereum",
    displayName: "ETH",
    link: "https://docs.synthetix.io/tokens/list/#ether-seth",
  },
  sBTC: {
    type: "crypto",
    description: "Bitcoin",
    displayName: "BTC",
    link: "https://docs.synthetix.io/tokens/list/#bitcoin-sbtc",
  },
  sDEFI: {
    type: "crypto",
    description: "DeFi Index",
    displayName: "DEFI",
    link: "https://docs.synthetix.io/tokens/list/#defi-index-sdefi",
  },
  sCEX: {
    type: "crypto",
    description: "Centralised Exchange Index",
    displayName: "CEX",
    link: "https://docs.synthetix.io/tokens/list/#centralised-exchange-index-scex",
  },
  sBNB: {
    type: "crypto",
    description: "Binance Coin",
    displayName: "BNB",
    link: "https://docs.synthetix.io/tokens/list/#binance-coin-sbnb",
  },
  sLINK: {
    type: "crypto",
    description: "Chainlink",
    displayName: "LINK",
    link: "https://docs.synthetix.io/tokens/list/#chainlink-slink",
  },
  sEOS: {
    type: "crypto",
    description: "EOS",
    displayName: "EOS",
    link: "https://docs.synthetix.io/tokens/list/#eos-seos",
  },
  sTRX: {
    type: "crypto",
    description: "TRON",
    displayName: "TRX",
    link: "https://docs.synthetix.io/tokens/list/#tron-strx",
  },
  sXRP: {
    type: "crypto",
    description: "Ripple",
    displayName: "XRP",
    link: "https://docs.synthetix.io/tokens/list/#ripple-sxrp",
  },
  sXMR: {
    type: "crypto",
    description: "Monero",
    displayName: "XMR",
    link: "https://docs.synthetix.io/tokens/list/#monero-sxmr",
  },
  sLTC: {
    type: "crypto",
    description: "Litecoin",
    displayName: "LTC",
    link: "https://docs.synthetix.io/tokens/list/#litecoin-sltc",
  },
  sXTZ: {
    type: "crypto",
    description: "Tezos",
    displayName: "XTZ",
    link: "https://docs.synthetix.io/tokens/list/#tezos-sxtz",
  },
  sADA: {
    type: "crypto",
    description: "Cardano",
    displayName: "ADA",
    link: "https://docs.synthetix.io/tokens/list/#cardano-sada",
  },
  sDASH: {
    type: "crypto",
    description: "Dash",
    displayName: "DASH",
    link: "https://docs.synthetix.io/tokens/list/#dash-sdash",
  },
  sETC: {
    type: "crypto",
    description: "Ethereum Classic",
    displayName: "ETC",
    link: "https://docs.synthetix.io/tokens/list/#ethereum-classic-setc",
  },
  sAAVE: {
    type: "crypto",
    description: "Aave",
    displayName: "AAVE",
    link: "https://docs.synthetix.io/tokens/list/#aave-saave",
  },
  sCOMP: {
    type: "crypto",
    description: "Compound",
    displayName: "COMP",
    link: "https://docs.synthetix.io/tokens/list/#compound-scomp",
  },
  sDOT: {
    type: "crypto",
    description: "Polkadot",
    displayName: "DOT",
    link: "https://docs.synthetix.io/tokens/list/#polkadot-sdot",
  },
  sREN: {
    type: "crypto",
    description: "Ren",
    displayName: "REN",
    link: "https://docs.synthetix.io/tokens/list/#ren-sren",
  },
  sUNI: {
    type: "crypto",
    description: "Uniswap",
    displayName: "UNI",
    link: "https://docs.synthetix.io/tokens/list/#uniswap-suni",
  },
  sYFI: {
    type: "crypto",
    description: "yearn.finance",
    displayName: "YFI",
    link: "https://docs.synthetix.io/tokens/list/#yearnfinance-syfi",
  },
  iETH: {
    type: "cryptoInverse",
    description: "Inverse Ethereum",
    displayName: "iETH",
    link: "https://docs.synthetix.io/tokens/list/#inverse-ether-ieth",
  },
  iBTC: {
    type: "cryptoInverse",
    description: "Inverse Bitcoin",
    displayName: "iBTC",
    link: "https://docs.synthetix.io/tokens/list/#inverse-bitcoin-ibtc",
  },
  iDEFI: {
    type: "cryptoInverse",
    description: "Inverse DeFi Index",
    displayName: "iDEFI",
    link: "https://docs.synthetix.io/tokens/list/#inverse-defi-index-idefi",
  },
  iCEX: {
    type: "cryptoInverse",
    description: "Inverse Centralised Exchange Index",
    displayName: "iCEX",
    link: "https://docs.synthetix.io/tokens/list/#inverse-centralised-exchange-index-icex",
  },
  iBNB: {
    type: "cryptoInverse",
    description: "Inverse Binance Coin",
    displayName: "iBNB",
    link: "https://docs.synthetix.io/tokens/list/#inverse-binance-coin-ibnb",
  },
  iLINK: {
    type: "cryptoInverse",
    description: "Inverse Chainlink",
    displayName: "iLINK",
    link: "https://docs.synthetix.io/tokens/list/#inverse-chainlink-ilink",
  },
  iEOS: {
    type: "cryptoInverse",
    description: "Inverse EOS",
    displayName: "iEOS",
    link: "https://docs.synthetix.io/tokens/list/#inverse-eos-ieos",
  },
  iTRX: {
    type: "cryptoInverse",
    description: "Inverse TRON",
    displayName: "iTRX",
    link: "https://docs.synthetix.io/tokens/list/#inverse-tron-itrx",
  },
  iXRP: {
    type: "cryptoInverse",
    description: "Inverse Ripple",
    displayName: "iXRP",
    link: "https://docs.synthetix.io/tokens/list/#inverse-ripple-ixrp",
  },
  iXMR: {
    type: "cryptoInverse",
    description: "Inverse Monero",
    displayName: "iXMR",
    link: "https://docs.synthetix.io/tokens/list/#inverse-monero-ixmr",
  },
  iLTC: {
    type: "cryptoInverse",
    description: "Inverse Litecoin",
    displayName: "iLTC",
    link: "https://docs.synthetix.io/tokens/list/#inverse-litecoin-iltc",
  },
  iXTZ: {
    type: "cryptoInverse",
    description: "Inverse Tezos",
    displayName: "iXTZ",
    link: "https://docs.synthetix.io/tokens/list/#inverse-tezos-ixtz",
  },
  iADA: {
    type: "cryptoInverse",
    description: "Inverse Cardano",
    displayName: "iADA",
    link: "https://docs.synthetix.io/tokens/list/#inverse-cardano-iada",
  },
  iDASH: {
    type: "cryptoInverse",
    description: "Inverse Dash",
    displayName: "iDASH",
    link: "https://docs.synthetix.io/tokens/list/#inverse-dash-idash",
  },
  iETC: {
    type: "cryptoInverse",
    description: "Inverse Ethereum Classic",
    displayName: "iETC",
    link: "https://docs.synthetix.io/tokens/list/#inverse-ethereum-classic-ietc",
  },
  iAAVE: {
    type: "cryptoInverse",
    description: "Inverse Aave",
    displayName: "iAAVE",
    link: "https://docs.synthetix.io/tokens/list/#inverse-aave-iaave",
  },
  iCOMP: {
    type: "cryptoInverse",
    description: "Inverse Compound",
    displayName: "iCOMP",
    link: "https://docs.synthetix.io/tokens/list/#inverse-compound-icomp",
  },
  iDOT: {
    type: "cryptoInverse",
    description: "Inverse Polkadot",
    displayName: "iDOT",
    link: "https://docs.synthetix.io/tokens/list/#inverse-polkadot-idot",
  },
  iREN: {
    type: "cryptoInverse",
    description: "Inverse Ren",
    displayName: "iREN",
    link: "https://docs.synthetix.io/tokens/list/#inverse-ren-iren",
  },
  iUNI: {
    type: "cryptoInverse",
    description: "Inverse Uniswap",
    displayName: "iUNI",
    link: "https://docs.synthetix.io/tokens/list/#inverse-uniswap-iuni",
  },
  iYFI: {
    type: "cryptoInverse",
    description: "Inverse yearn.finance",
    displayName: "iYFI",
    link: "https://docs.synthetix.io/tokens/list/#inverse-yearnfinance-iyfi",
  },
  sOIL: {
    type: "commodities",
    description: "Brent Crude Oil",
    displayName: "OIL",
    link: "https://docs.synthetix.io/tokens/list/#brent-crude-oil-soil",
  },
  sXAG: {
    type: "commodities",
    description: "Silver",
    displayName: "XAG",
    link: "https://docs.synthetix.io/tokens/list/#silver-ounce-sxag",
  },
  sXAU: {
    type: "commodities",
    description: "Gold",
    displayName: "XAU",
    link: "https://docs.synthetix.io/tokens/list/#gold-ounce-sxau",
  },
  iOIL: {
    type: "commoditiesInverse",
    description: "Inverse Brent Crude Oil",
    displayName: "iOIL",
    link: "https://docs.synthetix.io/tokens/list/#inverse-brent-crude-oil-ioil",
  },
});

const SYNTHS_SUSD_EXCLUDED = Object.keys(SYNTHS).filter((s) => s !== "sUSD") as Exclude<SynthName, "sUSD">[];

export {
  SYNTH_ADDRESS_MAP,
  SYNTHS,
  SYNTHS_SUSD_EXCLUDED
}