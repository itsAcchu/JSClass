// let one = 'Acchu     '
// console.log(one.trueLength);  // trueLength is proparty. proparty() => method

// let hero = ['acchu','reddy']
// let power = {
//     thor:'hammer',
//     spyder:'sling',
//     spyderPower: function(){
//         console.log(`spyder power is: ${this.spyder}`);
//     }
// }
// Object.prototype.Acchu= function(){         //these object prototype works in outhers also
//     console.log('ACCHU is A SUPERMAN');
// }
// Array.prototype.Reddy = function(){         //these prototype works only on array
//     console.log("array power");
// }
// hero.Acchu()
// hero.Reddy()

// inheritance

// let user ={
//     name:'Acchu',
//     Id:'AR@mail.com'
// }
// let teach = {
//     tName:'lavanya'
// }
// let AssTeach ={
//     isAvail: true
// }
// console.log(Object.setPrototypeOf(teach,user));

let two = 'Acchu      '
String.prototype.trueLength = function(){
    // console.log(`${this}`);
    console.log(`true length is ${this.trim().length}`);
}
two.trueLength();
'reddyyyy'.trueLength()
