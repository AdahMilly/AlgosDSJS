function minimumVal(numbers) {
    let currentMinValue = numbers[0]
    for (const num of numbers) {
        if (num < currentMinValue) {
            return currentMinValue = num
        }
    }
    return currentMinValue
}

console.log(minimumVal([1, 3, 5, 7, 9]));