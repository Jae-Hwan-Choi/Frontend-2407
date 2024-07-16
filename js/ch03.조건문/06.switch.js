// 여러개 값중에 하나를 선택
// let score = Math.ceil(Math.random() * 50) + 50;  // 51 ~ 100 사이의 정수
// let grade = '';

// switch(parseInt(score / 10)) {   // score값은 5,6,7,8,9,10dmfh 변환됨
//     case 10:
//     case 9:
//         grade = 'A'; 
//     break;                       // switch 문을 벗어나게 해줌
//     case 8:
//         grade = 'B'; break;
//     case 7:
//         grade = 'C'; break;
//     case 6:
//         grade = 'D'; break;
//     default:
//         grade = 'F';
// }

// 97점 이상은 A+, 93,94,95,96점 이상은 A, 90, 91, 92점은 A-

let score = Math.ceil(Math.random() * 50) + 50;  // 51 ~ 100 사이의 정수
let grade = '';
switch (parseInt(score /10)) {
    case 9:
        if (score >= 97) {
            grade = 'A+';
        } else if (score >= 93) {
            grade = 'A';
        } else if (score >= 90) {
            grade = 'A-';
        }
        break;
    case 8:
            grade = 'B'; break;
    case 7:
            grade = 'C'; break;
    case 6:
            grade = 'D'; break;
    default:
            grade = 'F';        
}
if (grade === '') {
    // score가 60 미만인 경우
    grade = 'F';
}
console.log(`점수: ${score}, 학점: ${grade}`);