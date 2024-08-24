

// function sum(num1 : number, num2 : number) {
//     return num1 + num2;
// }

// console.log(sum(12, 13));

// function sum1(num1, num2) {
//     return num1 + num2;
// }

// console.log(sum1('12', 13));

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

let personArray : (number | string | boolean)[] = ["str", 45, true];
// console.log(personArray);

// personArray.push(false);
// personArray.push('shiv');
// personArray.push(50);
// personArray[3] = 'shivendra';
// console.log(personArray);

// console.log(personArray[3]);

let tupleArray : [number, string, number, boolean] = [1, 'shivendra', 22, true] 
console.log(tupleArray.pop());
tupleArray.push("shivendra");
console.log(tupleArray.shift())
tupleArray.unshift("naHi pata ji");
console.log(tupleArray);