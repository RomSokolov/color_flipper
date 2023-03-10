const colors = ["violet", "blue", "rgb(13,50,60)", "#D1AE9C"];
const button = document.getElementById("button");
const color = document.querySelector(".colors");

button.addEventListener("click", function () {
  let rand = getRandom();
  document.body.style.background = colors[rand];
  color.textContent = colors[rand];
});

function getRandom() {
  return Math.floor(Math.random() * colors.length);
}
