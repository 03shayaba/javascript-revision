function factorial(n){
   let res =1;
   let i =1;
   while(i<=n){
    res *= i;
    i++;
   }
    console.log("factorial of n " + res);
}

factorial(3);