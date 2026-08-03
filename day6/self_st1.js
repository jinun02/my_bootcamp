// document.querySelector('#external').addEventListener('click',()=>{
//             console.log('외부파일에서 실행됨.');
//         });

// 람다식

function multiply(a,b){
    return a+b;
}

// 람다식으로 변환 1단계
const multiply1=(a,b)=>{return a+b;};
// 람다식으로 변환 2단계
const multiply2=(a,b)=>a+b;

