// Alphabet array
// ============================================================
var choices = ["a","b","c","d","e","f","g","h","i","j","k","l",
"m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// Variables: Game start stats 
// ============================================================
var wins = 0;
var losses = 0;
var guesses = 10;
var lettersGuessed = [];

// Variables: getElement to display new stats
// ============================================================
var winsText = document.getElementById("winsText");
var lossesText = document.getElementById("lossesText");
var guessesText = document.getElementById("guessesText");
var lettersText = document.getElementById("lettersText");

// Player functions
document.onkeyup = function(event) {
   
    // Randomly choose from the choices array & store event.key as user's guess
    var computerChoice = choices[Math.floor(Math.random() * choices.length)];
    var userGuess = event.key;

    // Check for validation
    if ((userGuess === "a") || (userGuess === "b") || (userGuess === "c") || (userGuess === "d") || 
    (userGuess === "e") || (userGuess === "f") || (userGuess === "g") || (userGuess === "h") || 
    (userGuess === "i") || (userGuess === "j") || (userGuess === "k") || (userGuess === "l") || 
    (userGuess === "m") || (userGuess === "n") || (userGuess === "o") || (userGuess === "p") || 
    (userGuess === "q") || (userGuess === "r") || (userGuess === "s") || (userGuess === "t") || 
    (userGuess === "u") || (userGuess === "v") || (userGuess === "w") || (userGuess === "x") || 
    (userGuess === "y") || (userGuess === "z")) {
        
        messageText.textContent = " ";

        // Loop through the array to check for duplicate guesses
        for (var i = 0; i <  lettersGuessed.length; i++) {
            if (userGuess === lettersGuessed[i]) {
            return messageText.textContent = "You already guessed that letter";
            }
        }

        // Win & Lose function; Reset stats after every game
        if(userGuess === computerChoice) {
            wins++;
            guesses = 10;
            lettersGuessed = [];
            messageText.textContent = "You won!";

        } else {
            guesses--;
            lettersGuessed.push(userGuess);
            messageText.textContent = " ";

        }
        
        if(guesses === 0){
            losses++;
            guesses = 10;
            lettersGuessed = [];
            messageText.textContent = "You lost!";

        }

        // Display the player's current stats
        winsText.textContent = "Wins: " + wins;
        lossesText.textContent = "Losses: " + losses;
        guessesText.textContent = "Guesses: " + guesses;
        lettersText.textContent = "Letters guessed: " + lettersGuessed.join(' ');

    } 
    
};