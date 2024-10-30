class StaticWali {
    constructor(fn, ln) {
        this.firstName = fn;
        this.lastName = ln;
        StaticWali.count++;
    }
    getName() {
        return this.firstName + " " + this.lastName;
    }
    getCounter() {
        return StaticWali.count;
    }
    static getCount() {
        return StaticWali.count;
    }
}
StaticWali.count = 0;
const obj1 = new StaticWali("Shivendra", "Dwivedi");
const obj2 = new StaticWali("Shivendra", "Dwivedi");
const obj3 = new StaticWali("Shivendra", "Dwivedi");
const obj4 = new StaticWali("Shivendra", "Dwivedi");
console.log(obj1.getName());
console.log(obj1.getCounter());
console.log(StaticWali.getCount());
