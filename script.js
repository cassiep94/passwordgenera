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

 // lower = 0
  // upper = 1
  // numbers = 2
  // speical = 3

  // if , else, statements 

  for (i = 0; i < lenghtOfPassword; i++) {
    var flag = false;
    while (flag == false) {
      var currentIndex = Math.floor(Math.random() * 4);
      //adding a lowercase
      if (currentIndex == 0 && lower == true) {
        const randomSmallLetter = "abcdefghijklmnopqrstuvwxyz".split("")[
          Math.floor(Math.random() * 26)
        ];
        tempPassword += randomSmallLetter;
        flag = true;
      }
      //adding an uppercase
      if (currentIndex == 1 && upper == true) {
        const randomBigLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")[
          Math.floor(Math.random() * 26)
        ];
        tempPassword += randomBigLetter;
        flag = true;
      }
      //adding a number
      if (currentIndex == 2 && numbers == true) {
        console.log("ITS a number ");
        var randomNumber = Math.floor(Math.random() * 10);
        randomNumber.toString();
        tempPassword += randomNumber;
        flag = true;
      }
      //adding an special case
      if (currentIndex == 3 && specialChars == true) {
        const randomCase = "!@#$%^&*-".split("")[Math.floor(Math.random() * 9)];
        tempPassword += randomCase;
        flag = true;
      }
    }
    flag = false;
  }
  return tempPassword;
}
/**
 * This is the main. its calling each one of the functions and its also checking 
 * to see if the user clicked yes to altease one.
 * Its then passing the data over to the actual generator.  
 */
function generatePassword() {
  //Getting the lenght of the password:
  var passwordLenght = getPasswordLenght();
  var includeLowerCase = includeLowerCaseinPassword();
  var includeUperCase = includeUpperCaseinPassword();
  var includeNumbers = includeNumbersinPassword();
  var includeSpecialChar = includeSpecialCharinPassword();
  if (
    includeLowerCase == false &&
    includeUperCase == false &&
    includeNumbers == false &&
    includeSpecialChar == false
  ) {
    alert("Password must have a special charcter. Select at least one charater type:");
  } else {
    var yourpassword = passwordGenerator(
      passwordLenght,
      includeLowerCase,
      includeUperCase,
      includeNumbers,
      includeSpecialChar
    );
    return yourpassword;
    

    /** credit to stackoverflow  */

    /** youtube chanel Vincent Lab, travesy media */

    /** Resource Jose CSM JosePabloo github  */
  }
}