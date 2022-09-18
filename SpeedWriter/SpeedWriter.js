console.log("Assignment 2 of class SYST10199 By Rishin Patel")
let wordcount = 0;
var wordArray = [
	"once",
	"upon",
	"a",
	"time",
	"I",
	"was",
	"doing",
	"Javascript",
	"Assignment",
	"3"
];

const startGame = document.getElementById('confirm');
const hide = document.getElementById('stage');
const input = document.getElementById('input');
const textDisplay = document.getElementById('text-display');
const form = document.getElementById('form');
const difficulty = document.getElementById('difficulty');
const timeup = document.getElementById('timeup');
var finished = false;
const s = {
	currentWord: '',
	timeElapsed: 0,
	allowedTime: 20,
	Count: 0


}

//start of timer to indicate either you win or lose the game
function startTimer() {


	var timePassed = window.setInterval(timePassed, 1000);
	function timePassed() {
		if(finished == true)
		{
			clearInterval(timePassed);
		}
		else
		{
			s.timeElapsed++
			console.log(s.timeElapsed)
			if (s.timeElapsed === 20) {
				clearInterval(timePassed)
		     gameLost()
			}
		}
	}

}

//to clear input after each word for the next word
function clearInput() {
	input.value = '';
}

//to directly get to next word of the array without the user having to press enter after each word
input.addEventListener('keyup', function (event) {
	event.preventDefault();


	let userInput = input.value;

	if (userInput == wordArray[wordcount]) {
		wordArray[wordcount] = input.value;
		if (wordcount < difficulty.value - 1) {
			wordcount++;
			s.Count++
			clearInput();
		} else {
			gameWon()
		}
	}
	nextWord();

})

//start Screen with just Begin Button
startGame.addEventListener('click', function (event) {
	event.preventDefault();
	hide.className = 'hide';
	input.className = '';
	input.focus();
	startTimer();
	nextWord();


});



//To get next Word from the array directly
function nextWord() {
	const word = wordArray[wordcount]
	textDisplay.textContent = "Next Word: " + word;
	s.currentWord = word;

}

//display message for when you win the game
function gameWon() {
	finished =true;
	textDisplay.remove();
	console.log("You won")
	let newP = document.createElement("p");

	let newPText = document.createTextNode("Congratulation, Your Time is: " + s.timeElapsed + " seconds");

	newP.appendChild(newPText);
	let timeup = document.querySelectorAll("#timeup")
	timeup[0].appendChild(newP);
	newP.style.color = "green";
	newP.style.fontSize = '32px';
	clearInput();
	input.disabled =true;


}
//display message when you lose the game
function gameLost() {
	textDisplay.remove();
	console.log("Time's Up")
	let newP = document.createElement("p");

	let newPText = document.createTextNode("Time's Up, Your score is " + s.Count + " out of " + difficulty.value);

	newP.appendChild(newPText);
	let timeup = document.querySelectorAll("#timeup")
	timeup[0].appendChild(newP);
	newP.style.color = "red";
	newP.style.fontSize = '32px';
	clearInput();
	input.disabled =true;

}




