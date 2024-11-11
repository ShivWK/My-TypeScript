class GenericClass {
    constructor() {
        this.Items = [];
    }
    addItems(item) {
        this.Items.push(item);
    }
    getItems() {
        return this.Items;
    }
}
let obj1 = new GenericClass();
obj1.addItems({ name: "shivendra", roll: "software Engineer" });
console.log(obj1.getItems());
let obj2 = new GenericClass();
obj2.addItems({ name: "Lavi", age: 28, gender: "female" });
let obj3 = new GenericClass();
obj3.addItems("Shivendra");
console.log(obj3.getItems());
