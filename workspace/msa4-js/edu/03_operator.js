// 산술 연산자
// +, -, *, /, %, ** (거듭 제곱)

let num1 = 5;
let num2 = 10;

let sum = num1 + num2;
console.log(sum); // 15

let minus = num1 - num2;
console.log(minus); // -5

let multi = num1 * num2;
console.log(multi); // 50

let div = num1 / num2;
console.log(div); // 0.5

let rem = num1 % num2;
console.log(rem); // 5

// 문자열 연결
let str1 = 'a' + 'b';
let str2 = `test${str1}`; // 리터럴 템플릿 문법
console.log(str1, str2);

// 산술 대입 연산자
let num = 1; // '=' : 대입 연산자
num = num + 1;
num += 1;
num -= 1;
num *= 2;
num /= 3;
num %= 2;
console.log(num);

// 증감 연산자 ( ++, -- )
num = 0;
console.log(`전위 증감 연산자1 : ${++num}`);
console.log(`전위 증감 연산자2 : ${num}`);
num = 0;
console.log(`후위 증감 연산자1 : ${num++}`);
console.log(`후위 증감 연산자2 : ${num}`);

// 비교 연산자
// 두 값을 비교해서 true 또는 false를 반환하는 연산자
console.log(1 > 0); // true, 크다 or 초과
console.log(1 < 0); // false, 작다 or 미만
console.log(1 >= 0); // true, 크거나 같다 or 이상
console.log(1 <= 0); // false, 작거나 같다 or 이하
console.log(1 == '1'); // true, 불완전 비교 : 데이터 타입을 체크하지 않고 형태만 비교
console.log(1 === '1'); // false, 완전 비교 : 데이터 타입까지 체크하여 비교
console.log(1 != '1'); // false, 불완전 비교
console.log(1 !== '1'); // true, 완전 비교

// 논리 연산자
// AND 연산자 : 연결한 조건이 모두 true일 때만 true를 반환
console.log(1 === 1 && 1 >= 0); // true
// OR 연산자 : 연결한 조건 중 하나라도 true이면 true를 반환
console.log(1 === 1 || 1 < 0); // true

num = 1;
console.log((num === 1 || num >= 0) && typeof num === 'string');

// NOT 연산자 : 조건이 true이면 false를, false이면 true를 반환
// `!` : 연산의 결과를 반대로
console.log(!(1 === 1)); // false
let bool = true;
console.log(!bool); // false