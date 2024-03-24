// 8 KYU - Convert a String to a Number!
// --------------------------------------

/** -------------------------------------------------------------
 * Description:
 * We need a function that can transform a string into a number.
 *  What ways of achieving this do you know?
 * -------------------------------------------------------------*/


/** -------------------------------------------------------------
 * Example::
 * "1234"   --> 1234
 * "605"    --> 605
 * "1405"   --> 1405
 * "-7"     --> -7
 * -------------------------------------------------------------*/


// Solution
const stringToNumber = function (str) {
    return Number(str);
}


// Test
console.log(stringToNumber("1234"))
console.log(stringToNumber("605"))
console.log(stringToNumber("1405"))
console.log(stringToNumber("-7"))