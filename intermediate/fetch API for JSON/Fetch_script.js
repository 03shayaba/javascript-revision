document.getElementById("btn").addEventListener("click", makerequest);
// function makerequest(){
//    console.log("btn clicked")
//    let promise = fetch("data.json")
//    console.log(promise)
//    let data = promise.then((res)=>{
//      console.log("Response object:", res);
//     return res.json();   // 👈 convert response to text (or res.json() for JSON file)

//    })
//   data.then((newdata) =>{
//     console.log(newdata)
//   })
// }

function makerequest(){
    console.log("Button Clicked")
    fetch('data.json').then((res) =>{
        return res.json();
    }).then((data)=>{
        console.log(data)
     document.writeln(JSON.stringify(data[0].title)); 
    })
}

// error handling

// function makerequest(){
//     console.log("Button Clicked")
//     fetch('data1.json').then((res) =>{
//         console.log(res);
//         if(!res.ok){
//            throw Error(res.statusText)
//         }
//         console.log(res);
//         return res.json();
//     }).then((data)=>{
//         console.log(data)
//     }).catch((error)=>{
//         console.log(error)
//     })
// }

// showing data in browser

// function makerequest() {
//   console.log("Button Clicked");
//   fetch("data.json")
//     .then((res) => {
//       console.log(res);
//       if (!res.ok) {
//         throw Error(res.statusText);
//       }
//       console.log("response" ,res);
//       let dt = res.json();
//       console.log(dt)
//       return dt;
//     })
//     .then((data) => {
//       console.log("data ", data);
//       document.getElementById("divdata").innerText = JSON.stringify(data,2 , 2);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }

// fetching single data from dummy json url

// function makerequest() {
//   console.log("Button Clicked");
//   fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then((res) => {
//       console.log(res);
//       if (!res.ok) {
//         throw Error(res.statusText);
//       }
//       console.log("response" ,res);
//       let dt = res.json();
//     //   console.log(dt)
//       return dt;
//     })
//     .then((data) => {
//       console.log("data ", data);
//       console.log("data-id ", data.id);
//       console.log("data-title ", data.title);
//       console.log("data-userID ", data.userId);
//     document.getElementById("Id").innerText = data.id;
//     document.getElementById("title").innerText = data.title;
//     document.getElementById("userID").innerText = data.body;

//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }

// // multiple data .then method
// function makerequest() {
//   console.log("Button Clicked");
//   fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((res) => {
//       console.log(res);
//       if (!res.ok) {
//         throw Error(res.statusText);
//       }
//       console.log("response", res);
//       let dt = res.json();
//       //   console.log(dt)
//       return dt;
//     })
//     .then((data) => {
//       console.log("data ", data);
//       let output = document.getElementById("allpost");
//       data.forEach((ele) => {
//         output.innerHTML += `
//         <div>ID : ${ele.id}</div>
//          <div>Title:${ele.title}</div>
//           <div>Body: ${ele.body}</div>
//         `
//       });
//     }).catch((error) => {
//       console.log(error);
//     });
// }

// assyn and await

// async function makerequest() {
//   console.log("btn clicked");
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   console.log(res);
//   let data = await res.text();
//   console.log(data);
// }

// error handling and data showing single json 

// async function makerequest() {
//   try {
//     console.log("btn clicked");
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//      if (!res.ok) {
//         throw Error(res.statusText);
//       }
// //       console.log(res);
//     console.log(res);
//     let data = await res.json();
//     console.log(data);
//     console.log("ID :" ,data.id);
//     console.log("Title :",data.title);
//     console.log("body:",data.body);
//     console.log("userId:",data.userId);
// document.getElementById("Id").innerText = data.id;
//     document.getElementById("title").innerText = data.title;
//     document.getElementById("userID").innerText = data.body;

//   } catch (error) {
//     console.log(error)
//   }
// }

// showing data in browser with multiple

// async function makerequest() {
//   try {
//     console.log("btn clicked");
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//      if (!res.ok) {
//         throw Error(res.statusText);
//       }

//     console.log(res);
//     let data = await res.json();
//    let output = document.getElementById("allpost");
//       data.forEach((ele) => {
//         output.innerHTML += `
//         <div>ID : ${ele.id}</div>
//          <div>Title:${ele.title}</div>
//           <div>Body: ${ele.body}</div>
//         `
//       });
//     console.log(data);
//   } catch (error) {
//     console.log(error)
//   }
// }
