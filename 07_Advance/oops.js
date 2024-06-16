// # Javascript and Classes
// -javascript is prototype based language.

// ## Object 
// -collection of properties and methods
// - exp: toLowerCase

// ## why use oop

// ## parts of oop
// Object literal

// -constructor function
// -prototypes
// -Classes
// -Instances (new,this)

// ## 4 pillars
// -Abstraction
// -Encapsulation
// -Inheritance
// -Polymorphism

//-------------------------------------------------
// object Literals
// let user = {
//     userName:'Acchu',
//     logged:18,
//     pass:'hyueerd',

//     getUserDetails: function(){
//         console.log(`userName: ${this.userName}`);
//         console.log(this);
//     }
// }
// console.log(user.userName);
//console.log(user.getUserDetails('reddy'));

// consteuctor function
function user(userName,userId,logIn) {
    this.userName = userName
    this.userId = userId
    this.logIn = logIn
    this.greeating = function(){
        console.log(`WelCome: ${this.userId}`);
    }
    return this
}
const userOut = new user('Acchu',258,true)      // new = create new object
const userOuter = new user('reddy',300,false)
console.log(userOuter);


