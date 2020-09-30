// Assignment Code
var generateBtn = document.querySelector("#generate");

function isNumeric(num){
  if (num.indexOf(".") > -1)
  {
    return false;
  }

  return !isNaN(num);

}

function generatePassword() {
  var passwordStrn = "";
  var characterCheckLength;
  var characterCheck = "";
  var lengthInt;
  var lengthStr = window.prompt ("How many many characters do you want your password to have?")
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
