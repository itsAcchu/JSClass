
let mynum = [1,2,3,4]
let total = mynum.reduce((acc,crr)=>(acc+crr),0)
// let total = mynum.reduce((acc,crr)=>{
//     console.log(`car:${acc} crr:${crr}`);
//     return acc+crr},0)
// console.log(total);

let cart = [
    {
        course:"java",
        price: 500
    },
    {
        course:"python",
        price: 500
    },
    {
        course:"javaScript",
        price: 1000
    },
    {
        course:"c++",
        price: 1000
    },
    {
        course:"css",
        price: 1000
    }
]
let mycart = cart.reduce((acc,crr)=>(acc+crr.price),0)
// console.log(mycart);



