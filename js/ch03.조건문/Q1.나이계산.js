// 생년월일에 따른 나이 계산 gpt쌤 작품

const bYear = 1982, bMonth = 5, bDay = 7;
const today = new Date();
let tYear = today.getFullYear();
let tMonth = today.getMonth() + 1;  // js는 월에 1을 더해줘야 함
let tDay = today.getDate();

let age = tYear - bYear;
if (tMonth < bMonth || (tMonth === bMonth && tDay < bDay)) {
    age--;}

console.log(`${bYear}-${bMonth}-${bDay}, 나이 : ${age}`);

// 선생님 코드

const bYear = 1982, bMonth = 5, bDay = 7;
const today = new Date();
let tYear = today.getFullYear();
let tMonth = today.getMonth() + 1;  // js는 월에 1을 더해줘야 함
let tDay = today.getDate();

let age=0;
// 현재월이 생월보다 작은경우
if (tMonth < bMonth)
    age = tYear - bYear -1;
// 현재월이 생월보다 큰 경우
else if (tMonth < bMonth)
    age = tYear - bYear;
// 현재월이 생월보다 같은 경우 - 혀재일과 생일을 비교
else {
    if (tDay >= bDay)
        
}