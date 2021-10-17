
//click the button and prompt appears asking for password criteria
//user selects password criteria
    //user input length of characters: between 8 - 128
//confirm: include lowercase, uppercase, num, or spec char
// use if statements to join arrays together
//randomly select characters from array
//return a final password that includes at least one character from the 4 criteria
//Display password in password box

var generateBtn = document.querySelector("#generate");
var passwordCharacters = [];
var finalPassword = "";

function generatePassword() {

var characterAmount = window.prompt("Choose password length between 8–128");
var passwordLength = +characterAmount;

  if (passwordLength >=8 && passwordLength  <=128) {
      console.log (passwordLength)
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

var lowerCaseCharCodes = arrayFromLowtoHigh (97, 122)
var upperCaseCharCodes = arrayFromLowtoHigh (65, 90)
var numberCharCodes = arrayFromLowtoHigh (48, 57)
var speCharCodes = arrayFromLowtoHigh (33, 47)
    .concat( arrayFromLowtoHigh (58, 64)
     ).concat(arrayFromLowtoHigh (91, 96)
     ).concat(arrayFromLowtoHigh (123,126)
     )
 
var charCodes = [];
    if (includeLower === true) {
        charCodes = charCodes.concat(lowerCaseCharCodes)
    }
   
    if (includeUpper === true) {
        charCodes = charCodes.concat(upperCaseCharCodes)
    }

    if (includeNumber === true) {
        charCodes = charCodes.concat(numberCharCodes)
    }
    if (includeSpecialChar === true) {
        charCodes = charCodes.concat(speCharCodes)
    }

var finalPassword = []
    for (let i = 0; i < passwordLength; i++) {
        var characterCode = charCodes[Math.floor(Math.random() * passwordLength)]
        finalPassword.push(String.fromCharCode(characterCode))
    }
    return (finalPassword)


function arrayFromLowtoHigh (low, high){
    var array = []
    for (var i = low; i <= high; i++){
        array.push(i)
    }
    return array
}
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword()
    var passwordText = document.querySelector("#password");
    passwordText.value = password;  
  }

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
