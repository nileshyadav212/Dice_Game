
var firstNumber = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "dice" + firstNumber + ".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var secondnumber = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + secondnumber + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


//If player 1 wins
if (firstNumber > secondnumber) {
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if (secondnumber >firstNumber) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
