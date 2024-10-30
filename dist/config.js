class Getset {
    get name() {
        return this._name;
    }
    set name(nm) {
        if (nm.length < 4) {
            throw new Error("Too short name");
        }
        else {
            this._name = nm;
        }
    }
    constructor(age) {
        this._name = null;
        this.age = age;
    }
}
const obj = new Getset(25);
obj.name = "Shivendra";
console.log(obj.name);
