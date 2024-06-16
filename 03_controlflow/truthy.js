const userMail = "false"
if (userMail) {
    console.log("got");
}else{
    console.log("dont have");
}

//falsy values
// false, 0, -0, bigInt 0n, "", null, undefined, NaN

//truthy Values
// "0", 'false', " ", [], {}, function(){}

const user = []
if (user.length === 0) {   // check for array is empty or not
    console.log("empty");
}

const obj ={}
if (Object.keys(obj).length === 0) {   // check for object is empty or not
    console.log("Obj Empty");
}

/*
comparesion
false==0 => true
false=='' => true
0 =='' => true
*/

// Nullish Coalescing Operator(??): Null undefined

let val1;
val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10
// val1 = null ?? 10 ?? 20
console.log(val1);

// Terniary operator
// condition ? true : false

let price = 100
price <= 80 ? console.log("YES") : console.log("NO");

