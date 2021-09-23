# Chunk problem 

**<u>Aim</u>**: Given a array and a chunk size, divide the array into many subarrays with each subarray being of chunk size.

**Input**: array = `[1,2,3,4]`; chunk size = `2`  <br>
**Output**: `[[1,2],[3,4]]`

**Solution**:
```ts
let array = [1,2,3,4];
let size = 2;

let chunks = [];
let index = 0;

while(index < array.length) {
    chunks.push(array.slice(index,index+size)); 
    index += size;
}

console.log(chunks);
```

Deconstructing the while loop for given input:
```
while 0 < 4 (True)
   chunks.push(array.slice(0,2)) ==> chunks.push([1,2])
   index = 0 + 2 ==> 2

while 2 < 4 (True) 
    chunks.push(array.slice(2,4)) ==> chunks.push([3,4])
    index = 2 + 2 ==> 4

while 4 < 4 (False)

chunks = [[1,2],[3,4]]
```