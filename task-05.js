const input = document.getElementById("name-input");
const output = document.getElementById("name-output");

input.addEventListener("input", function () {
  if (input.value) {
    output.textContent = input.value;
  } else {
    output.textContent = "Anonymous";
  }
});

console.log(output.textContent);
