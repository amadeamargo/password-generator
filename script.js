// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
//   var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

  var passwordLengthPrompt = window.prompt("How many characters would you like in your password: ");
  var maxLengthPrompt = window.prompt("Maximum length of password (in characters)");
  var lowerCaseConfirm = "Would you like to include lower case characters?"
  var upperCaseConfirm = "Would you like to include upper case characters?"
  var numericConfirm = "Would you like to include numeric characters?"
  var specialCharactersConfirm = "Would you like to include special characters?"

  console.log (passwordLengthPrompt);
  console.log (maxLengthPrompt);

  confirm(lowerCaseConfirm);
  confirm(upperCaseConfirm);
  confirm(numericConfirm);
  confirm(specialCharactersConfirm);

  function getRandomLower (){
      var lowerCase = "abcdefghijklmnopqrstuvwxyz"
      var randomLower = lowerCase [Math.floor(Math.random() * 26)];
      console.log (randomLower);
  }

  function getRandomUpper(){
      const upperCase = "ABCDEFGHJIJKLMNOPQRSTUVWXYZ";
      var randomUpper = upperCase [Math.floor(Math.random() * 26)];
      console.log (randomUpper);
  }

  function getRandomNumeric (){
      const numeric = "12345678790";
      var randomNumeric = numeric [Math.floor(Math.random() * 26)];
      console.log (randomNumeric);
  }

  function getRandomSpecialChar (){
      const specialChar = "!#$%^&'()*+,-./:;<=>?@[\]^_`{|}~";
      var randomSpecialChar = specialChar [Math.floor(Math.random() * 32)];
      console.log (randomSpecialChar);
  }
  getRandomLower();
  getRandomUpper();
  getRandomNumeric();
  getRandomSpecialChar();
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