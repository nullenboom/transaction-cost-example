var AvgOnDemand = artifacts.require('./AvgOnDemand.sol')


module.exports = function (deployer) {
  deployer.deploy(AvgOnDemand)
}
