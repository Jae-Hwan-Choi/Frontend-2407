/*
* 조건문
*/

// Math.random() -0.0 ~ 0.9999의 임의의 값을 생성해 줌
// Math.ceil() - 소수점 이하를 올려서 정수값을 만들어 줌

let num = Math.ceil(Math.random() *6);  // 1 ~ 6 정수값
console.log(num);

// 홀수/짝수 
if (num % 2 == 0) {
    console.log(`${num} 은/는 짝수입니다`);
}
if (num % 2 == 1) {
    console.log(`${num} 은/는 홀수입니다`);
}

num = Math.ceil(Math.random() * 6);
if (num % 2 == 0) {
    console.log(`${num} 은/는 짝수입니다.`);
} 
else {
    console.log(`${num} 은/는 홀수입니다.`);
}

// 조건문 안에 실행문이 한개만 있는 경우에는 {} 생략할 수 있다.

num = Math.ceil(Math.random() * 6);
if (num % 2 == 0)
    console.log(`${num} 은/는 짝수입니다.`);
else
    console.log(`${num} 은/는 홀수입니다.`);

// 123은 작은수 456은 큰수
if (num >= 4) {
    console.log(`${num} 은/는 큰수입니다.`);
}
else console.log(`${num} 은/는 작은수입니다.`);
    