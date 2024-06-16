// forin

const acchu = {
    java: "opps with java",
    cpp: "c++",
    rb: "ruby",
}
for (const key in acchu) {
//    console.log(`${key} :- ${acchu[key]}`);
}

let arr = ['acc', 'ree', 'vcc', 'occ']
for (const key in arr) {
    // console.log(arr[key]);
}

const map = new Map()
map.set('IN', 'india')
map.set('ka', 'karnataka')
map.set('ga', 'goa')
for (const key in map) {   // forin loop not posible for maps
    // console.log(key);
}

//----------------------------------------------------map------------------------------------------//


let num =[1,2,3,4,5,6,7,8,9,10]  // add 10 on array..?
// let nums = num.map( (ar) => ar+10 )
// console.log(nums);

let myNum = num.map((x)=>x*10).map((x)=>x+1).filter((x)=>x>50) //chain map
// console.log(myNum);



