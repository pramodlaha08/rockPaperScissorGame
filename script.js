let rand = Math.floor(Math.random() * 100) + 1;
let userNum = 0;
let count = 0;
let diff;
let confirmUser;

do {
  userNum = prompt("Enter your number: ", `${userNum}`);
  userNum = Number.parseInt(userNum);
  diff = userNum - rand;
  if (diff === 0) {
    alert(`Congrats you Win and the number is ${userNum}`);
  } else if (diff > 0 && diff <= 10) {
    alert("Your Number is quiet greater please input lower number");
  } else if (diff > 10 && diff <= 25) {
    alert("Your number is higher, Please input lower number");
  } else if (diff > 25) {
    alert("You are too far, Please input lower Number");
  } else if (diff < 0 && diff >= -10) {
    alert("Your Number is quiet lower please input greater number");
  } else if (diff < -10 && diff >= -25) {
    alert("Your number is lower, Please input greater number");
  } else if (diff < -25) {
    alert("You are too far, Please input greater Number");
  }
  count++;

  if (diff != 0) {
    confirmUser = confirm("Do you want to try ?");
  }
} while (userNum !== rand && confirmUser == true);

if (confirmUser == false) {
  alert("You quit and failed 😂");
}

if (diff == 0) {
  alert(
    `you have done in ${count} chances. You scored ${100 - count} out of 100`
  );
}
