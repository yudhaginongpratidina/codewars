// [8kyu] Total amount of points
// ==============================================

/** -------------------------------------------------------------
 * Description:
 * Our football team has finished the championship.
 * Our team's match results are recorded in a collection of strings.
 * Each match is represented by a string in the format "x:y", where x is our team's
 * score and y is our opponents score.
 * -------------------------------------------------------------*/


/** -------------------------------------------------------------
 * Example: ["3:1", "2:2", "0:1", ...]
 * if x > y: 3 points (win)
 * if x < y: 0 points (loss)
 * if bmi <= 30.0 return "Overweight"
 * if x = y: 1 point (tie)
 * -------------------------------------------------------------*/


// SOLUTION
function points(games) {

    // split array
    let games_split = games.map(function(game) {
        var score = game.split(':')
        return score
    })

    // console.log(games_split)

    let points = [];

    // compare scores and push points
    for (let i = 0; i < games_split.length; i++) {
        if (parseInt(games_split[i][0]) > parseInt(games_split[i][1])) points.push(3)
        else if (parseInt(games_split[i][0]) < parseInt(games_split[i][1])) points.push(0)
        else points.push(1)
    }

    // console.log(points)

    let Total = 0;

    // sum total points
    for (let i = 0; i < points.length; i++) Total += points[i]

    // console.log(Total)
    return Total
}


// TESTING
console.log(points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"]))
// console.log(points(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"]))
// console.log(points(["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"]))
// console.log(points(["1:0","2:0","3:0","4:0","2:1","1:3","1:4","2:3","2:4","3:4"]))
// console.log(points(["1:0","2:0","3:0","4:4","2:2","3:3","1:4","2:3","2:4","3:4"]))