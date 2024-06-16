// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const discriptor = Object.getOwnPropertyDescriptor(Math,'PI')
// console.log(discriptor);

const user = {
    name:'Acchu',
    price:250,
    isthere:true,
    order(){
        console.log('order cancelled');
    }
}
// console.log(Object.getOwnPropertyDescriptor(user,'name'));

Object.defineProperty(user,'name',{
    // writable:false,
    enumerable:false,
    // configurable:false
})
// console.log(Object.getOwnPropertyDescriptor(user,'name'));

for (const [key,value] of Object.entries(user)) {   // for iterate using entries()
    if (typeof value !== 'function') {
        console.log(`${key}:${value}`);
    }
}

 
