// Automatic Type Conversion

/* 
JavaScript has a built in feature that when we try to perform operators on
uncompatible types, e.g. multiplying a string - JS will not throw an error,
but it will instead in the background convert the incorrect type to the type
that it needs. This is called 'Type Coercion'

== --> comparison irrespective of data type
=== --> exact match of value and data type

false = 0
true = 1
null/undefined = false
0 = false
"" = false
NaN = false

*/

console.log(8 * null);
// → 0
// JS converts null to 0 as this it the logical conclusion

console.log('5' - 1);
// → 4
// JS converts the '5' to a number as its the most logical. Concatenation not supported using minus

console.log('5' + 1);
// → 51
// JS converts the 1 to a string because string concatenation is possilble with addition and therefore is the first thing it tries because the first value is string

console.log('five' * 2);
// → NaN
// JS tries to convert 'five' to a number - and so the result is NaN

console.log(false == 0);
// → true
// False is equal to zero, true is equal to 1

console.log(null == undefined);
// → true
// Null and undefined are the same

console.log(null == 0);
// → false
// When using ==, is the values are the same but of different type - it will equate to true. However is one side of the operator is null or undefined, it will equate to false

/* 
The || operator will always try to execute the left hand side first. When it can't (false), it will fallback on the right hand side.

The && operator will always try to execute the left hand side first. When it can (true), it will execute the right hand side.

Ultimately, the part to the right is only evaluated when necessary

The rules for converting strings and
numbers to Boolean values state that 0, NaN, and the empty string ("")
count as false
*/

console.log(null || 'string');
// → string
// null is false

console.log(NaN || 'not a number');
// → not a number
// NaN is false

console.log(0 || 'fallback');
// → fallback
// 0 is false

console.log('' || 'other string');
// → other string
// "" is false

//  Comparing || and &&

console.log(true || 'X');
// → LHS is true - it executes true

console.log(false || 'X');
// → LHS is false - it executes 'X'

console.log('---------------------');

console.log(true && 'O');
// → LHS is true - it executes 'O'

console.log(false && 'O');
// → LHS is false - it executes false
