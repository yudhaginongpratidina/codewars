// [8kyu] Sum Arrays
// ==============================================

/** -------------------------------------------------------------
 * Description:
 * Write a function that takes an array of numbers and returns 
 * the sum of the numbers. The numbers can be negative or non-integer. 
 * If the array does not contain any numbers then you should return 0.
 * -------------------------------------------------------------*/


/** -------------------------------------------------------------
 * Example::
 * [1, 5.2, 4, 0, -1] => 9.2
 * [] -> 0
 * -------------------------------------------------------------*/

// SOLUTION
function sum (numbers) {
    "use strict";

    let total = 0;

    if (numbers.length <= 0) { return 0 }
    for (let i = 0; i < numbers.length; i++){ total += numbers[i]}
    return total
};



// TESTING
console.log(sum([]))
console.log(sum([1, 5.2, 4, 0, -1]))