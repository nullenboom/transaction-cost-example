const OnDemand = artifacts.require("./AvgOnDemand.sol");
	
contract('Web3.js estimateGas', async(accounts)=> {
	it('Scenario', async () => {
		
	const avgOnDemand = await AvgOnDemand.new();
	
	const addCost = await avgOnDemand.add.estimateGas(10)
	console.log("Gas-Kosten estimated fuer 1.Add-Funktion:" + Number(addCost))
	
	const addTransaction = await avgOnDemand.add(10);
	
	const calcCost = await avgOnDemand.calc.estimateGas()
	console.log("Gas-Kosten estimated fuer 1.Calc-Funktion:" + Number(calcCost))
	
	})
})