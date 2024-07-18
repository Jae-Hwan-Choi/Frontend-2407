// 소수(prime number) 판별
let num = 12;
for (let i = 2; i < num; i++) {
    if (num % i == 0) {
        console.log(`${num}은/는 소수가 아님.`);
        break
    }
}

function isPrimeNumber(num){
    let sqrtNum = Math.floor(Math.sqrt(num));
    for (let i = 2; i < sqrtNum; i++){
        if (num % i == 0)
            return false;
    }
    // for (let i = 2; i < num; i++){
    //     if (num % i == 0)
    //         return true;
    // }
    return true;
}
console.log(12, isPrimeNumber(12));
console.log(13, isPrimeNumber(13));

// 2에서 부터 20까지의 소수
let PrimeNumber = []
for (let i = 2; i <= 100; i++){
    if (isPrimeNumber(i))
        PrimeNumber.push(i)
}
console.log(PrimeNumber);
