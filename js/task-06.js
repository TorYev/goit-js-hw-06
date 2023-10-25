const input = document.getElementById("validation-input");

input.addEventListener("blur", function () {
  if (input.value.length === Number(input.getAttribute("data-length"))) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
});
