// [8kyu] Double Char
// ==============================================

/** -------------------------------------------------------------
 * Description:
 * Given a string, you have to return a string in which each 
 * character (case-sensitive) is repeated once.
 * -------------------------------------------------------------*/


/** -------------------------------------------------------------
 * Example: 
 * "String"      -> "SSttrriinngg"
 * "Hello World" -> "HHeelllloo  WWoorrlldd"
 * "1234!_ "     -> "11223344!!__  "
 * -------------------------------------------------------------*/

// SOLUTION
function doubleChar(str) {
    let str_split = str.split('');

    str_split.map(function(char, index) {
        str_split[index] = char + char
    })
    
    let str_join = str_split.join('');
    return str_join
}


// TESTING
console.log(doubleChar("String"))
console.log(doubleChar("Adidas"))
console.log(doubleChar("1337"))
console.log(doubleChar("illuminati"))
console.log(doubleChar("123456"))