// Do Async task
// Database calls, cryptography, network

// const promiseOne = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         console.log('asyc task complet');
//         resolve()    // these resolve connect to 'than'
//     },2000)
// })

// promiseOne.then(function() {            // than connect to resolve
//     console.log('promise complet');
// })


// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('2nd task');
//         resolve()
//     },1000)
// }).then(function(){
//     console.log('2nd then task');
// })


// const promiseTwo = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({userName:'Acchu',userId:'77720'})
//     },1000)
// }).then(function(user){
//     console.log(user);
// })


// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = true
//         if(!error){
//             resolve({userName:'Acchu',userId:'5252'})
//         }else{
//             reject('something Went wrong')
//         }
//     },1000)
// }).then((user)=>{
//     console.log(user);
//     return user.userName
// }).then((userName)=>{          // thenable or chainable 
//     console.log(userName);
// }).catch((error)=>{
//     console.log(error);
// }).finally(()=> console.log('promises was solved either resolve or reject'))


// const promiseFour = new Promise(function(resolve,reject){
//    setTimeout(()=>{
//     let error = true
//     if(!error){
//         resolve({userName:'Alpha',userId:'456456'})
//     }else{
//         reject('rejected')
//     }
//    },1000)
// })

// async function consumeFour(){       // async wont handle error directly, its works only if function have no errors. solution try on catch()
//     const response = await promiseFour
//     console.log(response);
// }

// async function consumeFour(){           // Solution for asyc trycatch method
//     try {
//         const response = await promiseFour
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }
// consumeFour()


//-------------------------------------Fetch------------------
fetch('https://randomuser.me/api/')     //using then and catch
.then((response)=> response.json())
.then((data)=> console.log(data))
.catch((error)=> console.log(error))


async function user(){          // using tryCatch
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log('E:',error);
    }
}
user()





