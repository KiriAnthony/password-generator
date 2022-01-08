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
  var passwordLength = window.prompt("Enter the length of the password you would like");
  //checking password length is a number between 8 and 128
  while(isNaN(passwordLength) || passwordLength<8 || passwordLength>128) {
    if (isNaN(passwordLength)) {
        passwordLength = window.prompt("You did not enter a number, please enter the length of the password you would like");
    } else {
        passwordLength = window.prompt("The value you entered was not between 8 and 128, please enter the length of the password you would like");
    }
  }
  var specialCharDesicion = window.confirm("Would you like to include special characters?");
  var numberDesicion = window.confirm("Would you like to include numbers?");
  var lowercaseDesicion = window.confirm("Would you like to include lowercase letters?");
  var uppercaseDesicion = window.confirm("Would you like to include uppercase letters?");
  // Checking at least one character type is chosen
  while (!specialCharDesicion && !numberDesicion && !lowercaseDesicion && !uppercaseDesicion) {
    specialCharDesicion = window.confirm("Would you like to include special characters?");
    numberDesicion = window.confirm("Would you like to include numbers?");
    lowercaseDesicion = window.confirm("Would you like to include lowercase letters?");
    uppercaseDesicion = window.confirm("Would you like to include uppercase letters?");
  }
  // Using arrays and random numbers to generate a password through for loop

  //return password;
}

generatePassword();