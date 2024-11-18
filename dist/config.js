var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function ReqiuredDecorator(target, propName) {
    var _a;
    validerObject[target.constructor.name] = Object.assign(Object.assign({}, validerObject[target.constructor.name]), { [propName]: [
            ...(((_a = validerObject[target.constructor.name]) === null || _a === void 0 ? void 0 : _a[propName]) || []),
            "reqiured"
        ] });
}
function MinlengthDecorator(target, propName) {
    var _a;
    validerObject[target.constructor.name] = Object.assign(Object.assign({}, validerObject[target.constructor.name]), { [propName]: [
            ...(((_a = validerObject[target.constructor.name]) === null || _a === void 0 ? void 0 : _a[propName]) || []),
            "minlength"
        ] });
}
function PositiveDecorator(target, propName) {
    var _a;
    validerObject[target.constructor.name] = Object.assign(Object.assign({}, validerObject[target.constructor.name]), { [propName]: [
            ...(((_a = validerObject[target.constructor.name]) === null || _a === void 0 ? void 0 : _a[propName]) || []),
            "psitiveNumber"
        ] });
}
const validerObject = {};
function validator(obj) {
    let isValid = true;
    const validateClass = validerObject[obj.constructor.name];
    if (!validateClass) {
        return true;
    }
    for (let prop in validateClass) {
        for (let val of validateClass[prop]) {
            switch (val) {
                case "reqiured": {
                    isValid = isValid && !!obj[prop];
                    break;
                }
                case "psitiveNumber": {
                    isValid = isValid && obj[prop] > 0;
                    break;
                }
                case "minlength": {
                    isValid = isValid && obj[prop].length > 3;
                    break;
                }
                default: {
                    console.log("Invalid");
                }
            }
        }
    }
    return isValid;
}
class User {
    constructor(uname, age) {
        this.username = uname;
        this.age = age;
    }
}
__decorate([
    ReqiuredDecorator,
    MinlengthDecorator
], User.prototype, "username", void 0);
__decorate([
    PositiveDecorator
], User.prototype, "age", void 0);
const obj1 = new User("ShivWk", 25);
const obj2 = new User("sahil", 24);
if (validator(obj2)) {
    console.log("User object crerated");
}
else {
    alert("Invalid Input");
}
