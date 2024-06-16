const user = {
    username: "acchu",
    price: 999,

    welomeMessage: function(){
        console.log(`${this.username} , welcome to our website`);
        // console.log(this);
    }
}
// user.welomeMessage()
// user.username = "reddy"
// user.welomeMessage()
// console.log(this);   //(this)in browser global object that is window object

// function all(){
//     let usreName = "acchu"
//     console.log(this.username); //this works in objects not in functions
// }
// all()

// Arrow---------
//Syntax:
// () => {}
// let abc = () => {}

// const chai = () => {
//     console.log(this);
// }
// chai()

// const one = (num1,num2) => {       // expliset
//     return num1+num2
// }

// const one = (num1,num2) => num1+num2  // impliset
// const one = (num1,num2) => (num1+num2 ) 
// console.log(one(2,2)); 
// const two = () => ({username:"Acchu"}) 
// console.log(two());





