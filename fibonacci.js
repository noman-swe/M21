// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

const fibo = [0, 1];
for (let i = 2; i <= 10; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
}
// console.log(fibo);



//fibo function 
// error handle
function fibonacciSeries(num) {
    if (typeof (num != 'number')) {
        return 'Please enter a number';
    }
    if(num < 2){
        return 'Enter a positive number greater than 2';
    }
    const fibo = [0, 1];
    for (let i = 2; i <= num; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }


    return fibo;
}

const fibonacci = fibonacciSeries(10);
const fibonacciInputValidate = fibonacciSeries('hgcgf');
console.log(fibonacci);
console.log(fibonacciInputValidate);