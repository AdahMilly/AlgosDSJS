//primality test -  determine whether input number is a prime number
//a number that is only divisible by 1 and itself

//check if a number is divisble by any other number other than 1 and itself
function isPrime(number) {
    for (let i = 2; i < number; i++) {
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
//worst case - o(n) - lineae time