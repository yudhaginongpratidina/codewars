// [7kyu] From A to Z
// ==============================================

/** -------------------------------------------------------------
 * Description:
 * Given a string indicating a range of letters, return a string 
 * which includes all the letters in that range,
 * including the last letter. Note that if the range is 
 * given in capital letters,  return the string in capitals also!
 * -------------------------------------------------------------*/


/** -------------------------------------------------------------
 * Example: 
 * "a-z" ➞ "abcdefghijklmnopqrstuvwxyz"
 * "h-o" ➞ "hijklmno"
 * "Q-Z" ➞ "QRSTUVWXYZ"
 * "J-J" ➞ "J"
 * -------------------------------------------------------------*/

// SOLUTION => charCodeAt()
function gimmeTheLetters(sp) {
    let arr = sp.split('-')
    let start = arr[0].charCodeAt()
    let end = arr[1].charCodeAt()

    for (let i = start; i <= end; i++) {
        arr.push(String.fromCharCode(i))
    }

    arr.shift()
    arr.shift()
    
    return arr.join('')
}

console.log(gimmeTheLetters("a-z"))
console.log(gimmeTheLetters("J-J"))
console.log(gimmeTheLetters("a-a"))
console.log(gimmeTheLetters("a-b"))
console.log(gimmeTheLetters("y-z"))
console.log(gimmeTheLetters("W-Y"))
console.log(gimmeTheLetters("F-O"))