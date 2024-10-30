class Person {
    constructor(fn, ln) {
        this.firstName = fn;
        this.lastName = ln;
    }
}
class Employee extends Person {
    constructor(fn, ln, sal) {
        super(fn, ln);
        this.salary = sal;
    }
    getSalary() {
        return this.salary;
    }
}
const obj = new Employee("Shiv", "Dwivedi", 180000);
console.log(obj.getSalary());
