// 입력값 예시
let A = 14; // 현재 시각 (시)
let B = 30; // 현재 시각 (분)
let C = 20; // 조리 시간 (분)

// 초기 시간과 분을 설정
let hour = A;
let minute = B + C;

// 분이 60분 이상이면 시간에 반영
if (minute >= 60) {
    hour += Math.floor(minute / 60);
    minute = minute % 60;
}

// 시간이 24시간 이상이면 0~23시간으로 변환
if (hour >= 24) {
    hour = hour % 24;
}

console.log(`조리 후 시간: ${hour}시 ${minute}분`);


// 이게 뭔소리여 대체