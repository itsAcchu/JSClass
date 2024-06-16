// ES6

class user{
    constructor(userName,email,passWord){
        this.userName = userName
        this.email = email
        this.passWord = passWord
    }
    encryptPassword(){
        return `${this.passWord}abc`
    }
    capName(){
        return `${this.userName.toUpperCase()}`
    }
}
let x = new user('Acchu','hello@mail.com','helloworld')
console.log(x.encryptPassword());
console.log(x.capName());

//  behind the sean 

// function userOne (userName,email,passWord){
//     this.userName = userName
//     this.email = email
//     this.passWord = passWord
// }
// userOne.prototype.encryptPassword = function(){
//     return `${this.passWord}abc`
// }
// userOne.prototype.capName = function(){
//     return `${this.userName.toUpperCase()}`
// }
// let x = new userOne('Acchureddy','hello@mail.com','helloworld')
// console.log(x.encryptPassword());
// console.log(x.capName());
