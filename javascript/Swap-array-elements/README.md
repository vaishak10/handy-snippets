# Swap array elements

**<u>Aim</u>**: Swap positions of two elements in a array.

**Input**: `[1,2,3]`. <br>
**Output**: `[3,2,1]`.

**Solution**: 
```js
const array = [1,2,3];

[array[0],array[2]] = [array[2],array[0]];
```
- To swap the elements, we take the help of destructuring. 
- The same logic can be used to swap two regular variables. 

## References:

[Destructuring assignment in javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
