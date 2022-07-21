var first = 5;
var second = 8;
console.log(first, second);

// first approch of swap
/* var temp = first;
first = second;
second = temp ;
console.log(first, second);
 */


// second - destructuring
[first, second] = [second, first];
console.log(first, second);