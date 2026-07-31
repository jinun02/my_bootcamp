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