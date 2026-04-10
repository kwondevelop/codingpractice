// // try문
// try {
// // 내가 실행할 처리를 작성
//   console.log('아아아');
//   console.log('아아아');
//   ㅓ냐래ㅔ머ㅑㅎ; // 어쨌든 에러 일으키는 코드
// } catch(error) {
// // try문에서 에러가 발생 시 처리할 로직 작성
//   console.log('에러 발생!!!!!!!!!! 삐오요ㅗ삐용');
//   console.log(error.name); // 에러 이름
//   console.log(error.message); // 에러 내용
//   console.log(error.stack); // 에러 상세 내용(위치 등)
// } finally {
// // try문에서 에러가 발생하든 안하든 무조건 실행할 로직 작성
//   console.log('A yo Finally~~~');
// }

// console.log('아아아');
// console.log('아아아');
// console.log('아아아');

try {
// 강제 예외 발생
  console.log('트라이 시작');
  if(true) { // 조건이 참일 때 에러 발생, false일 경우 에러 발생 안함
    const error = new Error('내가 강제로 일으킨 에러'); // 에러 객체 생성
    error.name = 'DIY 에러'; // 에러 이름 변경
    throw error; // 에러 객체 던지기
  }
  console.log('트라이 끝');
} catch(error) {
  console.log(error.stack);
}

// 에러를 상세하게 처리하는 방법
// 여러 종류의 에러를 처리하고 싶을 때
// instanceof 연산자를 사용하여 예외를 구체적으로 처리
try {
  throw new TypeError('문법이 이상해요');
} catch(error) {
  if(error instanceof SyntaxError) {
    console.log('신텍 신텍!');
  } else if(error instanceof ReferenceError) {
    console.log('참조 참조!');
  } else {
    console.log('마라탕후루');
  }
}