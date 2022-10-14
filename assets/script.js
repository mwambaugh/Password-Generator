// Assignment code here
//add strings of all options, lowercase, upper, numbers, special, pay attention to not naming var same as window.confirm. 
const loweropt=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const upperopt=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"] 
const numbeopt=["0","1","2","3","4","5","6","7","8","9"]
const speciopt=["!","(",")","/","'",";","<",">",".","+","[","]","~","*","#",":","?",]


//empty array for user choice of character types 
var userchoice = []
console.log(userchoice)

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//THEN I choose a length of at least 8 characters and no more than 128 characters
//THEN I am presented with a series of prompts for password criteria
function generatePassword() {
  var userlength = window.prompt("How long do you want your password to be. Choose a number between 8 and 128?");
  if (userlength < 8 ) {
    window.alert("Password is too short, please add characters.");
  } else if (userlength > 128 ) {
    window.alert("Password is too long.");
  } else if (isNaN(userlength)){
    window.alert("Please enter a number between 8 and 128.")
  };
    var lowerCase = window.confirm("Would you like lowercase letters in your password? If yes, press 'OK'.");
    var upperCase = window.confirm("Would you like uppercase letters in your password? If yes, press 'OK'.");
    var special = window.confirm("Would you like special characters in your password? If yes, press 'OK'.");
    var numchoice = window.confirm("Would you like numbers in your password? If yes, press 'OK'.");
  if (!lowerCase && !upperCase && !special && !numchoice){
    window.alert("Please enter OK to at least one character type: uppercase, lowercase, special, and/or numbers to generate a password.")
  };
  //same if for each var from window.confirm and upper const  
  if (lowerCase){
    userchoice= userchoice.concat(loweropt)
  }
  if (upperCase){
    userchoice= userchoice.concat(upperopt)
  }
  if (special){
    userchoice= userchoice.concat(speciopt)
  }
  if (numchoice){
    userchoice= userchoice.concat(numbeopt)
  }
//userchoice will have all the options ok'd, 
//take userchoice array & select random char. (RPS) and spec. length. from userlength. 
//eventuall put them into generatePassword needs to return the final password string. 

//what I wrote
userchoice = Math.floor(Math.random() * userlength.length);
generatePassword = userlength[generatePassword];
return
}

//from the RPS activity 
var index = Math.floor(Math.random() * options.length);
var computerChoice = options[index];

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//acceptance criteria//
/*GIVEN I need a new, secure password

THEN a password is generated that matches the selected criteria

WHEN the password is generated

THEN the password is either displayed in an alert or written to the page*/