let one = 1,
	two = 2;

console.log(one + two);
console.log(`${one}${two}`);

/* 

                  |    const    |     let      |     var
--------------------------------------------------------------
reassgined?       |     ❌     |      ✅      |      ✅ 
--------------------------------------------------------------
redeclared?       |     ❌     |      ❌      |      ✅
--------------------------------------------------------------
block scope?      |     ✅     |      ✅      |      ❌
--------------------------------------------------------------
function scope?   |     ✅     |      ✅      |      ✅
--------------------------------------------------------------
stored in global  |     ❌     |      ❌      |      ✅
scope?            |            |              |

*/
