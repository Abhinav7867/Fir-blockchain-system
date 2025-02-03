module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",    // Localhost
      port: 8545,           // Ganache CLI default port
      network_id: "1337",    // Ganache network ID
      gas: 5000000,          // Gas limit (if needed)
    },
  },
  compilers: {
    solc: {
      version: "0.8.0",      // Specify the correct Solidity version
    },
  },
};