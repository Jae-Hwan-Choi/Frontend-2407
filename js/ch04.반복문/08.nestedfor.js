// 중첩(nested) for 반복문

// 1. 별 다섯개를 다섯줄 그리기

// for (let i = 0; i <= 6; i++) {
//     let line = '';
//     for(let k = 0; k < 5; k++) {
//         line += '* ';
//     }
//     console.log(line);
// }

// 2. 디지털 시계를 매 10분마다 표시하기
// for (let hour = 0; hour <= 23; hour++){
//     for (let minute = 0; minute <= 59; minute++){
//         if (minute % 1 == 0)
//             console.log(`${hour}:${minute}`);
//     }
// }

// 3. 별을 대각선 모양으로 그리기 (다이아몬드 1사분면)

// for (let i = 0; i <= 5; i++){
//     let line = '';
//     for (let k = 0; k < i + 1; k++){
//         line += "* ";
//     }
//     console.log(line);
// }

// 4 사분면
for (let i = 5; i >= 1; i--){
    let line = '';
    for (let k = 1; k <= i; k++){
        line += "* ";
    }
    console.log(line);
}

// for (let i = 5; i >= 1; i--) {
//     let line = '';
//     for (let j = 1; j <= i; j++) {
//         line += "* ";
//     }
//     console.log(line);
// }


// 5. 주사위 눈으로 6 x 6 배열 만들기
let diceArray = [];
for (let i = 0; i < 6; i++) {
    let line = [];
    for(let k = 0; k < 7; k++){
        line.push(Math.ceil(Math.random() * 6))
    }
    diceArray.push(line);
}
console.log(diceArray);

