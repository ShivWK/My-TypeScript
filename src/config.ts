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

    abstract class Person {
        public firstName : string;
        public lastName : string;

        abstract getSalary() : number;

        getName() {
            return this.firstName +" "+ this.lastName;
        }

        constructor(fn : string, ln : string) {
            this.firstName = fn;
            this.lastName  = ln;
        }
    }

    class Employee extends Person {
        private salary : number;

        constructor(fn : string, ln : string, sal : number) {
            super(fn, ln);
            this.salary = sal;
        }

        getSalary() : number {
            return this.salary;
        }
    }

    const obj = new Employee("Shivendra", "Dwivedi", 180000);
    console.log(obj.getSalary());
    console.log(obj.getName());

