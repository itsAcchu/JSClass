let a = 10 

if (true) {                 // {---these is scope
    const b = 10
    let a = 20 
    // console.log("inner:",a);
}
// console.log(a);

function one() {
    let username = "Acchu"              // parent cannot access the child function

    function two() {                    // child can access the parent function
        let website = "instagram"
        //console.log(username);
    }
    two()
}
one()

if (true) {
    const name = "acchu"
    if (name === "acchu") {
        const site = "insta"
        //console.log(name+site);
    }
    
}

//---------------------------------------------------------------------------//

console.log(addone(5));
function addone(num) {           // normal function
    return num + 1
}

const tow = function(num) {     // expression function
    return num + 2
}
console.log(tow(3));            // hosting. its hold in variable cant exicute before






