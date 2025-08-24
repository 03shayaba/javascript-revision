function palindrome(a) {
  
  let len = a.length - 1;
  let i = 0;
  while (i < len) {
    if (a[i] === a[len]) {
      return true;
    } 
    i++;
    len--;
  }
  return false;
}

console.log(palindrome("madam"));
console.log(palindrome("racecar"));   // true
console.log(palindrome("hello"));