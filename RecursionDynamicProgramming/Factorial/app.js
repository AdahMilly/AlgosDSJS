//recursion - a fuction that calls itself within the body

function Factorial(number) {
    if (number === 1) {
        return 1
    }
    return number * Factorial(number - 1)
}

console.log(Factorial(3));
console.log(Factorial(4));
console.log(Factorial(5));

//time complexity - o(n)