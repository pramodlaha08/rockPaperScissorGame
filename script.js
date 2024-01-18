let game = ["rock", "paper", "scissor"];
let userGuess;
let comp;
let rand;
let condionTry;
let userTry = 0;
let userWin = 0;
do {
  let bigUserGuess = prompt("Enter rock, paper or scissor");
  userGuess = bigUserGuess.toLowerCase();
  rand = Math.floor(Math.random() * 3);
  if (userGuess == "rock" || userGuess == "paper" || userGuess == "scissor") {
    comp = game[rand];
    if (comp == "rock" && userGuess == "rock") {
      alert("Match Draw both Choosen Rock");
    } else if (comp == "rock" && userGuess == "paper") {
      alert("Congratulation! You won the match..Computer choosed Rock");
      userWin++;
    } else if (comp == "rock" && userGuess == "scissor") {
      alert("You loss ! Better luck next time..Computer Choosed Rock");
    } else if (comp == "paper" && userGuess == "rock") {
      alert("You loss ! Better luck next time..Computer Choosed Paper");
    } else if (comp == "paper" && userGuess == "paper") {
      alert("Match Draw both Choosed Paper");
    } else if (comp == "paper" && userGuess == "scissor") {
      alert("Congratulation! You won the match..Computer choosed Paper");
      userWin++;
    } else if (comp == "scissor" && userGuess == "rock") {
      alert("Congratulation! You won the match..Computer choosed scissor");
      userWin++;
    } else if (comp == "scissor" && userGuess == "paper") {
      alert("You loss ! Better luck next time..Computer Choosed scissor");
    } else if (comp == "scissor" && userGuess == "scissor") {
      alert("Match Draw both Choosed Scissor");
    }
    userTry++;
    console.log(
      `Computer guessed ${comp} \n User guessed ${userGuess} \n User tried ${userTry} \n User won ${userWin}`
    );
    condionTry = confirm(
      ` You won ${userWin} out of ${userTry}.. Do you want to play again ?`
    );
  } else {
    alert("Your input is not correct");
  }
} while (condionTry == true);

// alert(`You won ${userWin} out of ${userTry} `);

console.log(game[rand]);
