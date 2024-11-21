import passwordValidator from "password-validator";
import PromptSync from "prompt-sync";
import chalk from "chalk";

let prompt = new PromptSync();
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
.is().not().oneOf(['Passw0rd', 'Password123']); // Blacklist these values


let password = prompt("Enter a password: ");
if(schema.validate(password)) {
    console.log(chalk.bgGreen("Password is valid"));
}
else {
    console.log(chalk.bgRed("Password is not valid"));
}
