const OnDemand = artifacts.require("./AvgOnDemand.sol");

const OnDemand = artifacts.require('./AvgOnDemand.sol')
	
contract('FirstScenario', async(accounts)=> {
	it('First Test ', async () => {
	const avgOnDemand = await OnDemand.deployed();
	
	const addTransaction = await avgOnDemand.add(10);
	const calcTransaction = await avgOnDemand.calc();
	
	})
})