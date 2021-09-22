# Reverse a string 

**<u>Aim</u>**: Given a string i.e., 'ABC', you need to return 'CBA'.<br>

**Input**: `ABC`. <br>
**Output**: `CBA`.

**Solution**: 
```js
const str = "English";
const reversedStr = str.split('').reverse().join('');
console.log(reversedStr);
```

Let's break down the working of `str.split('').reverse().join('')`
```
1. 'English'.split('') ==>  ['E','n','g','l','i','s','h']
2. ['E','n','g','l','i','s','h'].reverse() ==> ['h', 's', 'i', 'l', 'g', 'n', 'E'];
3  ['h', 's', 'i', 'l', 'g', 'n', 'E'].join('') ===>  'hsilgnE'
```