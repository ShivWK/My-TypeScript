var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function AccessorLogger(target, name, descriptor) {
    const getter = descriptor.get;
    const setter = descriptor.set;
    descriptor.get = function () {
        console.log("Accessing the Property ", name);
        console.log(this);
        if (getter) {
            getter.call(this);
        }
    };
    descriptor.set = function () {
        console.log("setting the property ", name);
        if (setter) {
            setter.call(this);
        }
    };
}
class Product2 {
    set price(val) {
        this._price = val;
    }
    get price() {
        return this._price;
    }
    constructor(name) {
        this._price = 100;
        this.name = name;
        console.log(this.name, " ", this._price);
    }
}
__decorate([
    AccessorLogger
], Product2.prototype, "price", null);
const obj = new Product2("Shivendra obj");
obj.price;
obj.price = 45;
