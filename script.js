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

/**
 * These are five functions that are promting the user for infomation.
 * They are returning true or false debepeding on what the user is clicking. 
 */
function getPasswordLenght() {
  return prompt("Enter your password lenght between 8-128 characters");
}
function includeLowerCaseinPassword() {
  return confirm("Do you want lowercase characters in your password?");
}
function includeUpperCaseinPassword() {
  return confirm("Do you want uppercase characters in your password?");
}
function includeNumbersinPassword() {
  return confirm("Do you want numbers in your password?");
}
function includeSpecialCharinPassword() {
  return confirm("Do you want special charaters in your password?");
}

//coworker helped with this CSM @ausburg + w3 schools */
/** */
* 
* @param {a} lenghtOfPassword 
* @param {*} lower 
* @param {*} upper 
* @param {*} numbers 
* @param {*} specialChars 
* 
* This is the actual password generator being called by the main. 
*/
function passwordGenerator(
 lenghtOfPassword,
 lower,
 upper,
 numbers,
 specialChars
) {
 console.log("inside the password generator", lenghtOfPassword);
 var tempPassword = "";