/*
*   if ()
*   else if ()
*   ....
*   else
*/
// score
let score = Math.ceil(Math.random() * 60) + 40;  // 41 ~ 100사이 정수
let grade = '';

if (score >= 90)
    grade = 'A';
else if (score >= 80)
    grade = 'B';
else if (score >= 70)
    grade = 'C';
else if (score >= 60)
    grade = 'D';
else
    grade = 'F';
console.log(`점수: ${score}, 학점: ${grade}`);

// FizzBuzz
// 숫자가 5로 나누어지면 Fizz, 7로 나누어지면 buzz, 5와 7 둘다 나누어지면 FizzBuzz
// 위에 경우가 아니면 숫자를 출력

//gpt슨생님 작품

// let score = Math.ceil(Math.random() * 100) + 1;
//     console.log(`랜덤숫자:${score}`);
// let output ='';
// if (score % 5 === 0 && score % 7 === 0) {
//     output ='FizzBuzz';
// }
// else if (score % 5 === 0){
//     output = "Fizz";
// }
// else if (score % 7 === 0){
//     output = 'buzz';
// }
// else {
// output = score;}

// console.log(output);

// 선생님 작품

let score = Math.ceil(Math.random() * 100) + 1;
    console.log(`랜덤숫자:${score}`);
if (score % 5 == 0 && score %7 == 0)    // if (score % 35 == 0)
    console.log('FizzBuzz');
else if (score % 5 == 0)
    console.log('Fizz');
else if (score % 7 == 0)
    console.log('Buzz');
else
    console.log(score);

