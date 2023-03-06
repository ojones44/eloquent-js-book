/* 

page 71

! Function declarations are not part of the regular
! top-to-bottom flow of control.

Some functions produce a value, such as power and square, and some
don’t, such as makeNoise, whose only result is a side effect.

Functions are blocks of code that are caled to perform repetitive tasks 
and also make the codebase more semantic

Functios with the 'return' keyword, inevitably return some sort of value.
The caveat though is that a function will immeditately jump out of itself
once it hits a return statement. It doesn't have to finish the block of code.

This will then pass the value in return back to the binding where it was invoked.

A return value if return with no value will give 'undefined'

Any block/local declared bindings with the same name as a 
global scope binding will take precedent inside the function
it is declared in and global will be ignored

ALL scopes can see global scopes, regardless of how nested
a block of code is. Each local scope can see the local scopes that it is contained within but if in a nested function, you then declare a new binding,
the function that that function is within cannot see it. This is
called 'Lexical Scoping'

!JavaScript is extremely broad-minded about the number of arguments
!you pass to a function. If you pass too many, the extra ones are
!ignored. If you pass too few, the missing parameters get assigned the
!value undefined.

*/

// let x = 10;
// if (true) {
// 	let y = 20;
// 	var z = 30;
// 	const test = 'I can be read outside this function';
// 	console.log(x + y + z);
// }

// console.log(z);
// console.log(test);

/* -------------------------------------- */

// Global scope

/* 
Any bindings declared outside of all functons
and blocks within a file are GLOBAL. They can be accessed
everywhere.

'var' declared globally can be changed inside a function
'let' declared globally can be changed inside a function
'const' can't be changed full stop

*/

const outsideConst = 'Const outside function';
let outsideLet = 'Let outside function';
var outsideVar = 'Var outside function';

function loggingBindings() {
	console.log(outsideConst);
	console.log(outsideLet);
	console.log(outsideLet);

	outsideVar = 'Var got changed inside function';
	outsideLet = 'Let got changed inside function';

	console.log(outsideVar);
	console.log(outsideLet);
}

loggingBindings();

/* -------------------------------------- */

// Block scope

/* -------------------------------------- */

// Declaration Notation

const test = () => {
	console.log('Function 1');
};

const test_2 = () => {
	console.log('Function 2');
};

const test_3 = function () {
	console.log('Function declared in const');
};

console.log(test);
console.log(test_2);

test();
test_2();

/* -------------------------------------- */

// Optional arguments

/* 
In the below function, we can pass more arguments to the
to it than what are required and JS will not complain
 */

const squares = (x, y) => (y > x ? x * y : x * x);

console.log(squares(12, 10, true, 'test'));

/* 
If we pass too few arguments, we will get back undefined
*/

const cubes = (x, y) => console.log(x, y);

cubes(3);

/*

The downside of this is that it is likely you’ll
accidentally pass the wrong number of arguments to functions. And no
one will tell you about it.

The upside is that this behavior can be used to allow a function to
be called with different numbers of arguments. For example, this minus
function tries to imitate the - operator by acting on either one or two
arguments:

*/

function minus(a, b) {
	if (!b) return -a;
	else return a - b;
}
console.log(minus(10));
console.log(minus(10, 5));

/* 
However - defaults can be assigned to parameters.
Passing an argument to this parameter will override the default 
*/

function minusWithDefault(a, b = 2) {
	if (!a) return -b;
	else return a - b;
}

console.log(minusWithDefault(10));
console.log(minusWithDefault());

function power(base, exponent = 2) {
	let result = 1;
	for (let count = 0; count < exponent; count++) {
		result *= base;
	}
	return result;
}

console.log(power(2));
console.log(power(2, 6));

/* -------------------------------------- */

// Closure

/* 

The ability to treat functions as values, combined with the fact that
local bindings are re-created every time a function is called, means
that we can set functions to variables and when that function is called,
instead of storing a value in the variable, we can return functions.

A function that references bindings from local scopes around it is called a closure

When called, the function body sees the environment in which it was created,
not the environment in which it is called.

*/

console.log('\n------ CLOSURE ------\n');

function multiplier(factor) {
	return (number) => number * factor;
}

/* 

In this example, multiplier is called and creates an environment in
which its factor parameter is bound to 2. The function value it returns,
which is stored in twice, remembers this environment. So when that is
called, it multiplies its argument by 2

*/

// let twice = multiplier(2);
// Storing multiplier in 'twice' binding will return the below function

function twice(number) {
	return number * 2;
}

function useStateExample(x = 0) {
	let initalState = x;

	return [initalState, (newState) => (initalState = newState)];
}

const [count, setCount] = useStateExample(5);

console.log('\n------ RECURSION ------\n');

/* -------------------------------------- */

// Recursion

function findSolution(target) {
	function find(current, history) {
		if (current == target) {
			return history;
		} else if (current > target) {
			return null;
		} else {
			return (
				find(current + 5, `(${history} + 5)`) ||
				find(current * 3, `(${history} * 3)`)
			);
		}
	}
	return find(1, '1');
}

console.log(findSolution(24));
// → (((1 * 3) + 5) * 3)
