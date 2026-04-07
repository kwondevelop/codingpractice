// for문
// 기본 문법
// for (초기 값; 조건식; 1회의 루프 당 증감 값;) {
// 반복하고 싶은 처리
// }

// for(let i = 10; i > 0; i--) {
//   console.log(`${i}번째 으아악`);

//   if(i === 5) {
//     console.log('5번째에서 멈춥니다.');
//     // break : 반복문 실행 중 특정 조건을 달성했을 때, 반복문을 멈추게 함
//     break;
//   }
// }

// for(let i = 0; i < 5; i++) {
//   // continue : 반복문 실행 중 특정 조건을 달성했을 때, 현재 루프를 멈추고 다음 루프로 넘어감
//   if(i % 2 === 0) {
//     continue;
//   }
//   console.log(`${i}번째 루프문`);
// }

// for(let i = 0; i < 3; i++) {
//   console.log(`부모 : ${i}번째`);  
//   for(let j = 0; j < 3; j++) {
//     console.log(`자식 : ${j}번째`);
//   }
// }

// 구구단 2단 출력
// 예시
// 2 X 1 = 2
// 2 X 2 = 4
// ...
// 2 X 9 = 18

// // 2단
// for(let i = 1; i <= 9; i++) {
//   let j = (i * 2);
//   console.log(`2 X ${i} = ${j}`);
// }

// // 9단
// for(let i = 1; i <= 9; i++) {
//   let j = (i * 9);
//   console.log(`9 X ${i} = ${j}`);
// }

for(let i = 2; i <= 9; i++) {
  console.log(`** ${i}단 **`);
  for(let j = 1; j <= 9; j++) {
    console.log(`${i} X ${j} = ${i * j}`);
  }
}