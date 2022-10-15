// basic syntax to create a class
class MyClass {

    constructor(name) {  // the constructor method is called to automatically by "new", so we can initialize the object here
        this.name = name;
    }

    sayHi() {
        console.log(this.name)
    }
};

// then use new myClass() to create a new object with all the listed methods
let myClass = new MyClass("John"); // When new MyClass is called, a new object is created and the constructor runs with the given argument and assigns it to this.name

console.log(myClass.name) // John
myClass.sayHi() // John


// What is a class and how does it work
class User {
    constructor(name) {
        this.name = name;
    } sayHello() {console.log(this.name);}
}

console.log(User === User.prototype.constructor) // true

console.log(User.prototype.sayHello) // display's code of this method

console.log(Object.getOwnPropertyNames(User.prototype)) // [constructor, sayHello()]


// class expression. Just like functions, classes can be defined inside another expression, passed around, returned, assigned etc.
let User2 = class MyClass2 {
    sayHello() {
        console.log(MyClass2)
    }
};

new User2().sayHello()
console.log(MyClass)

// classes may also include getters/setters
class User3 {

    constructor(name) {
        this.name = name;
    }

    get name() {
        return this._name
    }

    set name(value) {
        if (value.length < 4) {
            console.log("too short");
            return;
        }
        this._name = value
    }
}

let user3 = new User3("John");
console.log(user3.name)  // John

let user4 = new User3("")
console.log(user4.name)  // too short


class User4 {

    [ "say" + "Hi"]() {
        console.log("hello")
    }
};

new User4().sayHi(); // hello


class User5 {
    name = "john";

    sayHelloAgain() {
        console.log(`Hello ${this.name} !`);
    }
}

new User5().sayHelloAgain() // hello john !
console.log(User5.prototype.name) // undefined, this is because "name" was defined on the individual User5 object


// the basic class syntax looks like so ..
class MyCLassEx {

    prop = value; // property

    constructor() { // constructor

    }

    // method() {}                 // method

    // get something() {}         // getter method
    // set something() {}     // setter method

    // [symbol.iterator]() {}    // method with computed name
}

// MyClass is a function, while methods, getters and setters are written to MyClass.prototype



class Polygon {
    constructor() {
        this.name = "Poly"
    }
};

let poly1 = new Polygon();

console.log(poly1.name) // Poly


// class expressions

// unnamed
let Rectangle = class {
    constructor( height, width) {
        this.height = height,
        this.width = width
    }
};

console.log(Rectangle.name) // logs "Rectangle"

// named
Rectangle = class Rectangle2 {
    constructor(height, width) {
        this.height = height,
        this.width = width
    }
};

console.log(Rectangle.name) // logs "Rectangle2"


// prototype methods
class Square {
    constructor(height, width) {
        this.height = height,
        this.width = width
    }

    get area() {
        return this.calcArea();
    };

    calcArea() {
        return this.height * this.width
    }

};

let size = new Square(20, 100);

console.log(size.area) // logs "2000"


// The "static" keyword defines a static method or property for a class.
// static methods are used to create utility functions for an application.
// static properties are useful for caches, fixed-configuration, or any other data you don't need to be replaced across instances.

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static displayName = "point";
    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.hypot(dx, dy);
    }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);
p1.displayName // logs "undefined"
p1.distance // logs "undefined"
p2.displayName // logs "undefined"
p2.distance // logs "undefined"

console.log(Point.displayName) // logs "point"
console.log(Point.distance(p1, p2)); // logs "7.0710678118654755"



// Binding this with prototype and static methods
// When a static or prototype method is called without a value for "this", the "this" value will be undefined inside the method.

class Animal {
    speak() {
        return this;
    }

    static eat() {
        return this;
    }
}

const obj = new Animal() 
console.log(obj.speak()) // logs the Animal object
const speak = obj.speak;
console.log(speak()) // logs "undefined"

console.log(Animal.eat()) // logs the Animal class
const eat = Animal.eat;
console.log(eat()) // logs "undefined"

function Animal2() {}


// the code below re-writes the above code using traditional function based syntax in non-strict mode
Animal2.prototype.speak2 = function () {
    return this;
}

Animal2.eat2 = function () {
    return this;
}

const obj2 = new Animal2();
const speak2 = obj.speak;
console.log(speak2()); // logs global object in non strict mode

const eat2 = Animal2.eat2;
console.log(eat2()); // logs global object in non strict mode