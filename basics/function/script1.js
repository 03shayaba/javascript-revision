// what is the diffenrencd between function declaration and expression in terms of hoisting?

// abcd();  // here hoisting is possible

// function abcd(){  //fun statement

// }

// abcd();  // here hoisting is  not  possible

// let abcd =function() {  //fun expression

// }



function counter(){   //closure fun
    let count = 0;
    return function(){
        count++;
        return count;
    }
}

let cnt = counter();
console.log(cnt());
console.log(cnt());
console.log(cnt());
console.log(cnt());


