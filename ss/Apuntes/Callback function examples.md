# JS101 Working with Callback Functions



## Example 4



```Javascript
let myArr = [[18, 7], [3, 12]].forEach(arr => {
  return arr.map(num => {
    if (num > 5) {
      return console.log(num);
    }
  });
}); // Output: myArr = undefined
```

|             **Action**             |                 **Performed on**                 |               **Side Effect**               |                       **Return Value**                       |       **Return Value Used?**        |
| :--------------------------------: | :----------------------------------------------: | :-----------------------------------------: | :----------------------------------------------------------: | :---------------------------------: |
| variable declaration and assigment |                       N/A                        |                    None                     | Undefined (variable declaration always evaluated as undefined) |                 No                  |
|       method call (forEach)        |                 [[18,7],[3,12]]                  |                    None                     |                          undefined                           |                 No                  |
|        Callback execution 1        |                  Each sub-array                  |                    None                     |                    [undefined, undefined]                    |                 No                  |
|         Method call (map)          |                  Each sub-array                  |                    None                     |                    [undefined, undefined]                    | Yes, returned by the outer callback |
|        Callback execution 2        |    Element of the sub-array in that iteration    |                    None                     |                          Undefined                           |     Yes, to transform the array     |
|            Comparison >            |    element of the sub-array in that iteration    |                    None                     |                           Boolean                            |        Yes, evaluated by if         |
|    function call (console.log)     | element of the sub-array in that iteration (num) | Outputs a string representation of a number |                          Undefined                           |                 Yes                 |
|                                    |                                                  |                                             |                                                              |                                     |



## Example 5

```javascript
[[1, 2], [3, 4]].map(arr => {
  return arr.map(num => num * 2);
});

//Output: [[2,4],[6,8]]
```

|      **Action**       |          **Performed on**           | **Side Effect** |     **Return Value**      |       **Return Value Used?**       |
| :-------------------: | :---------------------------------: | :-------------: | :-----------------------: | :--------------------------------: |
| 1) method call (map)  |            [[1,2],[3,4]]            |       No        |       [[2,4],[6,8]]       |                 No                 |
| 2) Callback execution |           Each sub array            |       No        |       [2,4], [6,8]        |  Yes, returned as argument to 1)   |
| 3) method call (map)  |           Each sub-array            |       No        |      [2,4] // [6,8]       |  Yes, returned as argument to 2)   |
| 4) Callback execution |   Each element of each sub array    |       No        |        2,4 // 6, 8        | Yes, returned as an argument to 3) |
|   5) Multiplication   | Each element of the sub-array (num) |       No        |           Num*2           | Yes, returned as an argument to 4) |
|   6) element access   | Each element of the sub-array (num) |       No        | The value of each element |           Yes, to do 5)            |
|                       |                                     |                 |                           |                                    |
|                       |                                     |                 |                           |                                    |