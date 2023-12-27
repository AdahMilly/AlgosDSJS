//atleast one factor will smaller or equal to the square root of the number
function isPrime(number) {
    for (let i = 2; i < Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false
        }
    }

    return true
}
console.log(isPrime(5));
console.log(isPrime(9));

//time complexity
//best case - o(1) - constant time(when number is 1/2)
//average case - o(n)
//worst case - o(sqrt(n)) - improved implementation