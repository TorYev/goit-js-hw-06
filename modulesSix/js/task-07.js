const fontSizeControl = document.getElementById("font-size-control");
const span = document.getElementById("text");

fontSizeControl.addEventListener("input", function () {
  span.style.fontSize = `${fontSizeControl.value}px`;
});
