// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  // return prompt ("Password Length" )
  var passwordLength = prompt("Password Length")
  var confirmSpecialCharacters = confirm("Do you want special characters?")
  var upperCase = confirm("Do you want upper case characters?")
  var lowerCase = confirm("Do you want lower case characters?")
  var numbers = confirm("do you want numbers in the password?")
 console.log(passwordLength)
 console.log(specialCharacters)
  var specialCharacters =  [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.',
];
  //we want to prompt the user with the "prompt" method. 
  // prompt user for there desired characters and length  in the password. 
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
