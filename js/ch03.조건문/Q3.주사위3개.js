// 주사위 3개 백준도장 2480

let j1 = Math.ceil(Math.random() * 6);
let j2 = Math.ceil(Math.random() * 6);
let j3 = Math.ceil(Math.random() * 6);
let grade = 0;

if (j1 == j2 && j2 == j3) {
    grade = 10000 + j1* 1000;
} 
else if (j1 == j2 || j2 == j3 || j3 == j1){
    if (j1 == j2 || j1 == j3){
        grade = 1000 + j1 * 100;
    } else {
        grade = 1000 + j2 * 100;
    }
} else{
    grade = Math.max(j1, j2, j3) * 100;
}


console.log(`(주사위1) ${j1}, (주사위2) ${j2}, (주사위3) ${j3}이므로 상금은 ${grade}원 입니다.`);