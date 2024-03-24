// [8kyu] Find the smallest integer in the array
// ==============================================

/** -------------------------------------------------------------
 * Description:
 * Given an array of integers your solution 
 * should find the smallest integer.
 * -------------------------------------------------------------*/


/** -------------------------------------------------------------
 * Example::
 * Given [34, 15, 88, 2] your solution will return 2
 * Given [34, -345, -1, 100] your solution will return -345
 * -------------------------------------------------------------*/


// Solution
class SmallestIntegerFinder {
    findSmallestInt(args) {
        return Math.min(...args)
    }
}


// test
const smallestIntegerFinder = new SmallestIntegerFinder()
console.log(smallestIntegerFinder.findSmallestInt([34, 15, 88, 2]))
console.log(smallestIntegerFinder.findSmallestInt([78,56,232,12,18]))