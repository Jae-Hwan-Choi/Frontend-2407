/*
*3항연산자
*/

let dice = Math.ceil(Math.random() * 6);  // 1~6사이의 값
let result = '';
if (dice % 2 == 0)
    result = '짝수'
else
    result = '홀수';
console.log(`${dice} 은/는 ${result}입니다.`);

let evenOdd = dice % 2 == 0 ? '짝수' : '홀수';  //조건식 ? 참일때의 값 : 거짓일때의 값
console.log(`${dice} 은/는 ${evenOdd}입니다`);

let smallBig = dice <= 3 ? '작은수' : '큰수'; 
console.log(`${dice} 은/는 ${smallBig}입니다`); 

