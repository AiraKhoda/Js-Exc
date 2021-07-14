// Pow recursive Method
// function powMethod(number, pownum) {

//     if (pownum === 1) {
//         return number;
//     } else if (pownum === 0) {
//         return 1;
//     }

//     return number * powMethod(number, pownum - 1);
// }



// console.log(powMethod(2, 5));




// Total Number less than it
function total(number) {
    let numbers = [];
    for (let i = 0; i <= number; i++) {
        numbers.push(i);

    }
    let sumNumber = numbers.reduce((sum, num) => sum + num, 0);

    return sumNumber;
}


console.log(total(7));