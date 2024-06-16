// sungleton
// object.create 

//object literals
const sym = Symbol("key1")
const user = {
    name: "Acchu",
    [sym]: "mykey",
    age: 24,
    email: "acchu@gmail.co",
    num: 9535455,
    "fullName": "AcchuReddy",
}    
// console.log(user.name);
// console.log(user["age"]);
// console.log(user["fullName"]);
// console.log(user[sym]);

// user.email = "reddy@mail.com"
// Object.freeze(user)
// user.email = "loki@mail.com"
console.log(user);

// user.greeting = function(){
//     console.log("Hello World");
// }
// console.log(user.greeting());

// user.greetingtwo = function(){
//     console.log(`hello acchu,${this.email}`);
// }
// console.log(user.greetingtwo());

//-------------------------------------------------------------------//
// sungleton as a constuctor

// const tinderUser = new Object ()  // singleton object 
const tinderUser = {}               // non singleton object
tinderUser.id = "258258ads"
tinderUser.name = "acchu"
tinderUser.login = "false"
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));    //access the keys in objects 
// console.log(Object.values(tinderUser));  // access the values
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('id'));

const imuser = {
    email: "goglo@mail.com",
    fullname:{
        userfullname:{
            firstname:"Acchu",
            lastname:"reddy"
        }
    }
}
// console.log(imuser.fullname.userfullname.firstname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
const obj3 = {6:"c", 7:"d"}

// const obj4 = Object.assign({},obj1,obj2,obj3) // {}-target onj123--scorce
// const obj4 = {...obj1,...obj2,...obj3} // spread
// console.log(obj4);

const users= {
    coursename: "javaScript",
    fees: 2500,
    sir: "AcchuReddy"
}
const {sir: x} = users
// console.log(x);








