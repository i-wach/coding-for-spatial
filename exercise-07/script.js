// 1 -- Select each circle
let greyCircle = document.getElementById("grayButton");
let whiteCircle = document.getElementById("whiteButton");
let blueCircle = document.getElementById("blueButton");
let yellowCircle = document.getElementById("yellowButton");
// 2 -- Add an event listener to each circle
greyCircle.addEventListener("click", turnGray);
whiteCircle.addEventListener("click", turnWhite);
blueCircle.addEventListener("click", turnBlue);
yellowCircle.addEventListener("click", turnYellow);

// 3 -- Write an event handler to change the color of the page when each circle is pressed.

let body = document.querySelector("body");

function turnGray() {
  console.log("turn gray");
  body.style.backgroundColor = "gray";
}

function turnWhite() {
  console.log("turn white");
  body.style.backgroundColor = "white";
}

function turnBlue() {
  console.log("turn blue");
  body.style.backgroundColor = "blue";
}

function turnYellow() {
  console.log("turn yellow");
  body.style.backgroundColor = "yellow";
}
