class Person {
    constructor(empName, salary, baseLocation, isEligible, hike, empid) {
        this.empName = empName;
        this.salary = salary;
        this.baseLocation = baseLocation;
        this.isEligible = isEligible;
        this.hike = hike;
        this.empid = empid;
    }
    getSalary() {
        if (this.isEligible) {
            return this.getNewSalary();
        }
        return this.salary;
    }
    getNewSalary() {
        console.log("getNewSalary of person");
        return this.salary + this.salary * this.hike / 100;
    }
}
class Employee extends Person {
    constructor(bonus, eN, sal, bL, isE, hk, eId) {
        super(eN, sal, bL, isE, hk, eId);
        this.bonus = bonus;
    }
    getName() {
        return this.empName;
    }
    getNewSalary() {
        console.log("getNewSalary of child");
        return this.salary + this.salary * this.hike / 100;
    }
}
const obj = new Employee(200000, "shivendra", 180000, "Naini", true, 50, 101);
const obj2 = new Person("Sahil", 150000, "Naini", true, 75, 123);
console.log(obj.getNewSalary());
