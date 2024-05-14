// currying is nothing in javascript but combination of more than one closure
// how can achieve sum(5)(6) = 11

function sum(a){
    function inner (b) {
        return a+b;
    }
    return inner;
}

function add(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}
console.log('add called' , add(3)(6)());
// currying is useful in that scenario when you have all arguments available to run the function 
// in case of any missing argument it will not run 
//both the functions sum and sum1 are same but these syntax is called function currying
const sum1 = (a) => (b) => a+b;

const product = a => b => c => a*b*c;

// real world example of currying 

let sentEmail = (to) => (subject) => (body) => `Sending email to ${to} with subject ${subject}: ${body}`;

let step1 = sentEmail("mshreyashi37@gmail.com");
let step2 = step1("New order confirmation");
console.log(step2("Hey!! Medha, there is something for you (: "));

//const add = sum(5);
//const ans = add(6);
// we can also write like this

const ans = sum(5)(8);
const ans2 = product(4)(9)(8);
console.log(ans);
console.log(ans2);