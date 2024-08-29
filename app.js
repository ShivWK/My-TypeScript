//tsc app.ts --module ESNext --target ES6
// let user3 : UserFunction = (shoo) => {
//     console.log(shoo);
//     return 25;
// };
// console.log(user3("shiv"));
//Function return type in TS
function mine(num1, str) {
    console.log(num1 + str);
}
function mine2(str1) {
    return str1;
}
console.log(mine2(52));
function mine3(a, b) {
    console.log(a + b);
    // return a + b;
}
mine3("Shivendra", " Dwivedi");
function objFunc(name, age) {
    return { name: name, age: age };
}
console.log(objFunc("shiv", 25));
export {};
