//tsc app.ts --module ESNext --target ES6
//TypeScript function
// function sum(num1 : number, num2 : number) {
//     return num1 + num2;
// }
// console.log(sum(12, 13));
// function sum1(num1, num2) {
//     return num1 + num2;
// }
// console.log(sum1('12', 13));
//TypeScript Object
// let person : {name : string; age : number;} = {
//     name : 'shivD',
//     age : 25
// }
// console.log(person['name'])
// let user = {
//     name : 'shiv',
//     age : 25,
//     obj : {
//         name1 : "shiva",
//         age : 24
//     }
// }
// console.log(user);
//TypeScript Arrays
// let personArray : (number | string | boolean)[] = ["str", 45, true];
// console.log(personArray);
// personArray.push(false);
// personArray.push('shiv');
// personArray.push(50);
// personArray[3] = 'shivendra';
// console.log(personArray);
// console.log(personArray[3]);
//TypeScript Tuple
// let tupleArray : [number, string, number, boolean] = [1, 'shivendra', 22, true] 
// console.log(tupleArray.pop());
// tupleArray.push("shivendra");
// console.log(tupleArray.shift())
// tupleArray.unshift("naHi pata ji");
// console.log(tupleArray);
//enum types in typescript
// enum mine {
//     up = 2,
//     down,
//     left,
//     right
// }
// console.log(mine.right);
// enum Direction {
//     Up = 1,
//     Down = 'down',
//     Left = 2,
//     Right = 'right'
// }
// console.log(Direction.Right +" "+ Direction.Up);
//'any' type in TS
// let mine : any;
// mine = "shivendra";
// mine = 25;
// mine = true;
// let arr : any;
// arr = ['shivendra', 25, false, null, undefined];
// console.log(arr)
// let arr1 : { [key : string] : any };
// arr1 = {
//     first :"string",
//     second : 35,
//     third : true,
// }
// arr1 = {
//     1 : 25, //TypeScript allows numeric keys in objects defined with { [key: string]: any } because TypeScript understands that numeric keys will be converted to strings in JS file so no error.
//     second : "shivendra",
// }
// console.log(arr1);
// let newVar;
// console.log(newVar);
// console.log( typeof newVar);
//Union type in TS
// let user : {name : string; age : number} | null = null;
// function getUser() {
//     const uName = "shivendra";
//     const uAge = 25;
//     user = {name : uName, age : uAge};
//     return user;
// }
// console.log(getUser());
// function printState(message : string , code : string | number) {
//     console.log(message + " " + "Status code "+code);
// }
// printState("Request found", 200);
// printState("Request was not found", ' 404')
// function printState1(message : string , code : string | number) {
//     if (typeof code === 'string') {
//         console.log(message + " " + "Status code "+code.trim());
//     } else {
//         console.log(message + " " + "Status code "+code);
//     }
// }
// printState1("Request found", 200);
// printState1("Request was not found", ' 404');
//literal types in TS
// let name : 'shivendra' | 23 | true | {name : "shuv", age : 23} | ["shuv", 25, true] | null | undefined= 'shivendra'
// const mane2 = 'shive';
// name = 23;
// name = true;
// name = {name : "shuv", age : 23};
// name = ['shuv', 25, true];
// name = null;
// name = undefined;
//type alias in TS
// type StrOrNum = string | number;
// let user : StrOrNum = "shivendra";
// user = 35;
// type User = { 
//     name : string,
//     age : number,
//     address : string,
// }
// let user1 : User = {
//     name : "sahil",
//     age : 15,
//     address : 'Triveni 91',
// }
// type UserArray = (string | number )[];
// let myArray : UserArray = ["sahil", 24 , 'priya' , 29, 'riya' , 28];
// type UserFunction = (name : string) => number;
// let user3 : UserFunction = (shoo) => {
//     console.log(shoo);
//     return 25;
// };
// console.log(user3("shiv"));
//Function return type in TS
// function mine(num1 : number , str : string) {
//     console.log(num1 + str);
// }
// function mine2(str1) : number {
//     return str1
// }
// console.log(mine2(52));
// function mine3(a : string, b : string) : void {
// console.log(a + b)
//     // return a + b;
// }
// mine3("Shivendra", " Dwivedi");
// function objFunc(name : string , age : number) : {name : string; age : number;} {
//     return { name : name, age : age};
// }
// console.log(objFunc("shiv", 25));
//function type in TS
// type User = {name : string; age : number};
// function greetUser(user : User) : void {
//     console.log('hello, '+user.name);
// }
//         // let greet
//         // greet = greetUser;
//         // greet({name : "Shivendra", age : 25});
//         // greet = 100;
//         // greet("mine");
//     // let greet : (name : User) => void;
//     // greet = greetUser;
//     // greet = 100;
//     // greet({name : "Sahil", age : 25});
// let greet = greetUser;
// function sum(a : number) : number {
//     return 4 + a;
// }
// greet = sum;
//Function type for callback function
function getData(num1, num2, print) {
    let sum = num1 + num2;
    print("the sum is ", sum);
}
function callBack(str, num2) {
    console.log(str, num2);
}
getData(2, 4, callBack);
export {};
