// 스코프
// 변수나 함수의 유효 범위
// 어디에 선언되었는지에 따라 접근 가능 여부가 달라짐
// 프로그램이 실행되는 동안 계속 유지

let test = '전역 스코프';

function output() {
// 지역 스코프(Local Scope)
// 함수 내에서 선언된 변수와 함수는 해당 함수 내에서만 유효
// 함수가 실행될 때마다 새로운 지역 스코프가 생성됨
  let test = '지역 스코프';
  
  if (true) {
// 블록 레벨 스코프(Block Level Scope)
// `{}`로 둘러 싸인 범위를 의미
    let test = '블록 레벨 스코프';
    console.log(test);
  }
  console.log(test);
}
output();
console.log(test);