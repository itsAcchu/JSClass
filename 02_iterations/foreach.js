// foreach

const arr = ['acchu','reddy','loki']
arr.forEach( function(val){
    // console.log(val);
})
arr.forEach((val)=>{   // using arrow
    // console.log(val);
})
function print(val){
    // console.log(val);
}
arr.forEach(print)
arr.forEach((val,index,array)=>{
    // console.log(val,index,array);
})


const obj = [
    {
        lang:"java",
        fname:"java"
    },
    {
        lang:"python",
        fname:"py"
    },
    {
        lang:"javascript",
        fname:"js"
    }
]
obj.forEach((val)=>{
    // console.log(val.lang);
})


const myNums = [1,2,3,4,5,6]
const newNum = []
myNums.forEach( (num) => {
    if (num > 2) {
        newNum.push(num)
    }
} )
// console.log(newNum);


//-------------------filter----------------------------//

let myNum = [1,2,3,4,5,6]
// let newNum = myNum.filter((num) => num > 2)
// console.log(newNum);

// let newNum = myNum.filter ( (num) => (num > 2) )
// console.log(newNum);

// let newNum = myNum.filter( (num) =>{
//     return num > 2
// } )
// console.log(newNum);

const books = [
    {
        title:'book1',genre:'fiction',publish:'1987',edition:'2000'
    },
    {
        title:'book2',genre:'nonfiction',publish:'1977',edition:'2002'
    },
    {
        title:'book3',genre:'history',publish:'1988',edition:'2004'
    },
    {
        title:'book4',genre:'science',publish:'1999',edition:'2006'
    },
    {
        title:'book5',genre:'medical',publish:'1982',edition:'2008'
    }
]
let bk = books.filter( (book) => book.genre === "history" )
bk= books.filter((book) => {return book.edition >= 1999 && book.genre === "history"})
console.log(bk);





