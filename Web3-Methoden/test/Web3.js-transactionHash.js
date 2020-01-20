const OnDemand = artifacts.require("./AvgOnDemand.sol");
	
contract('Web3.js Transaktionshash', async(accounts)=> {
	it('Scenario', async () => {
		
	const avgOnDemand = await OnDemand.new();
	const deployment = await web3.eth.getTransactionReceipt(avgOnDemand.transactionHash);
	console.log("Gas Cost for Deployment: "+ deployment.gasUsed)
	
	const addTransaction = await avgOnDemand.add(10);
	const add = await web3.eth.getTransactionReceipt(addTransaction.tx);
	console.log("Gas Cost for AddTransaction: "+ add.gasUsed)
	
	const addTransaction2 = await avgOnDemand.add(10);
	const add2 = await web3.eth.getTransactionReceipt(addTransaction2.tx);
	console.log("Gas Cost for AddTransaction: "+ add2.gasUsed)
	
	const calcTransaction = await avgOnDemand.calc();
	const calc = await web3.eth.getTransactionReceipt(calcTransaction.tx);
	console.log("Gas Cost for CalcTransaction: "+ calc.gasUsed)
	
	})
})