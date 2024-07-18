// 타이머 내장함수

setTimeout(function() {
    console.log('3초 경과');
}, 3000);

const si = setInterval(() => {
    console.log(new Date());
}, 1000);

setTimeout(() => {
    console.log('5초 경과후 초시계 정지시키기');
    clearInterval(si);
}, 10000);