function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        return title + ' by ' + author + ', ' + pages + ', ' + read
    }
}

const hobbit = new Book('The Hobbit', 'J.R.R Tolkien', '280 pages', 'have read.') 
console.log(hobbit.info())

console.log(hobbit.constructor)  // The new instance's prototype (hobbit) is assigned the prototype from the Book() constructor. hobbit is basically inheriting the prototype from the Book() constructor.
            



// In JavaScript you can create a function and add properties and methods on to that function's prototype property, and all instances of the function will inherit the function's properties and methods.

function Plant() {
    this.country = 'Mexico'
    this.isOrganic = true
}

Plant.prototype.showNameAndColor = function() {  // The showNameAndColor function is added to the Plant prototype property
    console.log("I am a " + this.name + " and my color is " + this.color);
}

Plant.prototype.amIOrganic = function() {  //The amIOrganic function is added to the Plant prototype property
    if (this.isOrganic)
    console.log("I am organic");
}

function Fruit (fruitName, fruitColor) { // A new constructor (Fruit) is made
    this.name = fruitName;
    this.color = fruitColor;
}

Fruit.prototype = new Plant () // The Fruit() prototype is set to equal the Plant() constructor. Thus, Fruit() inherits all of Plant.prototype methods and properties.

let aBanana = new Fruit("Banana", "Yellow")  // Creates a new object (aBanana), with the Fruit() constructor.

console.log(aBanana.name) // aBanana uses the name property from the aBanana object prototype, which is Fruit.prototype

console.log(aBanana.showNameAndColor())  // The aBanana object inherits all the properties and methods from both the plant and fruit functions

// Even though the showNameAndColor method was inherited by the aBanana object, even though it was defined all the way up on the prototype chain
// Any object that used the Fruit() constructor will inherit all of the Fruit.prototype properties and methods, in addition to inheriting all the properties and methods from Fruit's() prototype, which is the Plant.prototype.

// This is a clear example of how inheritance is implemented in JavaScript and the crucial role the prototype chain has in the process.


// We can exclude inherited properties using the obj.hasOwnProperty() method, demonstrated below.

let animal = {
    eats: true
};

let rabbit = {
    jumps: true,
    __proto__:animal
};

for (let prop in rabbit) {
    let isOwn = rabbit.hasOwnProperty(prop);

    if (isOwn) {
        alert(`Our: ${prop}`)
    } else {
        alert(`Inherited: ${prop}`)
    }
}


// if using constructors to make an object, it is best to define functions on the prototype of that object instead of directly in the constructor, meaning that a single instance will be shared between all Student objects.

function Student(name, grade) {
    this.name = name;
    this.grade = grade;
}

Student.prototype.sayName = function() {
    console.log(this.name)
}

Student.prototype.goToProm = function() {
    console.log("go to prom?")
}


// The best way of setting the prototype of an object is to use "Object.create()". Which very simply returns a new object with the specified prototype and any additional properties one might want to add.

function Student() {
}

Student.prototype.sayName = function() {
    console.log(this.name)
}

function YearEight(name) {
    this.name = name
    this.year = 8
}

YearEight.prototype = Object.create(Student.prototype)

const newYear = new YearEight("harry"); 
newYear.sayName()  // newYear was assigned to be a constructor of YearEight function. Therefore, newYear inherited the prototype of YearEight, and YearEight was set the prototype of the Student function 
console.log(newYear.year)  // Because newYear inherited prototype from YearEight and Student functions. newYear.year will log 8 even though it was not defined in the newYear = new YearEight constructor

// if we wanted to edit something later on we would do so like this 

YearEight.prototype.sayNameAndYear = function() {
    console.log(this.name + " and i am in year " + this.year)
}

newYear.sayNameAndYear() // this would log the string "harry and i am in year 8" to the console.