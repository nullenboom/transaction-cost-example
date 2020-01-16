const OnDemand = artifacts.require("./AvgOnDemand.sol");
	
contract('Web3.js Transaktionshash', async(accounts)=> {
	it('Scenario', async () => {
		
	const avgOnDemand = await AvgOnDemand.new();
	const deployment = await web3.eth.getTransactionReceipt(avgOnDemand.transactionHash);
	console.log("Gas Cost for deployment: "+ deployment.gasUsed)
	
	const addTransaction = await avgOnDemand.add(10);
	const add = await web3.eth.getTransactionReceipt(addTransaction.transactionHash);
	console.log("Gas Cost for AddTransaction: "+ add.gasUsed)
	
	const calcTransaction = await avgOnDemand.calc();
	const calc = await web3.eth.getTransactionReceipt(calcTransaction.transactionHash);
	console.log("Gas Cost for CalcTransaction: "+ calc.gasUsed)
	
	})
})