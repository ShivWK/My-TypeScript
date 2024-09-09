"use strict";
console.log("config file 2.2 hi");
function mine(num, num2) {
    console.log(num + " " + num2);
}
let mineVar;
mineVar = "shivendra";
function add(a) {
    console.log(a + 4);
}
const btn = document.getElementById("btn");
btn.addEventListener("click", add.bind(null, 2));
