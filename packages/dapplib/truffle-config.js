require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea clog office skull dance birth pitch evoke hunt casino sunset gift'; 
let testAccounts = [
"0xb91f73492115ed3623e2d7090d4d5ae3c6a8c85ff7ce26e836fa1dc98de273ac",
"0x1a15c04064d3838722fd9c23a1a2fa7ace5b3ad6b3cb2612b13f292a0716b55b",
"0xc285d3a25bb073a4721f8ed2087978088f3633d69267f7e5d969977e20b7fbae",
"0x0d33fb739c9b05e5b7d603a215ae4c4de9d0194445208707847d9f121a160b26",
"0xe20eed37a6e2f9a03a198431f2a5adb90465ccd509a79b8139eacf0ce6b6b517",
"0x78580367dfb368d165400d39e21165811cfc3e03300877ea891f8b7e6d83b77d",
"0x8f200951e2cd533da8cb6b67566888730597e557dae0b5ddda30d16f988b26d7",
"0x426150d907a76bd304b69147335f7c7128c03c83b37e7bb64677a9991b7f6e8f",
"0xeda488c36744ead9e639901f68e0397fb3a4d4af8bbc4171fbcbb4301f9bdea1",
"0xe354e39c4b8c047a03d519c261adf3b1f5a885e8e04bdf2814c3a1a4b8bb6fdc"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


