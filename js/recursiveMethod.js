// Pow recursive Method
function powMethod(number, pownum) {

    if (pownum === 1) {
        return number;
    } else if (pownum === 0) {
        return 1;
    }

    return number * powMethod(number, pownum - 1);
}


console.log(powMethod(2, 5));