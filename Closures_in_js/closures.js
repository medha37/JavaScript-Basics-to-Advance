function main(){
    const name = "medha";
     function sayName(){
        console.log(name);
     }
     return sayName;
}
const fn = main();
fn();

// counter using closures

function counter(){
   let count = 1;
   function displayCounter(){
      console.log(count++);
   }
   return displayCounter;
}

let count1 = counter();
count1();
count1();
count1();