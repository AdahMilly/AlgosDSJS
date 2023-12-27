//infinite sequence, 1st two elements are 1, and then every other
//elememnt is the sum of the two preceding elements

//return the nth element of the fibonacci sequence
//pseudocode
//calculate the elements upto the sequence we are looking for
//return that element
//Declare the variables x, y, z, n, i
//Initialize the local variable x = 1, y = 1, i = 2
//Read a number from the user
//Display the value of x and y
//Repeat the process of Fibonacci series until i > n

//Fn = (Fn -1) + (Fn - 2)
//Fn represents the addition of the previous terms(Fn - 1) and(Fn - 2).
//Here Fn - 1 is the first terms, and Fn - 2 is the second terms of the Fibonacci series.

function Fib(n) {
    const numbers = [1, 1]
    for (let i = 2; i < n + 1; i++) {
        console.log('Running');
        numbers.push(numbers[i - 2] + numbers[i - 1])
    }
    return numbers[n]
}

console.log(Fib(4));
console.log(Fib(5));

//time complexity - o(n) - linear time complexity.