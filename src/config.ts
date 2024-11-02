// console.log("config file 2.2 hi")
// // Tujhme bhi mai pehle mila hun

// function mine(num , num2) {
//     console.log(num + " " + num2);
// }

// // mineVar = "shivendra";

// function add(a: number) {
//     console.log(a + 4);
// }

// const btn = document.getElementById("btn")!;

// btn.addEventListener("click", add.bind(null, 2))

// function sumation(num1 : number, num2 : number, msg : string) {
//     let result : number = num1 + num2;

//     console.log(result)
// }

//noImplicitReturn

    // function sum(num1: number, num2:number) {
    //     if (num1 > 0 && num2 > 0) {
    //         const result = num1 + num2;
    //         return result;
    //     } else {
    //         console.log("not allowed values");
    //         return false;
    //     }
    // }

    // sum(0, 4);

    // function subtract(num1: number, num2:number) {
    //     if (num1 > num2) {
    //         console.log(num1 -num2)
    //     }
    //     console.log("negative result");
    // }

    // subtract(4, 2);

//Array destructurning

    // let arr =  ["Shivendra" , "Dwivedi" , 25];

    // const [fname, lname, age] = arr;

    // console.log(fname + " " + lname + " age" + age);\

//Class

    // class Person {

    //     constructor(public empName : string, private salary : number, public baseLocation : string, public isEligible : boolean, private hike : number, readonly empid : number) {

    //     }

    //     public getSalary() {
    //         if (this.isEligible) {
    //             return this.getNewSalary();
    //         }

    //         return this.salary;
    //     }

    //     private getNewSalary() {
    //         return this.salary + this.salary * this.hike/100;
    //     }
    // }

    // class Employee extends Person {
    //     constructor(public bonus : number, eN : string, sal : number, bL : string, isE : boolean, hk : number, eId : number) {
    //         super(eN, sal, bL, isE, hk, eId);
    //     }

    //     getName() {
    //         return this.empName;
    //     }
    // }

    // const obj = new Employee(200000, "shivendra", 180000, "Naini", true, 50, 101);
    // console.log(obj.getName());
    // console.log(obj.getSalary());
    // console.log(obj.empid);

//Overriding and Protected A.M

    // class Person {

    //     constructor(public empName : string, protected salary : number, public baseLocation : string, public isEligible : boolean, protected hike : number, readonly empid : number) {

    //     }

    //     public getSalary() {
    //         if (this.isEligible) {
    //             return this.getNewSalary();
    //         }

    //         return this.salary;
    //     }

    //     getNewSalary() {
    //         console.log("getNewSalary of person");
    //         return this.salary + this.salary * this.hike/100;
    //     }
    // }

    // class Employee extends Person {
    //     constructor(public bonus : number, eN : string, sal : number, bL : string, isE : boolean, hk : number, eId : number) {
    //         super(eN, sal, bL, isE, hk, eId);
    //     }

    //     getName() {
    //         return this.empName;
    //     }

    //     getNewSalary() {
    //         console.log("getNewSalary of child")
    //         return this.salary + this.salary * this.hike/100;
    //     }
        

    // }

    // const obj = new Employee(200000, "shivendra", 180000, "Naini", true, 50, 101);
    // const obj2 = new Person("Sahil", 150000, "Naini", true, 75, 123)
    // console.log(obj.getName());
    // console.log(obj.getSalary());
    // console.log(obj.empid);
    // console.log(obj.getNewSalary());
    // console.log(obj2.getNewSalary());

//getter and setter functions

    // class Getset {
    //     private _name : string | null = null;
    //     public age : number;

    //     get name() {
    //         return this._name;
    //     }

    //     set name(nm) {
    //         if (nm.length < 4) {
    //             throw new Error("Too short name");
    //         } else {
    //             this._name = nm;
    //         }
    //     }

    //     constructor(age : number) {
    //         this.age = age;
    //     }

    // }

    // const obj = new Getset(25);
    // obj.name = "Shivendra";
    // console.log(obj.name);
 
// Abstract class

    // abstract class Person {
    //     public firstName : string;
    //     public lastName : string;

    //     abstract getSalary() : number;

    //     getName() {
    //         return this.firstName +" "+ this.lastName;
    //     }

    //     constructor(fn : string, ln : string) {
    //         this.firstName = fn;
    //         this.lastName  = ln;
    //     }
    // }

    // class Employee extends Person {
    //     private salary : number;

    //     constructor(fn : string, ln : string, sal : number) {
    //         super(fn, ln);
    //         this.salary = sal;
    //     }

    //     getSalary() : number {
    //         return this.salary;
    //     }
    // }

    // const obj = new Employee("Shivendra", "Dwivedi", 180000);
    // console.log(obj.getSalary());
    // console.log(obj.getName());

//Static method and property

    // class StaticWali {
    //     public firstName : string;
    //     public lastName : string;
    //     public static count : number = 0;
        
    //     constructor(fn : string, ln : string) {
    //         this.firstName = fn;
    //         this.lastName = ln;
    //         StaticWali.count++;
    //     }

    //     getName() {
    //         return this.firstName + " " + this.lastName;
    //     }

    //     getCounter() {
    //         return StaticWali.count;
    //     }

    //     static getCount() {
    //         return StaticWali.count;
    //     }
    // }

    // const obj1 = new StaticWali("Shivendra", "Dwivedi");
    // const obj2 = new StaticWali("Shivendra", "Dwivedi");
    // const obj3 = new StaticWali("Shivendra", "Dwivedi");
    // const obj4 = new StaticWali("Shivendra", "Dwivedi");

    // console.log(obj1.getName());
    // console.log(obj1.getCounter())
    // console.log(StaticWali.getCount());

//Interfaces

    // interface User1 {
    //     firstName : string;
    //     lastName : string;

    //     getFullName() : string;
    // }

    // interface User2 {
    //     age : number;
    //     getAge() : number;
    // }

    // interface User3 extends User1 , User2{
    //     address : string;

    //     getAddress() : string;
    // }

    // class Member implements User3 {
    //     constructor(public firstName : string, public lastName : string, public age : number, public address : string) {

    //     }

    //     getFullName() {
    //         return this.firstName + " " + this.lastName; 
    //     }

    //     getAge() {
    //         return this.age;
    //     }

    //     getAddress() {
    //         return this.address;
    //     }

    // }

    // const mem = new Member("Shivendra", "Dwivedi", 25, "Naini Prayagraj");
    // console.log(mem.getFullName());
    // console.log(mem.getAge());
    // console.log(mem.getAddress());

    //Interfaces as type for function

        // interface Sumfn {
        //     (num1 : number, num2 : number) : number;
        // }

        // let add : Sumfn;

        // add = (n1 : number , n2 : number) => {
        //     return n1 + n2;
        // }

    // Readonly and optional properties in Interfaces

        //Readonly

        // interface i1 {
        //     firstname : string;
        //     lastname : string;
        //     readonly age : number;

        //     getName() : string;
        // }

        // class Mine implements i1 {
        //     constructor(public firstname : string, public lastname : string, public age : number) {

        //     }

        //     getName() {
        //         return this.firstname + " " + this.lastname;
        //     }
        // }

        // const obj = new Mine("Shivendra", "Dwivedi" , 25);
        // obj.age = 24;


        // const obj2 : i1 = new Mine("Shivendra", "Dwivedi" , 25);
        // obj2.age = 24;

        //Optional

        // interface i2 {
        //     firstName : string;
        //     lastName : string;
        //     age ?: number;
        // }

        // class Mine implements i2 {
        //     constructor(public firstName : string, public lastName : string) {

        //     }
        // }

        // const obj = new Mine("Shivendra", "Dwivedi");
        // obj.age = 25; //Property age doesnt exists in type Mine

    //Optional property in classes

        // class OptionalJi {
        //     firstName : string;
        //     lastName : string;
        //     age ?: number;
            
        //     constructor (fn : string, ln : string , age?: number) {
        //         this.firstName = fn;
        //         this.lastName = ln;
        //     }
        // }

        // const obj = new OptionalJi("Shiv", "Shena");
        
//Type guarding

    //In operator

        const Obj = {
            prop1 : "Shivendra",
            prop2 : undefined,
        }

        console.log('prop1' in Obj);
        console.log('toString' in Obj);

    //Type checkingh with interfaces

        type User = {
            name : string,
            email ?: string,
        }

        function greetUser(user : User) {
            if ("email" in user) {
                console.log(`Hi I'm ${user.name} and my mail is ${user.email}`);
            } else {
                console.log(`Hi I'm ${user.name}`);
            }
        }

        greetUser({name : "Shivendra"})
        greetUser({name : "shivendra" , email : "shivendrawk@gamil.com"})

        




        