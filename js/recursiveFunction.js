//Pow recursive fucnction

function pow(number, pownum) {

    if (pownum === 1) {
        return number;
    } else if (pownum === 0) {
        return 1;
    }

    return number * powpow(number, pownum - 1);
}



console.log(powMethod(2, 5));




// Total Number less than it
function total(number) {
    let numbers = [];
    for (let i = 0; i <= number; i++) {
        numbers.push(i);

    }
    let sumNumber = numbers.reduce((sum, num) => sum + num, 0);

    return sumNumber;
};

console.log(total(7));




// Reverse Number
function reverseNum(n, str = String(n)) {
    const thisDigit = str[str.length - 1];
    const recursiveResult = str.length === 1 ? '' : reverseNum(str.slice(0, str.length - 1));
    return Number(thisDigit + recursiveResult);
}