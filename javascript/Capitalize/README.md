# Capitalize

**<u>Aim</u>**: Capitalize the first letter of the words in a sentence.

**Input**: `what is your name ?` <br>
**Output**: `What Is Your Name ?`

**Solution**: 
```js
let str = "what is your name ?", capitalizedString;
let strArray = str.split(' ');
strArray = strArray.map(str => str[0].toUpperCase() + str.slice(1));
capitalizedString = strArray.join(' ');
console.log(capitalizedString);
```

Let's breakdown the working of this program:<br>
```
1. "what is your name ?".split(' ') = ['what', 'is', 'your', 'name', '?']
2. ['what', 'is', 'your', 'name', '?'].map(str => str[0].toUpperCase() + str.slice(1)) ==>  ['What', 'Is', 'Your', 'Name', '?']
   - when str = 'what', 'what' => 'w'.toUpperCase() + 'what'.slice(1) ==> 'W' + 'hat'     ==> 'What'
   - when str = 'is', 'is' => 'i'.toUpperCase() + 'is'.slice(1) ==> 'I' + 's'             ==> 'Is'
   - when str = 'your', 'your' => 'y'.toUpperCase() + 'your'.slice(1) ==> 'Y' + 'our'     ==> 'Your'
   - when str = 'name', 'name' => 'n'.toUpperCase() + 'name'.slice(1) ==> 'N' + 'ame'     ==> 'Name'
   - when str = '?', the above operation is doesn't work for special characters wo we get ==> '?'
3.  ['What', 'Is', 'Your', 'Name', '?'].join(' ') ==> 'What Is Your Name ?';
```