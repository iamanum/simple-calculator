#! /usr/bin/env node

import inquirer from "inquirer";

//Printing a Welcome Message
console.log("\n\tWelcome to CLI Simple Calculator\n");

//Asking Question from user through inquirer


let answers = await inquirer.prompt([
{message: "Enter First Number", type: "number", name: "firstNumber"},
{message: "Enter Second Number", type: "number", name: "secondNumber"},
{
 message: "Select one Operator to perform Operations",
 type: "list",
 name: "operator",
 choices: ["Addition", "Subtraction", "Multiplication", "Division"],
}
]);

//conditional statements
if (answers.operator === "Addition"){
    console.log(answers.firstNumber + answers.secondNumber)

}
else if (answers.operators === "Subtration"){
    console.log(answers.firstNumber - answers.secondNumber)

}
else if (answers.operators === "Multiplication"){
    console.log(answers.firstNumber * answers.secondNumber)

}
else if (answers.operators === "Division"){
    console.log(answers.firstNumber / answers.secondNumber)

}
else{
    console.log("invalid input")
}