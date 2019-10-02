
var income 
income = prompt("Quanto você ganha?");
var costs  
costs = prompt("Quanto você gasta?")
var taxPercent  
taxPercent = prompt("Qual é a porcentagem de impostos?");


var grossProfit 

grossProfit = income - costs; 

var tax 

tax = grossProfit*taxPercent/100

var netIncome 

netIncome = grossProfit - tax;


