// //  이 파일은 외부 스크립트 차일입니다.
// document.querySelector("#external").addEventListener("click",()=>{
//     alert('외부 스크립트 실행됨')
// })

// 위와 동일한 방식 위는 람다식을 사용하여 요약한거임
// document.querySelector("#external").addEventListener("click",a);
// function a(){
//     alert('외부 스크립트 실행됨')
// }

// "DOMContentLoaded" 돔이 실행된 다음에 실행하게 하는 
window.addEventListener("DOMContentLoaded",()=>{
    // alert("DOM에 로드됨");
    console.log("DOM 로드됨");
});



// 변수 : ver(안씀.), left(재할당 가능), const(재할당 불가능, 함수일때 속성값이 바뀔수있음.) 선언
// scope : 범위를 뜻함. 변수 스코프라는건 변수가 유지 되는 범위를 뜻합니다.
// 같은 범위내에서 할당은 가능하고 재선언은 불가능하다
//const : 변수 선언시 사용되는 키워드임. -> 반드시 초기화 해야함. 재선언 및 재할당 불가. 특정 값이나 객체를 고정할때 사용함
// 변수의 값이 객체나 배열처럼 참조형인 경우, 속성이나 값을 추가하거나 제거할 수 있음
// 하지만 다른 객체로 재 할당 금지. 

// undefined : 값이 할당되어지지 않음. 일단 선언은 해놔야함 (return 이 없는 함수를 호출해도 undefined가 뜸)
// 함수를 람다로 변형해서 사용할 수 있음.
// const xy= (a,b)=>{ a+b; } 함수를 변수처럼 활용하는법

// 객체에서의 undefined : 객체에서는 존재라지 않는 propery(속성)를 참조하면 undefined 리턴함.

// 자바스크립트에서는 배열도 객체임. 값 없는 빈 배열을 생성할 수 있는데 
// 이때 모든 배열의 요소 기본적으로 undefiend
// 조건식에서도 이를 이용해서 연계할 수 있음.

// boolean 으로는 false 를 반환합니다.
// 조건식의 값으로 활용될 때, 값이 존재하면 frue로 undefined면 false로 인식한다는 말임.

// 초기화 할떄는 undefined 가 아닌 null로 함.

// 