/* 

Single quotes and double quotes behave the same 
Back ticks (or template literals) can include ${}.
This allows to include expressions or perform calculations

Showing a dialog box or writing text to the screen is a side effect.

*/

const lineBreak = 'This is a string\nwith a new line break';

const backTick = `And they said to me: "This is a string with backticks". It's part of JS`;

const newLineInString = 'We can start a newline using "\\n"';

// ------------------------------------------------------------ //

const word = 'Coding';

const expressionsInBacktick = `${word} in all caps is ${word.toUpperCase()}`;

/* 
Binary operators - called such because they operate on two values
Unary operators - called such becaue they take one value
Logical operators - can be applied to Boolean values
Ternary operators - operating on three values. The first is the condition, and the other two are the potential resulting actions based on the condition
*/

const binaryBacktick = `Did you know that (100 - (2 * (35/7))) + 36 = ${
	100 - 2 * (35 / 7) + 36
}`;

// These will give the type of the data given
const typeOf1 = typeof '44';
const typeOf2 = typeof 44;

// Ternary

const ternary =
	1 === 1 ? 'Result of Ternary is True' : 'Result of Ternary is False';

/* 
Empty Values
There are two special values, written null and undefined, that are used
to denote the absence of a meaningful value. They are themselves values,
but they carry no information.

Many operations in JS that don’t produce a meaningful
value yield undefined simply because they have
to yield some value.

null and undefined can be treated the same

*/
