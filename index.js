//this is to change the first dice image
var randomNumber1 = Math.floor(Math.random() * 6 + 1);

var randomImageSource = "./images/" + "dice" + randomNumber1 + ".png";

var image1 = document.querySelector(".img1");

image1.setAttribute("src", randomImageSource);

//this is to change the second dice image
var randomNumber2 = Math.floor(Math.random() * 6 + 1);

var randomImageSource2 = "./images/" + "dice" + randomNumber2 + ".png";

var image2 = document.querySelector(".img2");

image2.setAttribute("src", randomImageSource2);

//logic to declare the winner / draw

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🏆 Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🏆";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
