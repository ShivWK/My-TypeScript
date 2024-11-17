var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Logger(target) {
    return class LoggerClass extends target {
        constructor(...args) {
            super(...args);
            console.log("from Logger class");
            console.log(this);
        }
    };
}
let Mine = class Mine {
    constructor(name) {
        this.name = name;
        console.log("from Mine class");
    }
};
Mine = __decorate([
    Logger
], Mine);
const obj = new Mine("Shivendra");
