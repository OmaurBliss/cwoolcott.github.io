"use strict";
//Add appropriate access modifier to:
// animalName in Animal: public, private, or protected 
//// meowSound in Cat: public, private, or protected 
// Create Dog derived/extended class with a dogSound variable and a method of bark() that uses it
// Create a dog instance and Call the new dog class' sound method
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

exports.__esModule = true;
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.animalName = name;
    }
    Animal.prototype.move = function () {
        console.log(this.animalName + " Moves");
    };
    Animal.prototype.eat = function () {
        console.log(this.animalName + " eats.");
    };
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(animalName) {
        var _this = _super.call(this, animalName) || this;
        _this.meowSound = "meeooww";
        return _this;
    }
    Cat.prototype.meow = function () {
        console.log(this.animalName + " says " + this.meowSound);
    };
    return Cat;
}(Animal));
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(animalName) {
        var _this = _super.call(this, animalName) || this;
        _this.dogSound = "bork bork";
        return _this;
    }
    Dog.prototype.bork = function () {
        console.log(this.animalName + " says " + this.dogSound);
    };
    return Dog;
}(Animal));
var mrPants = new Cat("Mr.Pants");
var mrDoooog = new Dog("Beetholven");
mrPants.eat();
mrPants.meow();
mrDoooog.eat();
mrDoooog.bork();
