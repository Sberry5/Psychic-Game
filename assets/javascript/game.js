//Variable to hold possible inputs
var computerLetter = ["a", "b", "c", "d", "e", "f", "g", "h",
    "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s",
    "t", "u", "v", "w", "x", "y", "z"];
//Variable to hold letters the user has already guessed
var lettersGuessed = [];
// Number of wins
var wins = 0;
// Number of losses
var losses = 0;
//Variable to represent the remaining number of guesses a user has left
var guessesLeft = 9;

var computerSelects = "";

//--------------------Reset Function---------------------
var reset = function () {
	wins = 0;
	losses = 0;
	guessesLeft = 9;
	lettersGuessed = [];
}

//--------------------Game---------------------
window.onload = function (){
	computerSelects = computerLetter[Math.floor(Math.random() * computerLetter.length)];
	}
console.log(computerLetter);

	document.onkeyup = function(event) {
	var userGuess = event.key;
//Randomly select letter

//If/else to determine
    if ((userGuess === computerSelects)) {
    	wins++;
    	console.log(wins)
    }
    else ((userGuess != computerSelects)) 
    	lettersGuessed.push(userGuess)
    	document.getElementById("#yourGuesses").innerHTML =  = Your guesses so far + lettersGuessed);
//    	console.log(lettersGuessed)
    	};

//Variable to update page
//	var pageText =
//          "<p>Wins: " + wins + "</p>" +
//          "<p>Losses: " + losses + "</p>" +
//          "<p>Guesses Left" + guessesLeft + "</p>" +
//          "<p>Your guesses so far" + lettersGuessed + "</p>";
//        document.querySelector("#game").innerHTML = html;
//    }
//};

//---------------------------------------------------