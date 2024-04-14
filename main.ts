#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.blue.bold("\n Welcome to Currency Convertor\n"))
//Define the list of currencies and their exchange rates
let exchangeRate: any = {
    "USD": 1, //Base Currency
    "EUR": 0.94, //Euro
    "JYP": 153.08,//Yen
    "CAD": 1.38, //canadian Dollar
    "AUD": 1.55, //Australian Dollar
    "PKR": 277.30, //Pakistani Rupees
}

let userAns = await inquirer.prompt([
    {
        name: "fromCurrency",
        type: "list",
        message: "select the currency to convert from:",
        choices: ["USD","EUR","JYP","CAD","AUD","PKR"]
    },
{
        name: "toCurrency",
        type: "list",
        message: "select the currency to convert into:",
        choices: ["USD","EUR","JYP","CAD","AUD","PKR"]
},
{
        name:"amount",
        type: "input",
        message: "enter the amount to convert:"
}]);
let fromAmount = exchangeRate[userAns.fromCurrency];
let toAmount = exchangeRate[userAns.toCurrency];
let amount = userAns.amount


let baseAmount = amount / fromAmount
let convertedAmount = baseAmount * toAmount

console.log(`converted amount = ${chalk.green.bold(convertedAmount.toFixed(2))}`);