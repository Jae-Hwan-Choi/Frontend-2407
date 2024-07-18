/*
* 함수 형태
*/
// 1. 매개변수(인수)와 변환값이 있는 함수
function add(a, b){
    return a + b;
}

// 2. 매개변수 없이 반환값만 있는 함수
function dice(){
    return Math.ceil(Math.random() * 6)
}
console.log(dice());

// 3. 매개변수만 있고 반환값이 없는 함수

function print(a){
    console.log(a);
}

print(`반환값이 없는 함수`)

// 4. 매개변수도 없고 반환값도 없는 함수

var golbalvar = 0;
function increment(){
    golbalvar++;
}
increment();
console.log(golbalvar);

