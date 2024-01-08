function isPowerofTwo(number) {
    if (number < 1) {
        return false
    }
    let dividedNum = number;
    while (dividedNum !== 1) {
        if (dividedNum % 2 !== 0) {
            return false
        }
        dividedNum = dividedNum / 2;
    }
    return true
}

console.log(isPowerofTwo(4));
console.log(isPowerofTwo(5));
console.log(isPowerofTwo(6));

//best case: = o(1)
//worst case: o(log n)

//improved algorithm - bitwise implementation
function isPowerOfTwoo(number) {
    if (number < 1) {
        return false
    }
    return (number & (number - 1)) === 0; //o(1)
}