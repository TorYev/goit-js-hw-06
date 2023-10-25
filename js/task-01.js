"use strict";
//1.1
console.log(
  `Number of categories: ${document.querySelectorAll("li.item").length}`
);
console.log("");

//1.2
const item = document.querySelector(".item");
document.querySelectorAll("li.item").forEach(function (elem) {
  console.log(`Category: ${elem.childNodes[1].textContent}`);
  console.log(`Elements: ${elem.querySelectorAll("li").length}`);
  console.log("");
});
