const Person = (name) => {
    const sayName = () => console.log(`My name is ${name}`);
    return {sayName}
}

const Nerd = (name) => {
    const {sayName} = Person(name);
    const doSomethingNerdy = () => console.log(`nerd stuff`);
    return {sayName, doSomethingNerdy}
}

const jeff = Nerd('Jeff');

jeff.sayName(); // "My name is Jeff"
jeff.doSomethingNerdy(); // "nerd stuff"


// Object.assign() method to copy the properties from one object to another
const target = { a: 1, b: 2};
const source = { c: 3, d: 4};

const returnedObject = Object.assign(target, source)

console.log(target) // Expected output Object { a: 1, b: 2, c: 2, d: 4}


// Delegation / Differential Inheritance using Object.create()
const proto = {
    hello () {
        return `Hello, my name is ${this.name}`;
    }
};

const greeter = (name) => Object.assign(Object.create(proto), {  // Object.create() creates a new object, using an existing object as the prototype of the newly created object
    name
});

const george = greeter('george');

const msg = george.hello();

console.log(msg);