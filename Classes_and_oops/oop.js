const user = {
    userName: "Medha",
    loginCount: 4,
    signedIn: true,
    getUserDetails: function(){
        //console.log('Got user details from database');
        // this will show the ReferenceError: userName is not defined
        //console.log(`Username: ${userName}`);
        
        // by the help of this keyword we can get properties and methods of current context
        // correct way to write 
        //console.log(`Username: ${this.userName}`); 
        console.log(this); // this will return whole object which is user in this context
    }
}

//console.log(user.getUserDetails());
// Constructor function
function User(userName, loginCount, isLogined){
    this.userName = userName;
    this.loginCount = loginCount;
    this.isLogined = isLogined;
    this.greetings = function (){
        return (`Welcome ${this.userName}`);
    }
    //return this;
}

//const user_1 = User("medha", 8, true);
//const user_2 = User("shreyashi", 5, false); // this will override the user_1 value thats why 
//we need new keyword forcreating new instance of every object
// ---->
const user_1 = new User("medha", 8, true);
const user_2 = new User("shreyashi", 5, false); // by using new keyword each and every time new instance will be created
console.log(user_1.constructor); // method
//console.log(user_2);