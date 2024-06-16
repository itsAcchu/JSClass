// A closure is the combination of function bundled togeather
// A closure gives access to outer functions scope from inner function 

//basic for lexical scoping
// function user(){
//     let name = 'Acchu'
//     function displayName(){
//         console.log(name);
//     }
//     displayName()
// }
// user()

// function outer(){
//     let userName = 'Acchu Reddy'
     // console.log(x);  // parent cannot access the child.
//     function inner(){
//         let x = 'alpha'
//         console.log('inner',userName);
//     }
//     function innerTwo(){
//         console.log('innerTwo',userName);
        // console.log(x); inner child can access only parent values.. child & child cannot be access 
//     }
//     inner()
//     innerTwo()
// }
// outer()
// console.log('too outer',userName); // cannot access

//------------------closure------------

// function outer(){
//     let name = 'acchu'
//     function inner(){
//         console.log(name);
//     }
//     return inner   // its returns the entair laxical scope
// }
// const x = outer()
// x()

