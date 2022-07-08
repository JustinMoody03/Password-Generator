// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  var passwordLength = prompt("How many charecters do you want your password?")
  console.log(passwordLength)
  var wantNumber = confirm("Do you want to include numbers in your password?")
  var wantUpperCase = confirm("Do you want to include upper case letters in your password?")
  var wantLowerCase = confirm("Do you want to include lower case letters in your password?")
  var wantSpecialCharecters = confirm("Do you want to include special charecters in your password?")
  console.log(wantNumber, wantUpperCase, wantLowerCase, wantSpecialCharecters)
  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  var lowercase = ["a", "b", "c", "d", "e", 'f', "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  var specialcharecters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "`", "~", "[", "]", "{", "}", ";", ":", "'", ",", ".", "<", ">", "/", "?"]

  var passOptions = [];

  if (wantNumber && wantUpperCase && wantLowerCase && wantSpecialCharecters) {
    passOptions = numbers.concat(lowercase, uppercase, specialcharecters);
  } 
  else if (wantNumber && wantUpperCase && wantLowerCase) {
    passOptions = numbers.concat(lowercase, uppercase);
  }
  else if (wantNumber && wantUpperCase && wantSpecialCharecters) {
    passOptions = numbers.concat(lowercase, specialcharecters);
  }
  else if (wantNumber && wantLowerCase && wantSpecialCharecters) {
    passOptions = numbers.concat(lowercase, specialcharecters);
  }
  else if (wantUpperCase && wantLowerCase && wantSpecialCharecters) {
    passOptions = uppercase.concat(lowercase, specialcharecters)
  }
  else if (wantNumber && wantUpperCase) {
    passOptions = numbers.concat(uppercase)
  }
  else if (wantNumber && wantLowerCase) {
    passOptions = numbers.concat (lowercase)
  }
  else if (wantNumber && wantSpecialCharecters) {
    passOptions = numbers.concat(specialcharecters)
  }
  else if (wantLowerCase && wantUpperCase) {
    passOptions = lowercase.concat(uppercase)
  }
  else if (wantLowerCase && wantSpecialCharecters) {
    passOptions = lowercase.concat(specialcharecters)
  }
  else if (wantUpperCase && wantSpecialCharecters) {
    passOptions = uppercase.concat(specialcharecters)
  }
  else if (wantNumber) {
    passOptions = numbers
  }
  else if (wantLowerCase) {
    passOptions = lowercase
  }
  else if (wantUpperCase) {
    passOptions = uppercase
  }
  else if (wantSpecialCharecters) {
    passOptions = specialcharecters
  }

  var generatedPassword = [];

  for (var i=0; i<passwordLength; i++) {
    var randomNum = Math.floor(Math.random() * passOptions.length);
    generatedPassword.push(passOptions[randomNum]);
  }

  return generatedPassword.join("");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
