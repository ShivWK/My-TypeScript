//tsc app.ts --module ESNext --target ES6
function greetUser(user) {
    console.log('hello, ' + user.name);
}
let greet;
greet = greetUser;
greet({ name: "Shivendra", age: 25 });
greet = 100;
greet("mine");
export {};
