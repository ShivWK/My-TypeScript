function expand(obj1, obj2) {
    return Object.assign(obj1, obj2);
}
let combined = expand({ name: "shiv", age: 25 }, { name: "John", gender: "male" });
console.log(combined.name);
