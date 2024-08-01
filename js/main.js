//variables
const guessInput = document.getElementById("input");
const guessResult = document.getElementById("result");
let randomValue = getRandomNumber();
let gameCounter = 1;
let isCorrectAnswer = false;
console.log(randomValue);
//function
function gameEngine(value) {}

function getRandomNumber() {
  const randomNumber = Math.floor(Math.random() * 20) + 1;
  return randomNumber;
}

//Run Game
function runGame() {
  //while (gameCounter <= 3) {
  //game runs here
  alert("Enter a number between 1 and 20");
  guessInput.addEventListener("keyup", (e) => {
    if (e.key.toLowerCase() == "enter") {
      const value = +guessInput.value;
      alert("You have entered " + value);
      guessInput.value = "";
      if (value === randomValue) {
        alert("Congratulations! You have won");
        isCorrectAnswer = true;
      } else {
        alert("Wrong.Try Again");
      }
    }
  });
  //alert(`Wrong answer. Try again. You have ${3 - gameCounter} trials`);
  gameCounter++;
   //  }
     alert(`Wrong answer. Try again. You have ${3 - gameCounter} trials`);
}
runGame();
