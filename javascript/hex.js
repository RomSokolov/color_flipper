const colors = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];
const button = document.getElementById("button");
const color = document.querySelector(".color");

button.addEventListener("click", function () {
  let hex = "#";
  for (let i = 0; i < 6; i++) {
    hex += colors[getRandom()];
  }
  document.body.style.background = hex;
  color.textContent = hex;
});

function getRandom() {
  return Math.floor(Math.random() * colors.length);
}
