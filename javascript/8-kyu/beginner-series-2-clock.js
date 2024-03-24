// [8kyu] Beginner Series #2 Clock
// ==============================================

/** -------------------------------------------------------------
 * Description:
 * Clock shows h hours, m minutes and s seconds after midnight.
 * Your task is to write a function which returns the time 
 * since midnight in milliseconds.
 * -------------------------------------------------------------*/


/** -------------------------------------------------------------
 * Example: 
 * h = 0 m = 1 s = 1 -> result = 61000
 * -------------------------------------------------------------*/


/**
 * miliseconds
 * ----------------------------------
 * 1 jam = 60 menit * 60 detik * 1000 milis
 * 1 menit = 60 detik * 1000 milis
 * 1 detik = 1000 milis
 */

function past(h, m, s) {
    return (h * 3600000) + (m * 60000) + (s * 1000)
}

// TESTING
console.log(past(0, 1, 1))
// console.log(past(1, 1, 1))
// console.log(past(0, 0, 0))
// console.log(past(1, 0, 1))
// console.log(past(1, 0, 0))