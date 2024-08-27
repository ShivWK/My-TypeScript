//tsc app.ts --module ESNext --target ES6

//TypeScript function
    // function sum(num1 : number, num2 : number) {
    //     return num1 + num2;
    // }

    // console.log(sum(12, 13));

    // function sum1(num1, num2) {
    //     return num1 + num2;
    // }
    // console.log(sum1('12', 13));

//TypeScript Object
    // let person : {name : string; age : number;} = {
    //     name : 'shivD',
    //     age : 25
    // }
    // console.log(person['name'])

    // let user = {
    //     name : 'shiv',
    //     age : 25,
    //     obj : {
    //         name1 : "shiva",
    //         age : 24
    //     }
    // }
    // console.log(user);

//TypeScript Arrays
    // let personArray : (number | string | boolean)[] = ["str", 45, true];
    // console.log(personArray);
    // personArray.push(false);
    // personArray.push('shiv');
    // personArray.push(50);
    // personArray[3] = 'shivendra';
    // console.log(personArray);
    // console.log(personArray[3]);

//TypeScript Tuple
    // let tupleArray : [number, string, number, boolean] = [1, 'shivendra', 22, true] 
    // console.log(tupleArray.pop());
    // tupleArray.push("shivendra");
    // console.log(tupleArray.shift())
    // tupleArray.unshift("naHi pata ji");
    // console.log(tupleArray);

//enum types in typescript
enum mine {
    up = 2,
    down,
    left,
    right
}

console.log(mine.right);

enum Direction {
    Up = 1,
    Down = 'down',
    Left = 2,
    Right = 'right'
}

console.log(Direction.Right +" "+ Direction.Up);