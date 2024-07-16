// 사분면 고르기 - 백준도장 14681

let x = Math.ceil(Math.random() * 2001) - 1000;
let y = Math.ceil(Math.random() * 2001) - 1000;

if (x > 0 && y > 0) {
    console.log(`${x},${y}는 1사분면 입니다`);
} else if (x < 0 && y > 0) {
    console.log(`${x},${y}는 2사분면 입니다`);
} else if (x < 0 && y < 0) {
    console.log(`${x},${y}는 3사분면 입니다`);
} else if (x > 0 && y < 0) {
    console.log(`${x},${y}는 4사분면 입니다`);
}