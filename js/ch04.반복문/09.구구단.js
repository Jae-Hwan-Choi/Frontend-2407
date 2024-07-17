// 구구단
// let gugudan = [];
// for (let i = 2; i <= 9; i++){
//     let line ='';
//     for(let k = 1; k <= 9; k++){
//         line += `${i} * ${k} = ${i * k}\t`
//     }
//     gugudan.push(line);
// }
// for(let i = 0; i < gugudan.length; i++)
//     console.log(gugudan[i]);

// 선생님 버전
// for(let i=2;i<=9;i++){
//     for(let k=1;k<=9;k++){
//         console.log(`${i} x ${k} = ${i*k})`);
//     }
//     console.log();
// }



// 다이아몬드
let N = 4;   // 가둔데 두꺼운 별이 9개
for(let i=0;i<=N;i++){
    let line= '';
    for(let k=0;k<N-i;k++)
        line+=' ';
    for(let k=0;k<2*i+1;k++)
        line+='*'
    console.log(line);
}
for(let i=N-1;i>=0;i--){
    let line='';
    for(let k=0; k<N-i;k++)
        line+=' ';
    for(let k=0;k<2*i+1;k++)
        line+='*';
    console.log(line);
}