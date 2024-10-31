class Member {
    constructor(firstName, lastName, age, address) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.address = address;
    }
    getFullName() {
        return this.firstName + " " + this.lastName;
    }
    getAge() {
        return this.age;
    }
    getAddress() {
        return this.address;
    }
}
const mem = new Member("Shivendra", "Dwivedi", 25, "Naini Prayagraj");
console.log(mem.getFullName());
console.log(mem.getAge());
console.log(mem.getAddress());
