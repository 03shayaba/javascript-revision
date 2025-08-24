function largest(array) 
{
  let j = array.length - 1;
  let i = 0;
   let max = array[0];
  while (i < j) 
    {
        if (array[i] < array[j]) {
        if (array[j] > max) {
            max = array[j];  // ✅ assign the actual number

        } 
        }else{
            if(array[i] > max ){
                max = array[i];
            }
            
        } 
        i++;
        j--;
    }
    console.log("largest number is " + max);
}

largest([1, 5, 3, 9, 2]);
