// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
//   var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

  var Passwordlength = window.prompt("How many characters would you like in your password: ");
  var MaxLength = window.prompt("Maximum length of password (in characters)");
  var LowerCase = "Would you like to include lower case characters?"
  var UpperCase = "Would you like to include upper case characters?"
  var Numeric = "Would you like to include numeric characters?"
  var SpecialCharacters = "Would you like to include special characters?"


  console.log (Passwordlength);
  console.log (MaxLength);


  confirm(LowerCase);
  confirm(UpperCase);
  confirm(Numeric);
  confirm(SpecialCharacters);

 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



//CLICK the button and prompt appears asking for password criteria
//user selects password criteria
    //USER INPUT length of characters: at least 8 characters
    //USER INPUT max characters: max 128 characters
//CONFIRM: include lcase, upcase, num, or spec char
//output: at least one of the characters appear in the password
//ALERT: display password 