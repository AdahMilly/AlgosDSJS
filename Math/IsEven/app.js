//even numbers are divisible by two
//check if number % 2 isn't equal to 0

function isEven(number) {
    for (let i = 0; i <= number; i++) {
        console.log('Running');
        if (number % 2 != 0) {
            return false
        }
    }
    return true
}

console.log(isEven(4));
console.log(isEven(9));

function evenNum(number) {
    return number % 2 === 0
}
//time complexity - o(n)