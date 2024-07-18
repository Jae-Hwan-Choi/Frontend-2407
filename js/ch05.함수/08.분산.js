// 이 code는 gpt쌤의 작품입니다.
// 저는 함수가 아예 머리속에 들어오질 않습니다. 
// 멍때리고 있습니다.

// 배열 원소 각각의 제곱의 합
function sumOfSquare(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i] * arr[i];
    }
    return sum;
}

// 배열 원소의 합의 제곱
function squareOfSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    let square = sum * sum;
    return square;
}

// 예시 사용법
let arr = [1, 2, 3, 4, 5];

// sumOfSquare 함수 사용 예시
let sumOfSquareResult = sumOfSquare(arr);
console.log("배열 원소 각각의 제곱의 합:", sumOfSquareResult);

// squareOfSum 함수 사용 예시
let squareOfSumResult = squareOfSum(arr);
console.log("배열 원소의 합의 제곱:", squareOfSumResult);