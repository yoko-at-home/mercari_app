var i = 0;

function Count() {
  document.getElementById("count").innerHTML = i++ + 1;
}

function changeColor() {
  var elem = document.getElementById("heart");
  elem.style.color = "red";
}
