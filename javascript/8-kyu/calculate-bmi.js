// [8kyu] Calculate BMI
// ==============================================

/** -------------------------------------------------------------
 * Description:
 * Write function bmi that calculates body mass index 
 * (bmi = weight / height**2).
 * -------------------------------------------------------------*/


/** -------------------------------------------------------------
 * Example::
 * if bmi <= 18.5 return "Underweight"
 * if bmi <= 25.0 return "Normal"
 * if bmi <= 30.0 return "Overweight"
 * if bmi > 30 return "Obese"
 * -------------------------------------------------------------*/


// SOULUTION

function bmi(weight, height) {

    let bmi = weight / height ** 2;

    if (bmi <= 18.5) return "Underweight" 
    else if (bmi <= 25.0) return "Normal"
    else if (bmi <= 30.0) return "Overweight" 
    else return "Obese"
}

// TESTING
console.log(bmi(80, 1.80))