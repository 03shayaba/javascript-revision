// let promise1 = new Promise((resolve , reject) =>{
//     let success = true;
//     if(success){
//         resolve("promise Resolved");
//     }else{
//         reject("promise Rejected");
//     }
// });

// promise1.then((message) =>{
//     console.log("the ka message is" + message)
// }).catch((error)=>{
//     console.log("error" + error);
// })


// promise1.then((message) =>{
//     console.log("the ka  first message" + message)
// }).then((message) =>{
//     console.log("the ka message  second fullfilled " )
// }).then((message) =>{
//     console.log("the ka message first fullfilled" )
// }).catch((error)=>{
//     console.log("error" + error);
// // })

// promise1.then((message) =>{
//     console.log("the ka message is" + message)
//     return 20;
// }).then((message) =>{
//     console.log("the ka message is" + message)
//     return 30;
// }).then((message) =>{
//     console.log("the ka message is" + message)
//     return 23
// }).then((message) =>{
//     console.log("the ka message is" + message)
//     return 45;
// }).catch((error)=>{
//     console.log("error" + error);
// })


// --------------------------------------

let promise1 = new Promise((resolve , reject) => {
    setTimeout(resolve , 1000 , "first");
})
let promise2 = new Promise((resolve , reject) => {
    setTimeout(resolve , 3000 , "first");
})
let promise3 = new Promise((resolve , reject) => {
    setTimeout(resolve , 4000 , "first");
})

Promise.all([promise1 , promise2 , promise3])