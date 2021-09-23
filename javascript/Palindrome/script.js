let str = "Race car";

let regex = /[\W_]/g ;
let newStr = str.toLowerCase().replace(regex,'');
// str.toLowerCase().replace(regex,'') ==> racecar
//1. 'Race car'.toLowerCase() = 'race car'
//2. 'race car'.replace(regex,'') ==> 'racecar' (replaces the portions of string which matches the regex = /[\W_]/g] i.e., removes whitespaces)

//Reverse the new string
let reverseStr = newStr.split('').reverse().join('');
//newStr.split('').reverse().join('') ==> 'racecar'
// 1. 'racecar'.split('') ==> ['r','a','c','e','c','a','r']
// 2. ['r','a','c','e','c','a','r'].reverse() ==> ['r','a','c','e','c','a','r']
// 3. ['r','a','c','e','c','a','r'].join('') ==> 'racecar'

//check whether reverseStr and newStr are equal
console.log(reverseStr === newStr);