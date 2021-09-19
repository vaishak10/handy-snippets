//Method 1: using regex match()

let str = 'ThisIsTheStringToSplit';

let newString = str.match(/[A-Z][a-z]+/g); 
// newString = ["This", "Is", "The", "String", "To", "Split"]; 

newString = newString[0] + ' ' + newString.splice(1,newString.length).map(s => s.toLowerCase()).join(' ');

// Breaking down  ' newString[0] + ' ' + newString.splice(1,newString.length).map(s => s.toLowerCase()).join(' ') ' in steps.
// 1. newString.splice(1,newString.length) = ["Is", "The", "String", "To", "Split"]
// 2. ["Is", "The", "String", "To", "Split"].map(s => s.toLowerCase()) = ["is", "the", "string", "to", "split"]
// 3. ["is", "the", "string", "to", "split"].join(' ') = 'is the string to split';
// 4. newString[0] + ' ' + 'is the string to split' = 'This is the string to split';

console.log(newString);