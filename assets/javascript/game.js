//Alphabet array
var choices = ["a","b","c","d","e","f","g","h","i","j","k","l",
"m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

//Variables
var wins = 0;
var losses = 0;
var guesses = 10;

var winsText = document.getElementById("winsText");
var lossesText = document.getElementById("lossesText");
var guessesText = document.getElementById("guessesText");
var lettersText = document.getElementById("lettersText");

//Player functions
document.onkeyup = function(event) {
   
    var userGuess = event.key;
    var computerChoice = choices[Math.floor(Math.random() * choices.length)];

    if(userGuess === computerChoice) {
        wins++;
        guesses = 10;
        usedArray = []
    } else {
        guesses--;
    }
    
    if(guesses === 0){
        losses++;
        guesses = 10;
        usedArray = []
    }

    if (usedArray.indexOf(playerGuess) >= 0) {

    } else {
          //this pushes the players incorrect guess to the usedArray and writes it to the HTML
          usedArray.push(playerGuess);
          document.getElementById('playerGuess').innerHTML = usedArray;
          console.log(usedArray);
    }

    //Display
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    guessesText.textContent = "Guesses: " + guesses;
    lettersText.textcontent = "Letters guessed: " + userArray;
    
}
