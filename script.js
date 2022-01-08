// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Function to generate and pass password to webpage
function generatePassword() {
// Asking user input to determine characters in password

// Using arrays and random numbers to generate a password through for loop

}