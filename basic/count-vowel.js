function Count_vowels(str){
    let count = 0;
    const vowels = "aeiouAEIOU"
    for(let char of str){
        if(vowels.includes(char)){
            count++;
        }
    }
    return count;
}
console.log(Count_vowels("Hello World"));