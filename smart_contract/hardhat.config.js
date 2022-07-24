// https://eth-goerli.g.alchemy.com/v2/i0v_ICgnpADTl-zxK7J9ZLfMbSTgv1WB
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/i0v_ICgnpADTl-zxK7J9ZLfMbSTgv1WB',
      accounts: ['7ca4b79101f50cd1c82d6f8729f98e23b6a652c78fe3c2c492edba51a0b56f40']
    }
  }
}