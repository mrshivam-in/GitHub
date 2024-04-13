//GENERATE RANDOM NUMBERS
let randomNum = Math.floor(Math.random() * 10) + 1;

document.getElementById("submitGuess").onclick = function () {
  //INPUT NUMBER
  let inputNum = document.getElementById("guessField").value;

  if (inputNum == randomNum) {
    alert("Congratulation !! you guessed It Right In " + randomNum + " Guess");
  }
  //IF GUESSED NUMBER IF GREATER THAN ACTUAL NUMBER
  else if (inputNum < randomNum) {
    alert("OPPS SORRY!! TRY GREATER NUMBER ");
  } else {
    alert("OPPS SORRY! TRY SMALLER NUMBER");
  }
};
