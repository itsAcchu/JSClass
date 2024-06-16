// Arrays

let arr = [5,6,8,9,7,2,1,3]
let arr2 = new Array(5,4,6,9,8,2)

let heros = ['acchu','reddy','hello']
let villans = ['loki','deek','nike']
// console.log(arr2[2]);

// ------------------array methods ------------------------------

// arr.push(0,3)
// arr.pop()
// arr.unshift(2,1)   // insert 1st 
// arr.shift()        // remove at 1st
// console.log(arr.includes(1));  // boolean type
// console.log(arr.indexOf(9));
// console.log(arr.join());    //string formate 

// console.log("A",arr);
// console.log(arr.slice(1,3));   //its didnot considor endvalue
// console.log(arr2.splice(1,3));

// arr.push(arr2)
// console.log(arr);
// console.log(arr[8]);  // find the index of array
// let hell = heros.concat(villans)  // marge 2 arrys or elements 
// console.log(hell);
// let hell = [...heros, ...villans]    // spread its work like concat
// console.log(hell);

let all = [1,2,3,[4,5,6],7,[7,8,9,[0,1]]]
// console.log(all.flat(Infinity));        // flat works like concat in to one array

// console.log(Array.isArray('acchu')); // check weather its array or not in boolean 
// console.log(Array.from('acchu')); //convert to array
// console.log(Array.from({name:'acchu'})); //keys object

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));    // covert in to setof array








