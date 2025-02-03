module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",    // Localhost (default for Ganache)
      port: 8545,           // Ganache CLI default port
      network_id: "1337",    // Ganache network ID
      gas: 5000000,          // Gas limit (optional, can be adjusted)
      from: "0x61a7fc395716aC51ca0d59f296501b85a032A5df", // Optional: Add one of the accounts from Ganache
    },
  },

  compilers: {
    solc: {
      version: "0.8.0",      // Set your Solidity version (should match contract's version)
    },
  },
};