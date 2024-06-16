// Global scope ke polution se problum occours sometimes, resolving that polution of global scope declaration so we can use IIFE.

(function chai (){
    // named IIFE
    console.log("Acchu");
})();

( (name) => {
    // simple IIFE
    console.log(`reddy ${name}`);
})(`hello`);
