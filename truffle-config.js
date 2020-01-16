module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    }
  },
  mocha: {
    reporter: "scenario-eth-gas-reporter",
    reporterOptions: {
      excludeContracts: ["Migrations"]
    }
  }
};
