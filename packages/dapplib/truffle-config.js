require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drip flock tooth guard render remain erosion gloom private swallow slight'; 
let testAccounts = [
"0x5c9ae660d24dceb74d690921f9cd150691a387160afcbbb1ab69eaf81775b89c",
"0x45cc388c867960187bbe75fa6b9c051fb227871842276ec317e328172507d8ab",
"0xc2fcc862ead6179b3992c610c978bcaff351407749ef310783f82cab93210277",
"0xbd47c8f13a2be6114bb035c826eeae99f93b569f38107ad1fe0a55564104a1d3",
"0x48fc8dec0a363f4af0e759089e73f762305de7e6cedc9b06f92b980e27845458",
"0x1352cd826f783e0d85e33eff101e4c35d8829bb8f671c71646584df3d0c2ff1c",
"0x1756da321cbf0ccc34b7eabdb7666d1eb648776470e3d4b54e3bb217f8441164",
"0xa5411af4bfb1f12d378b9f1096572e94039b1722b4cc51b194088c1ac9066506",
"0x4a4e8caac3edfa11ae16af8a75292289eadb0edd6cd0c2dd38c02d4b64470c7f",
"0x72def13b9bfdf3d4b637c34e1f3619c8bf4701d814e8c9a0a58e0a3e00f50890"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

