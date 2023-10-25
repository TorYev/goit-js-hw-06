let counterValue = 0;
const decrementBtn = document.getElementsByTagName("button")[0];
const incrementBtn = document.getElementsByTagName("button")[1];
const valueSpan = document.getElementById("value");

function updateScore() {
  valueSpan.textContent = counterValue;
}

decrementBtn.addEventListener("click", function () {
  counterValue -= 1;
  updateScore();
});

incrementBtn.addEventListener("click", function () {
  counterValue += 1;
  updateScore();
});
