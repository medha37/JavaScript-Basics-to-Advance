let promiseOne = new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log(("Async Task completed"));
        resolve();
    }, 1000);
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

// Output-
// Async Task completed
// Promise consumed


const promiseTwo = new Promise(function(resolve, reject){
   setTimeout(() => {
     console.log(("async task 2"));
     resolve();
   }, 1000) 
}).then(function(){
    console.log("async 2 resolved");
})

// Output-
// async task 2
// async 2 resolved

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve({userName: 'medha', email: "mshreyashi@mail.com"})
    }, 1000)
}).then(function(user){
    console.log(user);
})

// Output
// { userName: 'medha', email: 'mshreyashi@mail.com' }

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({userName: "shreyashi", email:"m37@mail.com"})
        } else {
            reject('ERROR: Something went wrong');
        }
    }, 1000)
})

// If we want to fetch userName from the user data then this isn't the right way 
// It will throw this error
// This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). The promise rejected with the reason "ERROR: Something went wrong".] {
//  code: 'ERR_UNHANDLED_REJECTION'
// }
// const username = promiseFour.then(function(user){
//     console.log(user);
//     return user.userName;
// })

//Right way to do it

promiseFour.then(function(user){
    console.log(user);
    return user.userName;
}).then(function(userName){
    console.log(userName);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved and rejected")); // this block will be called always

//Output-
// ERROR: Something went wrong (When let error = true)
// { userName: 'shreyashi', email: 'm37@mail.com' }
// shreyashi (when let error = false)
// The promise is either resolved and rejected

const promiseFive = new Promise(function (resolve, reject){
     setTimeout(() => {
        let error = true;
        if(!error){
            resolve({userName: "javascript", password: '12345'})
        } else {
            reject("ERROR: JS went wrong");
        }
     }, 1000);
});

async function consumePromiseFive() {
    try {
        const response = await promiseFive;
         console.log(response);
    } catch (error) {
        console.log(error);
    }   
}
consumePromiseFive();

// Output-
// ERROR: JS went wrong (error = true)
// { userName: 'javascript', password: '12345' } (error = false)

//using async await syntax
// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("Error:", error);
//     }
    
// }
// getAllUsers();

//using .then syntax
fetch('https://jsonplaceholder.typicode.com/users')
.then(function(respnse) {
    return respnse.json();
})
.then(function(data) {
    console.log(data);
})
.catch((err) => console.log(err));
