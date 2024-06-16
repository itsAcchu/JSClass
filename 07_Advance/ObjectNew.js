// function add (num){
//     return num*5
// }
// add.power = 5
// console.log(add('5'));
// console.log(add.prototype);
// console.log(add.power);

// creating a prototype 
function user(userName,price){
    this.userName = userName
    this.price = price
}
user.prototype.increment = function(){
    this.price++
}
user.prototype.printMe = function(){
    console.log(`the price: ${this.price}`);
}
let chai = new user('Acchu',30)
let tea = new user('reddy',50)
tea.printMe()

/*
# what happens behind the scenes when the new keywors is used:

A new object is created: the new keyword initiates the creation of a new javaScript object.

A prototype is linked: the newly created object gets linked to the prototype property of the constructor function.
this means that it has acces to properies and methodes defined on the constructor prototype.

the constructor is called: the constructor function is called with the specified arguments and this is bound to the newly
created object. if no explicit return value is specified from the constructor, javaScript assumes this,
the newly created object, to br the instended return value.

The new object is returned: After the constructor function has been called, if it doesnot return a non-primitive value
(object,array,function,etc.),the newly creatde object is returned.
*/

