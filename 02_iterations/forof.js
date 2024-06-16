// for of
// [" ", " ", " "]
// [{ }, { }, { }]

const arr = [1,2,3,4,5,6]
for (const val of arr) {
    // console.log(val);
}

const A = "Acchu Reddy"
for (const val of A) {
    // console.log(`Each word: ${val}`);
}

// Maps

const map = new Map()
map.set('IN', 'india')
map.set('ka', 'karnataka')
map.set('ga', 'goa')
// console.log(map);
for (const [key,value] of map) {
    // console.log(key,value);
}

const games = {
    'game1': 'pubg',
    'game2': 'templerun',
    'game3': 'candycrush'
}
// for (const [key, value] of games) {  // these forof not posible for object
//     console.log(key,value);
// }
