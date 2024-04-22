// class Person{
//     name:string
//     age:number
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//     introduce():void{
//     console.log(`Привет,меня зовут ${name}`)
//     }
// }
// let person=new Person()
// person.name="lili"
// person.age=17
// person.introduce()
//////////
// class Person{
//     name:string
//     age:number
//     constructor(name:string,age:number){
//         this.age=age;
//         this.name=name;
//     }
//     taltkAboutCourse():void{
//         console.log()
//     }
// }
// class Student extends Person{
//     course:number
//     constructor(name:string,age:number,course:number){
//         super(name,age)
//         this.course=course
//     }
//     taltkAboutCourse():void{
//         console.log(`Я учусь на ${this.course} курсе`)
//     }
// }
// let person=new Student("lili",17,2)
// person.taltkAboutCourse()
////////////////
// class Person{
//     name:string
//     age:number
//     constructor(name:string,age:number){
//         this.age=age;
//         this.name=name;
//     }
//     taltkAboutCourse():void{
//         console.log(`Я учусь на курсе`)
//     }
// }
// class Student extends Person{
//     course:number
//     constructor(name:string,age:number,course:number){
//         super(name,age)
//         this.course=course
//     }
//     taltkAboutCourse():void{
//         super.taltkAboutCourse()
//         console.log(`привет,меня зовут ${this.name}.Я студент ${this.course} курса`)
//     }
// }
// let person=new Student("lili",17,2)
// person.taltkAboutCourse()
/////////////
var Animal = /** @class */ (function () {
    function Animal(name, age) {
        this.age = age;
        this.name = name;
    }
    Animal.prototype.speak = function () {
        console.log("Unknown sound...");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, age) {
        return _super.call(this, name, age) || this;
    }
    Dog.prototype.speak = function () {
        _super.prototype.speak.call(this);
        console.log("woof,woof!");
    };
    return Dog;
}(Animal));
var dog = new Dog("bufffi", 2);
dog.speak();
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name, age) {
        return _super.call(this, name, age) || this;
    }
    Cat.prototype.speak = function () {
        _super.prototype.speak.call(this);
        console.log("meow,meow!");
    };
    return Cat;
}(Animal));
var cat = new Cat("belish", 5);
cat.speak();
