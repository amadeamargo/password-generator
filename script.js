// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
//   var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

  var passwordLengthPrompt = window.prompt("Choose password length between 8–128");


  //make sure password length is between 8-128 characters
  if (passwordLengthPrompt >= 8 && passwordLengthPrompt <= 128) {
    console.log (passwordLengthPrompt);
  }
      else {
          alert ("Please choose password length between 8–128");
          writePassword();
      }
  
  var lowerCaseConfirm = "Would you like to include lower case characters?"
  var upperCaseConfirm = "Would you like to include upper case characters?"
  var numericConfirm = "Would you like to include numeric characters?"
  var specialCharactersConfirm = "Would you like to include special characters?"

  confirm(lowerCaseConfirm);
  confirm(upperCaseConfirm);
  confirm(numericConfirm);
  confirm(specialCharactersConfirm);

  function getRandomLower (){
      var lowerCase = "abcdefghijklmnopqrstuvwxyz"
      var randomLower = lowerCase [Math.floor(Math.random() * lowerCase.length)];
      console.log (randomLower);
  }

  function getRandomUpper(){
      const upperCase = "ABCDEFGHJIJKLMNOPQRSTUVWXYZ";
      var randomUpper = upperCase [Math.floor(Math.random() * upperCase.length)];
      console.log (randomUpper);
  }

  function getRandomNumeric (){
      const numeric = "12345678790";
      var randomNumeric = numeric [Math.floor(Math.random() * numeric.length)];
      console.log (randomNumeric);
  }

  function getRandomSpecialChar (){
      const specialChar = "!#$%^&'()*+,-./:;<=>?@[\]^_`{|}~";
      var randomSpecialChar = specialChar [Math.floor(Math.random() * specialChar.length)];
      console.log (randomSpecialChar);
  }

  //if statements for the confirm prompts//

  getRandomLower();
  getRandomUpper();
  getRandomNumeric();
  getRandomSpecialChar();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
    // const length = +passwordLengthPrompt.value;
    // console.log (length)



//CLICK the button and prompt appears asking for password criteria
//user selects password criteria
    //USER INPUT length of characters: at least 8 characters
    //USER INPUT max characters: max 128 characters
//CONFIRM: include lcase, upcase, num, or spec char

//output: at least one of the characters appear in the password
//ALERT: display password 