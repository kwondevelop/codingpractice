// 함수(function)
// 입력을 받아서 출력을 하는 일련의 과정을 정의한 것
// 특정 처리를 모듈화해서, 코드의 중복을 최소화

// 함수 선언식
// parameter : 함수 정의에서 전달받은 argument를 저장하는 변수
function function1(a, b) {
  let sum = a + b;
// 반환
// return : 함수의 연산 결과를 반환
  return sum;
}
// argument(인수) : 함수 호출에서 전달되는 값
let result = function1(1, 2);

// 그니까 파라미터로 a, b를 정의했으니까, 함수 호출할 때 1, 2를 전달하는 거야. 그러면 a에는 1이 저장되고, b에는 2가 저장되는 거지. 그리고 함수 안에서 sum이라는 변수를 만들어서 a와 b를 더한 값을 저장하고, 그 sum을 반환하는 거야. 그래서 function1(1, 2)를 호출하면 결과로 3이 반환되는 거야.
console.log(result);

function function2(a, b) {
  let sum = a + b;
  return sum;
}

let result2 = function2(3, 4);
console.log(result2);

// 함수 표현식 (은 호이스팅의 영향을 받지 않음)
// 함수의 이름을 생략한 익명 함수를 변수에 할당해서 사용하는 방식
// function3(5, 6); // 참조 에러 발생
const function3 = function(a, b) {
  return a + b;
}

// 화살표 함수
const function4 = (a, b) => a + b;

// 매개변수가 하나인 경우 괄호 생략 가능
const function5 = a => `test ${a}`;

// 매개변수가 없는 경우 괄호 생략 불가능
const function6 = () => 'test';

// 콜백 함수
function callBackTest(bool, cb) {
  if(bool) {
    cb();
  } else {
    console.log('콜백 실행 안됨');
  }
}

function test() {
  console.log('콜백 실행');
}

callBackTest(true, test);
callBackTest(true, () => console.log('콜백 실행'));