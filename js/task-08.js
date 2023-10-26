const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const { email, password } = event.target.elements;

  if (!email.value || !password.value) {
    alert("Все поля должны быть заполнены!");
    return;
  }

  const formData = {
    email: email.value,
    password: password.value
  };

  console.log(formData);

  loginForm.reset();
});
