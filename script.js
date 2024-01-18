let game = ["rock", "paper", "scissor"];
let userGuess;
let comp;
let rand;
let condionTry;

do {
  let bigUserGuess = prompt("Enter rock, paper or scissor");
  userGuess = bigUserGuess.toLowerCase();
  rand = Math.floor(Math.random() * 3);
  if (userGuess == "rock" || userGuess == "paper" || userGuess == "scissor") {
    comp = game[rand];
    console.log("Computer choosed ", comp);
    console.log("user choosed ", userGuess);
    if (comp == "rock" && userGuess == "rock") {
      alert("Match Draw both Choosen Rock");
    } else if (comp == "rock" && userGuess == "paper") {
      alert("Congratulation! You won the match..Computer choosed Rock");
    } else if (comp == "rock" && userGuess == "scissor") {
      alert("You loss ! Better luck next time..Computer Choosed Rock");
    } else if (comp == "paper" && userGuess == "rock") {
      alert("You loss ! Better luck next time..Computer Choosed Paper");
    } else if (comp == "paper" && userGuess == "paper") {
      alert("Match Draw both Choosed Paper");
    } else if (comp == "paper" && userGuess == "scissor") {
      alert("Congratulation! You won the match..Computer choosed Paper");
    } else if (comp == "scissor" && userGuess == "scissor") {
      alert("Match Draw both Choosed Scissor");
    }

    condionTry = confirm("Do you want to play again");
  } else {
    alert("Your input is not correct");
  }
} while (condionTry == true);

console.log(game[rand]);
