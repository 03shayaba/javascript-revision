function fibonacci(n){
    let term1 =0;
    let term2 = 1;
    let res =0;
     if (n === 1) return term1;
    if (n === 2) return term2;

    console.log(term1); // print first term
    console.log(term2);
    for(let i=1; i<=n-2;i++){
       
        res= term1+term2;
        console.log(res);
        term1 = term2 
        term2 = res;
    }
   

}
fibonacci(5);