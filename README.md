# mk_sum

`sum` is a function that takes multiple arguments (numbers or strings) and returns the sum of valid numeric values, ignoring non-numeric inputs. It handles both integers and decimal values.

## Installation

You can install `mk_sum` using npm:

```bash
npm install mk_sum

````


```js

const sum = require('mk_sum');

// Adding integers:
console.log(sum(1, 2, 3)); // Output: 6

// Ignoring non-numeric values:
console.log(sum(1, '2', 'abc', 3)); // Output: 6

// Adding decimal values:
console.log(sum(1.5, '2.5', 3)); // Output: 7

// Ignoring invalid values:
console.log(sum(1, 'hello', 2, '3.5abc'));  // Output: 3


````
