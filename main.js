// var i = 0;

// function Count() {
//   document.getElementById("count").innerHTML = i++ + 1;
// }

// function changeColor() {
//   var elem = document.getElementById("heart");
//   elem.style.color = "red";
// }

//
const heart = document.querySelector("#heart");
const count = document.querySelector("#count");

function changeColor() {
  heart.style.color = "red";
}

// var i = 0;
// function count() {
//   innerHTML = i++ + 1;
// }

heart.addEventListener("click", changeColor);
count.addEventListener("click", count);
