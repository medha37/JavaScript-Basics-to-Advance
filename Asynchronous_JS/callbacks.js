// Callback function is a function as a parameter in another function 

 function fetchData(cb){
    setTimeout(() => {
        let data = {eCode: 1001, eName: "medha"};
        cb(data);
    }, 2000);
 }

//  function displayFetchData(){
//     console.log(data);
//     console.log("Ends here");
//  }

 console.log("start here");
 // callback function
 /*
    start here
    { eCode: 1001, eName: 'medha' }
    Ends here
 */ 
 fetchData(function (data){
    console.log(data);
    console.log("Ends here");
 });
 //displayFetchData();

 /* start here
    undefined
    Ends here */

// high order function
// a function which takes another function as an argument is called high order function
function add(a, b, cb) {
   let result = a+b;
   cb(result);
   return ()=> {console.log(result);}
}  

// function showRes(result){
//    console.log(result);
// }

let showResult = add(2, 4, ()=> {});
showResult();
add(4000, 500, ((val) => { console.log(val) }))
