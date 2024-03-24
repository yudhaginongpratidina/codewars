// [8kyu] Invert values
// ==============================================

/** -------------------------------------------------------------
 * Description:
 * Given a set of numbers, return the additive inverse of each. 
 * Each positive becomes negatives, and the negatives become positives.
 * -------------------------------------------------------------*/


/** -------------------------------------------------------------
 * Example::
 * invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
 * invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
 * invert([]) == []
 * -------------------------------------------------------------*/

function invert(array) {

    for (let i = 0; i < array.length; i++) {
        array[i] = -array[i]
    }

    return array
}

console.log(invert([1, 2, 3, 4, 5]))