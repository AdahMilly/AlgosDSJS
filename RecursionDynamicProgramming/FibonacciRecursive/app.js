function fibonacci(number) {
    if (number === 0 || number === 1) {
        return 1
    }
    return fibonacci(n - 1) + fibonacci(n - 2)
}

console.log(fibonacci(4));
console.log(fibonacci(5));

//time complexity - o(2^n)
