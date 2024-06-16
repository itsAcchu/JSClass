// class based
// class user {
//     constructor(email,password){
//         this.email = email,
//         this.password = password
//     }
//     get password(){
//         return this._password.toUpperCase()
//     }
//     set password(value){
//         this._password = value
//     }
// }
// let x = new user('a@mail.com','abc123')
// console.log(x.password);

// function based
// function userOne(email,password){
//     this._email = email
//     this._password = password

//     Object.defineProperty(this,'email',{
//         get: function(){
//             return this._email.toUpperCase()
//         },
//         set: function(value){
//             this._email = value
//         }
//     })
// }
// const y = new userOne('re@mail.com','adsf52')
// console.log(y.email);

//Object based
// const userTwo = {
//     _email: 'alp@gmail.com',    // _ its defines a private proparty
//     _password:'alopk145',

//     get email(){
//         return this._email.toUpperCase()
//     },
//     set password(value){
//         this._email = value
//     }
// }
// const z = Object.create(userTwo)
// console.log(userTwo.email);


