// Arrow Functions

// 1. Syntax
const sayHello = () => {
    console.log("heii");
}

const add = (a, b) => a + b;
console.log((add(3,8)));

// 2. Arrguments Keyword

function regFunction(){
    console.log(arguments);
}

regFunction(1, 3, 5, 4, 6);

const arrowFn = (...num) => {
    // (... spread operator)
    console.log(num);
    //console.log(arguments) 
}
arrowFn(2, 5, 7, 8); // arrguments is not defined error

// 3. Hoisting

greetings();

function greetings() {
    console.log("hello there!!");
}

// hoisting is not done in case of arrow function

//ReferenceError: Cannot access 'greetingsFromArrow' before initialization
//greetingsFromArrow();

const greetingsFromArrow = () => {
    console.log("hello from arrow");
}

greetingsFromArrow();

// 4. This keyword
 const obj = {
    name: "medha",
    age: 26,
    work: function (){
        console.log("cooking and dancing " + this.age);
     }
 }

console.log(obj.work());
// can't use this keyword in arrow function
const objArrow = {
    name : "arrow",
    age: 44,
    work: () => {
        console.log("playing " + this.age); // undefined
    }
}
console.log(objArrow.work());