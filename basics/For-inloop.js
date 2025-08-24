// for in loop is used to iterate the object efficiently

let car = {
         brand: "OD",
         model: "Q7",
         color: "Black",
      }
      for (detail in car) {
        console.log( detail + "->" + car[detail]) // brand->OD   model->Q7   color->Black
        // console.log(detail.brand);   // undefined 3 times
      }


// // for Array


// let arr = [10, 20, 30];
// for (let index in arr) {
//     console.log(index);     // "0", "1", "2" the output will be in type of  strings not numbers
//       console.log(typeof(index)); 
// }

// let arr = [10, 20, 30];
// for (let index in arr) {
//     console.log((arr[index])); // 10 20 30 (numbers)
//     console.log(typeof(arr[index]));  //number
// }


//  let ans = ("JavaScript", "Python", "HTML", "CSS");
//  console.log(ans);
//  console.log(typeof(ans));


// function* test() {
//     console.log("I'm before yield expression");
//     yield 20;
//      console.log("I'm after yield expression");
// }
// const genObj = test();
// console.log(genObj.next());
// console.log(genObj.next());


// delete operator
// const myBook = {
//          title: "Perl",
//          author: "Mohtashim",
//          pages: 355,
//          registration:{
//           username:"abc",
//           admin:"true"
//          }
//       }
 

//       console.log(myBook.registration.admin);
//       delete myBook["registration"];
//       console.log(myBook)


// // nullish operator
// let x = 8 ;
// let y = 10 ;
// let z = x ?? y;
// console.log(z);


 // // safe assignment operator
// var user = null;
// user ??= "Guest";
// console.log(user);


// let licence = true;
// if(licence=== true){
//     console.log("you are eligible for drive")
// }
// else{
//     console.log("not eligible for drive");
// }


for(let i = 1;i<=6;i++){
   
    if(i ===3){
        continue;
    }
     console.log(i);
}
