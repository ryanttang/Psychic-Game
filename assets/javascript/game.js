// Array for Computer Choices
var computerChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Variables for Score
var wins = 0;
var losses = 0;
var ties = 0;
var guesses = 9;
var guessLeft = 9;
var userGuess = [];
var letterToGuess = null;

// Computer select and store random letter from choices
var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];

// Updates HTML with how many Gueses are left
var updateGuessesLeft = function() {
    document.querySelector('#guessLeft').innerHTML = "Guesses left: " + guessLeft;
};

// Updates HTML with new Computer choice after reset
var updateLetterToGuess = function() {
    this.letterToGuess = this.computerChoice[Math.floor(Math.random() * this.computerChoice.length)];
};

// Updates HTML with User inputs
var updateGuessesSoFar = function() {
    document.querySelector("#userguess").innerHTML = "Your Guesses so far: " + userGuess.join(', ');
};

// Reset when game is complete. Everything is back to original.
var reset = function() {
    guesses = 9;
    guessLeft = 9;
    userGuess = [];

    updateLetterToGuess();
    updateGuessesLeft();
    updateGuessesSoFar();
}

updateLetterToGuess();
updateGuessesLeft();

// Listen for User Guess
document.onkeyup = function(event) {
    guessLeft--;
var userguess = String.fromCharCode(event.keyCode).toLowerCase();

userGuess.push(userguess);
updateGuessesLeft();
updateGuessesSoFar();

    if (guessLeft > 0) {
        if (userGuess == letterToGuess) {
            wins++;
            document.querySelector('#wins').innerHTML = "Wins: " + wins;
            alert("I guess you're right.");
            reset();
        }
    } else if (guessLeft == 0) {
        losses++;
        document.querySelector('#losses').innerHTML = "Losses: " + losses;
        alert("Hah! Another lost!");
        reset();
    }
    
};