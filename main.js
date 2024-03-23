#! /usr/bin/env node
import inquirer from "inquirer";
//generate a random number//
let randomNumber = Math.floor(Math.random() * 10);
//take input from user//
let userInput = await inquirer.prompt([{ name: "userGuess", type: "number", message: "Enter a number between 1 to 10" }]);
//check if user guess is correct//
if (userInput.userGuess == randomNumber) {
    console.log("congratulations you guessed right");
}
else {
    console.log("you guess a wrong no");
}
