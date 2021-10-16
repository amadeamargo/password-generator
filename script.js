
//click the button and prompt appears asking for password criteria
//user selects password criteria
    //user input length of characters: between 8 - 128
//confirm: include lowercase, uppercase, num, or spec char
// use if statements join strings together
//randomly select characters from string
//return a final password that includes at least one character from the 4 criteria
//Display password on page

var generateBtn = document.querySelector("#generate");
var passwordCharacters = "";
var finalPassword = "";

function generatePassword() {

var characterAmountPrompt = window.prompt("Choose password length between 8–128");
var characterAmount = parseInt(characterAmountPrompt, 10);

  if (characterAmount >= 8 && characterAmount <= 128) {
    console.log (characterAmount);
  }
      else {
          alert ("Please choose password length between 8–128");
          generatePassword();
      }

var includeLowerPrompt = window.confirm ("Click OK to include lower case characters");
var includeLower = includeLowerPrompt
console.log (includeLower);

var includeUpperPrompt = window.confirm ("Click OK to include upper case characters");
var includeUpper = includeUpperPrompt
console.log (includeUpper);

var includeNumberPrompt = window.confirm ("Click OK to include numbers");
var includeNumber = includeNumberPrompt
console.log (includeNumber);

var includeSpecialCharPrompt = window.confirm ("Click OK to include special characters");
var includeSpecialChar = includeSpecialCharPrompt
console.log (includeSpecialChar);


var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHJIJKLMNOPQRSTUVWXYZ";
var numeric = "12345678790";
var specialChar = "!#$%^&'()*+,-./:;<=>?@[\]^_`{|}~";

if (includeLower) {
    var passwordCharacters = lowerCase
}
if (includeUpper) {
     passwordCharacters = passwordCharacters + upperCase;
}
if (includeNumberPrompt) {
     passwordCharacters = passwordCharacters + numeric;
}
if (includeSpecialChar) {
     passwordCharacters = passwordCharacters + specialChar;
    }

var finalPassword = passwordCharacters [Math.floor(Math.random() * characterAmount)]

for (var i = 0; i < characterAmount; i++){
    return(finalPassword[i]);

}
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;  
  }

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);