module.exports = {
  networks: {
    development: {
      host: "127.0.0.1", // Localhost (Ganache)
      port: 7545, // Default port for Ganache GUI
      network_id: "*" // Accept any network ID
    }
  },
  compilers: {
    solc: {
      version: "0.8.0", // Ensure your Solidity version matches
    }
  }
};