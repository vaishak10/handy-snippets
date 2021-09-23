# Check for Palindromes 

**<u>Aim</u>**: Return true if a string is palindrome otherwise return false.

>**Note**: A palindrome is a string which reads the same forwards or backwards.

**Input**: `race car` <br>
**Output**: `true`

**Solution**: 
```ts
let str = "race car";

//Lower case the string and use the regex to remove unwanted characters from the string.
let regex = /\W_/g ;
let newStr = str.toLowerCase().replace(re,'');

//Reverse the new string
let reverseStr = str.split('').reverse().join('');

//check whether reverseStr and newStr are equal, 
console.log(reverseStr === newStr);
```
