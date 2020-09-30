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
  var lengthStr = window.prompt ("How many many characters do you want your password to have?","");

  if (lengthStr == "")
    {
      alert("Error! Input does not meet criteria");
      return "";
    }

  if (isNumeric(lengthStr) == false)
    {
    alert("Error! Not a number.");
    }

  lengthInt = parseInt(lengthStr);
  if (lengthInt < 8)
    {
    alert("Error! Password must have atleast 8 characters");
    return "";
    }
  if (lengthInt > 128)
    {
    alert("Error! Password must be less than 129 characters");
    return "";
    }
  if (window.confirm ("Do you want your pssword to include special characters?", "") == true)
    {
      characterCheck += "!@#$%^&*()_-+={};:?.,><";
    }
  if (window.confirm ("Do you want your password to include Upper case letters?", "") == true)
    {
      characterCheck += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
  if (window.confirm ("Do you want your password to havr lower case letters?","") == true)
    {
      characterCheck += "abcdefghijklmnopqrstuvwxyz";
    }
  if (window.confirm ("Do you want your password to include numbers?", "") == true)
    {
      characterCheck += "1234567890";
    }
  if (characterCheck == "")
    {
      alert("Error! No input");
      return "";
    }

    characterCheckLength = characterCheck.length;


  for (var i = 0; i < lengthInt; i++) 
    {
      passwordStrn += characterCheck.charAt(Math.floor(Math.random() * characterCheckLength))
    }
  
    return passwordStrn;

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
