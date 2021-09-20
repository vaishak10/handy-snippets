//Method 2: using regex with split

let str = 'ThisIsTheStringToSplit';

let newString = 'ThisIsTheStringToSplit'.split(/(?=[A-Z])/); 
// Using positive lookahead ' (?=[A-Z]) ' to keep the capital letters we get, 
// newString = ["This", "Is", "The", "String", "To", "Split"];

newString = newString[0] + ' ' + newString.splice(1,newString.length).map(s => s.toLowerCase()).join(' ');
// Breaking down  ' newString[0] + ' ' + newString.splice(1,newString.length).map(s => s.toLowerCase()).join(' ') ' in steps.
// 1. newString.splice(1,newString.length) = ["Is", "The", "String", "To", "Split"]
// 2. ["Is", "The", "String", "To", "Split"].map(s => s.toLowerCase()) = ["is", "the", "string", "to", "split"]
// 3. ["is", "the", "string", "to", "split"].join(' ') = 'is the string to split';
// 4. newString[0] + ' ' + 'is the string to split' = 'This is the string to split';

console.log(newString);