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

//Intersection types

    // type StringOrNumber = string | Number;
    // type BooleanOrNumber = boolean | number;

    // type myType = StringOrNumber & BooleanOrNumber;

    // var value : myType = 25;
    // value = 15;

    // type user = {
    //     name : string;
    //     age : number;
    // }

    // type admin = {
    //     name : string;
    //     roll : string;
    // }

    // type custom = user & admin;

    // let myUser : custom =  {
    //     name : "shivendra",
    //     age : 24,
    //     roll : "Frontend engineer",
    // }

//Type guarding

    //In operator

        // const Obj = {
        //     prop1 : "Shivendra",
        //     prop2 : undefined,
        // }

        // console.log('prop1' in Obj);
        // console.log('toString' in Obj);

    //Type checkingh with interfaces

        // type User = {
        //     name : string,
        //     email ?: string,
        // }

        // function greetUser(user : User) {
        //     if ("email" in user) {
        //         console.log(`Hi I'm ${user.name} and my mail is ${user.email}`);
        //     } else {
        //         console.log(`Hi I'm ${user.name}`);
        //     }
        // }

        // greetUser({name : "Shivendra"})
        // greetUser({name : "shivendra" , email : "shivendrawk@gamil.com"})

//Discrimenated Unions

    // interface square {
    //     type : "square";
    //     side : number;
    // }

    // interface circle {
    //     type : 'circle';
    //     radius : number; 
    // }

    // type shape = square | circle;
    // function calcArea(argu : shape) {
    //     switch (argu.type) {
    //         case "square" : {
    //             return argu.side * argu.side;
    //         }

    //         case 'circle' : {
    //             return 3.14 * argu.radius * argu.radius;
    //         }
    //     }
    // }

    // console.log(calcArea({type : 'circle', radius : 5}));
    // console.log(calcArea({type : "square" , side : 10}));

//Type casting 

    // let btn = document.querySelector("#input");
    // console.log(btn.value);

    // let btn2 = <HTMLInputElement>document.querySelector("#input");
    // console.log(btn2.value);

    // let btn3 = document.querySelector("#input") as HTMLInputElement;
    // console.log(btn3.value);

//Index Propeeties

    // interface User {
    //     name : string,
    //     [prop : string] : string | number;
    // }

    // let employee : User = {
    //     name : "Shivendra",
    //     Class : "BCA graduate",
    //     Roll : "Frontend Engineer | Software engineer",
    //     address : "Utter Pradesh",
    // }

    // interface User2  {
    //     [prop : string] : string | number;
    // }

    // let Admin : User2  = {
    //     Roll : "CEO",
    //     age : 28,
    //     name : "shivendra",
    //     COmpanyType : "E-commerce"
    // }

//Function overloading

            // type StringOrNumber = string | number;

            // function addition(a : number , b : number) : number;
            // function addition(a : number , b : string) : string;
            // function addition(a : string , b : number) : string;
            // function addition(a : string , b : string) : string;

            // function addition(a : StringOrNumber, b : StringOrNumber) {
            //     if (typeof a === "string" || typeof b === "string") {
            //         return a.toString() + b.toString();
            //     } else {
            //         return a + b;
            //     }
            // }

            // addition("Hello", "World").toUpperCase();
            // addition(10, 20);


//Generics

        // function swap<T>(arr : T[], index1 : number , index2 : number) : T[] {

        //     //Code to swap the elements
        //     return [];
        // }

        // swap(["Hello", "World"], 1, 2).map((data : string) => (
        //     data.toLowerCase()
        // ));

    //Generic functions with constraints

        function expand<T, U>(obj1 : T, obj2 : U) {
            return Object.assign(obj1, obj2);
        }

        let combined = expand({name : "shiv" , age : 25}, {name : "John" , gender : "male"})
        console.log(combined.name);

        interface User {
            name : string;
            age : number;
        }

        function display<T extends User>(obj : T) {
            return obj.name;
        }

        display({name : "shivendra" , age : 24});
        display({name : "Priya" , age : 29 , address : "gurugram"});
        display({roll : "engineer" , age : 26});

    //keyof

        function display2<T extends User, U extends string>(obj : T, key : U) {
            return obj[key];
        }

        function display3<T extends User, U extends keyof T>(obj : T, key : U) {
            return obj[key];
        }
        