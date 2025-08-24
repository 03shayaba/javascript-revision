// function rps(user, computer) {
//   if (user === "rock" && computer === "scissor") return "user";
//   if (user === "scissor" && computer === "paper") return "user";
//   if (user === "paper" && computer === "rock") return "user";

//   return "computer";
// }

// console.log(rps("rock", "scissor"));

function abcd(){
    let a=2;
    return function(){
        console.log(a);
    };
 }

 abcd();
