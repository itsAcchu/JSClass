//Syntax
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = "feb"// or numbers 7
switch (month) {
    case "jan":
        console.log("jan");
        break;
    case "feb":
        console.log("feb");
        break;          // break exicute like waterfal
    case "mar":
        console.log("march");
        break;
    case "apr":
        console.log("april");
        break;
    default: //'break' if conditon was match its check all remaining condition except default 
        console.log("nan of the abo");
        break;
}




