# ArrayPrinter
> Print Array values using Node

I was bored so.. Yeah. I maded a Node.js module for print arrays........ I.. Well. Good luck bye.

using:
```js
const { printArray, doArray } = require("arrayPrinter");

const array = [
  "Hello World",
  1234567890,
  [
    "hello",
    "world",
    123,
    function aaa() {
      return "hello world";
    },
  ],

printArray(array) // <- this is the pure
// Ex: printArray(array, returnString, needsIndex, returnStringTranslated)
```

## Pure usage
```js
printArray(array);

//Return:
//[0]: "Hello World"
//[1]: 1234567890
//[2]: ["hello", "world", 123, function aaa() { return "hello world"; }]
//[3]: { hello: "world" number: 123 }
//[4]: () => { return "hello world"; }
```

## String return usage
> returnString
```js
const return = printArray(array, true);
console.log(return)

//Return:
//[
//  '[0]: "Hello World"',
//  '[1]: 1234567890',
//  '[2]: ["hello", "world", 123, function aaa() {  return "hello world"; }]',
//  '[3]: { hello: "world" number: 123 }',
//  '[4]: () => { return "hello world"; }'
//]
```

## Removing index in return
> needsIndex
```js
const return = printArray(array, [false/true], false); // (default is true)
console.log(return)

//return:
//"Hello World"
//1234567890
//["hello", "world", 123, function aaa() {  return "hello world"; }]
//{ hello: "world" number: 123 }
//() => { return "hello world"; }
//OR
//[
//  '"Hello World"',
//  '1234567890',
//  '["hello", "world", 123, function aaa() {  return "hello world"; }]',
//  '{ hello: "world" number: 123 }',
//  '() => { return "hello world"; }'
//]
```
## Translate return
> returnStringTranslated
```js
const return = printArray(array, true, false, true); // (default is false) [Important note: the first value (returnString) must be true for return a array, and the second value (needsIndex) needs be false.]
console.log(return)

//return:
//[
//  'Hello World', // is not '"Hello world"' any more.
//  1234567890, // numbers is now numbers
//  [ 'hello', 'world', 123, [Function: aaa] ], // arrays is now arrays. & functions in arrays are functions.
//  { hello: '"world"', number: 123 }, // objects is istil in dev just.. dont put functions inside here.
//  [Function (anonymous)] // functions is now functions
//]
```
