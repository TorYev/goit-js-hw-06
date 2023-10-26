const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments"
];

const ul = document.getElementById("ingredients");
const lishki = document.createDocumentFragment();

ingredients.forEach((ingredient) => {
  const li = document.createElement("li");
  li.textContent = ingredient;
  li.setAttribute("class", "item");
  lishki.appendChild(li);
});

ul.appendChild(lishki);
