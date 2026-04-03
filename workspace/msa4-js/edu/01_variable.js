// 변수(variable) : 변하는 데이터(값)를 저장하는 공간

// var : 중복 선언 가능, 재할당 가능, 함수 레벨 스코프

var num1; // 변수 선언
var num1; // 중복 선언 가능

var age = 1; // 변수 선언 및 초기화
age = 20; // 변수 재할당
num1 = 90; // num1 변수 초기화
str1 = 'sadsd'; // str1이라는 변수를 var로 선언 및 초기화

// let : 중복 선언 불가능, 재할당 가능, 블록 레벨 스코프
let name = '홍길동';
name = '둘리 호이잇';

console.log(name);

// 상수 : 중복 선언 불가능, 재할당 불가능, 블록 레벨 스코프
const gender = 'M';
// const gender; // 중복 선언 불가능
// gender = 'F';

// 호이스팅(hoisting) : 인터프리터가 변수와 함수의 메모리 공간을 선언 전에 미리 할당 하는 것
console.log(hoho); // undefined
var hoho = '호호';
console.log(hoho); // '호호' 출력

console.log(haha); // 참조 에러 발생
let haha = '하하';
console.log(haha);