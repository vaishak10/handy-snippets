# Vowels

**<u>Aim</u>**: Given a string consisting of 0 or more vowels, return the total count of vowels in the string.

**Input**: `Hi, I am Vaishak`.<br>
**Output**: `6`.

**Solution**: 
```ts
let str = "Hi, I am Vaishak";
const matches = str.match(/[aeiou]/gi);
console.log(matches?.length || 0);
```

>Note: `match` is a regex method that returns the array of characters matched with the regex expression passed to it.
In our case, `str.match(/[aeiou]/gi)` returns `[ 'i', 'I', 'a', 'a', 'i', 'a' ]`

`matches?.length || 0` In this expression we see `?.` which stands for optional chaining. <br>
If we face a situation where in there are no matched characters, match returns nullish value. In order to avoid it, we place `?.`  before `matches` making sure `length` is not set to a invalid value ,for it to throw error. 

>Generally when a value does'nt exist before `?.` the value is evaluated to `undefined`. 

Refer the [mdn docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining) to know more about `Optional chaining`.

