
function myname() {
    console.log("a");
    console.log("c");
    console.log("c");
    console.log("h");
    console.log("u");
}
// myname()

function addNum(num1,num2) { //---------(num1,num2) parameters
    console.log(num1+num2);
}
// addNum(2,2)//---------(2,2) arguments

function numberone(numm1,numm2) {
    let result = numm1 + numm2;
    return result;
}
const result = numberone(3,5)
// console.log("Result is:",result);

function names(username = "acc") {
    if (!username) {         // username===undefined or !username
        console.log("please enter name");
        return
    }
    return `${username} just logged`
}
// console.log(names("acchu"));
// console.log(names("aaacchuu"));  //undefined

//----------------------------------------------------------------//

function calculate(...num) {  // ... is rest operator
    return num
}
// console.log(calculate(200,500,400,600));

let object={
    username: "acchu",
    prices: 500
}

function cart(anyobject) {
    console.log(`userName is ${anyobject.username} and the price is ${anyobject.price}`);
   
}
// cart(object)
// cart({username:"sam",price: 596})

let myarray = [1,2,3,4,5,6]
function arr(newarr) {
    return newarr[0]
}
// console.log(arr(myarray));
console.log(arr([50,40,52,60]));

