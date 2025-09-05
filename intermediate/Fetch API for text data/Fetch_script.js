document.getElementById("btn").addEventListener("click", makerequest);
// function makerequest(){
//    console.log("btn clicked")
//    let promise = fetch("data.txt")
//    console.log(promise)
//    let data = promise.then((res)=>{
//      console.log("Response object:", res);
//     return res.text();   // 👈 convert response to text (or res.json() for JSON file)

//    })
//   data.then((newdata) =>{
//     console.log(newdata)
//   })
// }

// function makerequest(){
//     console.log("Button Clicked")
//     fetch('data.txt').then((res) =>{
//         return res.text();
//     }).then((data)=>{
//         console.log(data)
//     })
// }

// error handling

// function makerequest(){
//     console.log("Button Clicked")
//     fetch('data1.txt').then((res) =>{
//         console.log(res);
//         if(!res.ok){
//            throw Error(res.statusText)
//         }
//         console.log(res);
//         return res.text();
//     }).then((data)=>{
//         console.log(data)
//     }).catch((error)=>{
//         console.log(error)
//     })
// }

// showing data in browser

// function makerequest() {
//   console.log("Button Clicked");
//   fetch("data.txt")
//     .then((res) => {
//       console.log(res);
//       if (!res.ok) {
//         throw Error(res.statusText);
//       }
//       console.log(res);
//       return res.text();
//     })
//     .then((data) => {
//       console.log(data);
//       document.getElementById("divdata").innerText = data;
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }

// assyn and await

// async function makerequest() {
//   console.log("btn clicked");
//   const res = await fetch("data.txt");
//   console.log(res);
//   let data = await res.text();
//   console.log(data);
// }

// error handlin

// async function makerequest() {
//   try {
//     console.log("btn clicked");
//     const res = await fetch("data1.txt");
//      if (!res.ok) {
//         throw Error(res.statusText);
//       }
// //       console.log(res);
//     console.log(res);
//     let data = await res.text();
//     console.log(data);
//   } catch (error) {
//     console.log(error)
//   }
// }



// showing data in browser

// async function makerequest() {
//   try {
//     console.log("btn clicked");
//     const res = await fetch("data.txt");
//      if (!res.ok) {
//         throw Error(res.statusText);
//       }

//     console.log(res);
//     let data = await res.text();
//     document.getElementById("divdata").innerText = data ;
//     console.log(data);
//   } catch (error) {
//     console.log(error)
//   }
// }