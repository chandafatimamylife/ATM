#!/usr/bin/env/node


import inquirer from "inquirer";
import chalk from "chalk";
import Choice from "inquirer/lib/objects/choice.js";
import { Console } from "console";

let myBalance = 10000;//dollar
let myPin = 1234;

let pinAnswer = await inquirer.prompt(
    [
        {
            name: "pin",
            message:" Please! Enter your pin:",
            type: "number",
        }
    ]
)

if(pinAnswer.pin === 1234){
console.log(chalk.blue.bold("Correct pin code!!!!"));


let language = await inquirer.prompt(
    [
        {
            name:"bankLanguage",
            message:"Proces in which language:",
            type:"list",
            choices:["English" , "Urdu"],
        }
    ]
)








let transactionSlip = await inquirer.prompt(
    [
        {
            name:"slip",
            message:"Do You Want Transaction Slip:",
            type:"list",
            choices:["YES" , "NO"],
        }
    ]
)


let operationAns = await inquirer.prompt(
    [
        {
            name:"operation",
            message:"Please select  the option:",
            type:"list",
            choices:["Withdraw" , "Check balance","Fast cash"],
        }
    ]
)

console.log(operationAns.operation);
if(operationAns.operation ==="Withdraw"){
let amountAns = await inquirer.prompt(
    [
        {
            name:"amount",
            message:"Enter your amount.",
            types:"number",
        }
    ]
)
myBalance-=amountAns.amount
if(amountAns.amount >=  myBalance){
    console.log("Your balance is insufficient.");
}else if(amountAns.amount <= myBalance){
   
    console.log("Your remaining balance is :" + myBalance);
}else{
    console.log("INVALID")
}

}else if (operationAns.operation === "Check balance"){
    console.log("Your balance is = " + myBalance)
}else{
let amountAnswer = await inquirer.prompt(
[
    {name: "amounts",
    message:"Please select the amounts:",
    type:"list",
    choices:["1000" , "5000" ,"10000","20000"]
}])
if(amountAnswer.amounts <= myBalance){
    console.log(chalk.blue.bold ("Please collect the amount."));
}else{
    console.log("Your balance is insufficient.");
}

let remaining = await inquirer.prompt(
        [
            {name: "remainingAmount",
            message:"Do you want to know remaining amount?",
            type:"list",
            choices:["YES" ,"NO"],
        }]
)
myBalance-=amountAnswer.amounts
if(remaining.remainingAmount === "YES"){
    console.log("Your remaining balance is :" + myBalance);
 }else{
    console.log("OK");
 }
};
let service = await inquirer.prompt(

    [
        {
            name:"atmServive",
            type:"string",
            message:[chalk.blue.bold("PLease ! collect your card.")+"\n"+"THANK YOU"],
        }
    ]
)
console.log(service.atmServive);

}else{
    console.log(chalk.red ("Your pin is invalid"))
}

