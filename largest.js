const numbers = [44, 23, 34, 32, 54, 5, 78];

function largestElement(numbers) {
    let largest = 0;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element > largest) {
            largest = element;
        }
    }
    return largest;
}
const largeValue = largestElement(numbers);
console.log(largeValue);


// find the lowest number