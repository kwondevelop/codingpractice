// timer 함수
// 비동기로 코드를 실행

// setTimeout(cb, ms, [...args]) : number
// 내가 임의로 설정한 시간 후에 callback 함수를 실행
// callback 함수에 parameter가 필요한 경우 ...args를 추가
// 리턴 값은 timeoutID 0이 아닌 정수값 (해당 타이머의 고유한 식별값)
const timeoutId1 = setTimeout(() => {
  console.log('1초');
}, 1000);

console.log(timeoutId1)

// clearTimeout()
// clearTimeout()

// setInterval(cb, ms, [...agrs]) : number
// 설정한
const intervalId1 = setInterval(() => {
  console.log('인터벌');
}, 1000);

setTimeout(() => {
  clearInterval(intervalId1);
}, 5000);