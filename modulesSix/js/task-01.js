"use strict";

console.log(
  `Number of categories: ${document.querySelectorAll("li.item").length}`
);

document
  .querySelectorAll("li.item")
  .forEach((key, index) => console.log(key.textContent));
