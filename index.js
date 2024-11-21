// import chalk from "chalk";
// console.log(chalk.rgb(12,21,22)("Hello"))

import PromptSync from 'prompt-sync';
let prompt = PromptSync()
let password = prompt("Enter Your Password : ")
import passwordValidator from 'password-validator';
import chalk from 'chalk';
// Create a schema
var schema = new passwordValidator();

// Add properties to it
schema
.is().min(8)                                    // Minimum length 8
.is().max(100)                                  // Maximum length 100
.has().uppercase()                              // Must have uppercase letters
.has().lowercase()                              // Must have lowercase letters
.has().digits(2)                                // Must have at least 2 digits
.has().not().spaces()                           // Should not have spaces
.is().not().oneOf(['Passw0rd', 'Password123']); 

if(schema.validate(password)){
    console.log(chalk.bgGreen("Password is Valid"));
}
else{
    console.log(chalk.bgRed("password is Not Valid"));   
}

