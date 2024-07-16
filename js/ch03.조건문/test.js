function printFizzBuzz(i) {
    if (i > 100) return;

    if (i % 5 === 0 && i % 7 === 0) {
        console.log('FizzBuzz');
    } else if (i % 5 === 0) {
        console.log('Fizz');
    } else if (i % 7 === 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }

    printFizzBuzz(i + 1);
}

printFizzBuzz(1);
